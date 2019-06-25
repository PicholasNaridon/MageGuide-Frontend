import React, { Component } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import _ from 'lodash';
import axios from 'axios'


class Talent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            talentId: this.props.baseId,
            talent: null,
            color: null
        }
        this.getTalent = this.getTalent.bind(this)
        this.checkTalentsVsLevl = this.checkTalentsVsLevl.bind(this)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.lvl !== this.props.lvl) {
            this.checkTalentsVsLevl(this.props.lvl)

        }
    }
    componentDidMount() {
        this.checkTalentsVsLevl()

    }

    getTalent() {
        axios.get(`/api/talents/${this.state.talentId}`)
            .then(res => {
                const talent = res.data[0];
                this.setState({ talent: talent });
            })
    }

    checkTalentsVsLevl(lvl) {
        var talents = this.props.idsWithLevel

        if (talents != null) {
            Object.entries(talents).forEach(entry => {

                let key = entry[0];
                let value = entry[1];
                console.log(parseInt(key), value, lvl)
                if (lvl >= parseInt(key) ) {
                    this.setState({
                        talentId: value,
                        color: true
                    })
                }else {
                    this.setState({
                        talentId: this.props.baseId,
                        color: false
                    })
                }
    
            });
        }
        this.getTalent()
    }

    render() {
        if (this.state.talent) {
            return (
                <div style={{ margin: "1%" }}>
                    <OverlayTrigger key={this.state.talent.id} trigger="hover" overlay={<Tooltip id="tooltip-disabled"> <div className="wowhead-tooltip" dangerouslySetInnerHTML={{ __html: this.state.talent.toolTip }}></div></Tooltip>}>
                        <img style={this.state.color ? null : { filter: "grayscale(100%)" }} src={this.state.talent.jpg}>
                        </img>
                    </OverlayTrigger>
                </div>
            )
        } else {
            return <div />
        }
    }
}

export default Talent