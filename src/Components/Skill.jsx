import React, { Component } from 'react'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'

class componentName extends Component {
    render () {
        return (
            <div style={{marginLeft: "30%", marginBottom: "10px"}}>
                    <OverlayTrigger key={this.props.id} trigger="hover" overlay={<Tooltip id="tooltip-disabled"> <div className="wowhead-tooltip" dangerouslySetInnerHTML={{  __html: this.props.tooltip}}></div></Tooltip>}>
                        <img  src={this.props.jpg}>
                        </img>
                    </OverlayTrigger>
            </div>
        )
    }
}

export default componentName