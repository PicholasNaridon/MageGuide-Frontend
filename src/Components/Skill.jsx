import React, { Component } from 'react'
import Price from './Price'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

class componentName extends Component {
    render() {
        return (
            <div style={{margin: "1%"}}>
                <div style={{ marginLeft: "30%", marginBottom: "10px" }}>
                    <OverlayTrigger key={this.props.id} trigger="hover" overlay={<Tooltip id="tooltip-disabled"> <div className="wowhead-tooltip" dangerouslySetInnerHTML={{ __html: this.props.tooltip }}></div></Tooltip>}>
                        <img src={this.props.jpg}>
                        </img>
                    </OverlayTrigger>
                </div>
                <Price cost={this.props.cost} />
            </div>
        )
    }
}

export default componentName