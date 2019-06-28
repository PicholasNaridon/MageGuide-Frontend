import React, { Component } from 'react'
import { Tooltip, OverlayTrigger, Spinner } from 'react-bootstrap'
import _ from 'lodash';
import axios from 'axios'


class Talent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            talentId: this.props.baseId,
            talent: null,
            color: false
        }
        this.checkTalentsVsLevl = this.checkTalentsVsLevl.bind(this)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.lvl !== this.props.lvl) {
            this.checkTalentsVsLevl()

        }
    }
    componentDidMount() {
        axios.get(`/api/talents/${this.props.baseId}`)
        .then(res => {
            const talent = res.data[0];
            console.log(talent)
            this.setState({ talent: talent});
        })
        this.checkTalentsVsLevl()

    }

    checkTalentsVsLevl() {
        if (this.props.talentLvl <= this.props.lvl){
            this.setState({
                color: true
            })
        }else {
            this.setState({
                color: false
            })
        }
        
    }

    render() {
        if (this.state.talent) {
            return (
                <div style={{width: "10%", boxSizing: "border-box" }}>
                    <OverlayTrigger key={this.state.talent.id} trigger="hover" overlay={<Tooltip > <div className="wowhead-tooltip" dangerouslySetInnerHTML={{ __html: this.state.talent.toolTip }}></div></Tooltip>}>
                        <div>
                        <img style={this.state.color ? null : { filter: "grayscale(100%)" }} src={this.state.talent.jpg}>
                        </img>
                        <div style={{color: "rgb(255, 209, 0)"}}>{this.props.talentLvl}</div>

                        </div>
                    </OverlayTrigger>
                </div>
            )
        } else {
            return <Spinner animation="border" />
        }
    }
}

export default Talent