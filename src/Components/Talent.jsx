import React, { Component } from 'react'
import axios from 'axios'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'

class Talent extends Component {
    constructor(props){
        super(props)
        this.state ={
            talent: null
        }
    }
    componentDidMount() {
        axios.get(`/api/talents/${this.props.id}`)
            .then(res => {
                console.log(res)
                this.setState({ talent: res.data });
            })
    }

    render () {
        if (this.state.talent){
            return (
                <div style={{margin: "1%"}}>
                <OverlayTrigger key={this.state.talent.id} trigger="hover" overlay={<Tooltip id="tooltip-disabled"> <div className="wowhead-tooltip" dangerouslySetInnerHTML={{  __html: this.state.talent.toolTip}}></div></Tooltip>}>
                            <img  src={this.state.talent.jpg}>
                            </img>
                        </OverlayTrigger>
                </div>
            )
        }else{
            return <div />
        }
    }
}

export default Talent