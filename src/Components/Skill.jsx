import React, { Component } from 'react'
import Price from './Price'
import Train from './Train'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

class componentName extends Component {
    render() {
        return (
            <div style={{}}>
                <div style={{ textAlign: "center", margin: "auto 0" }}>
                    <div style={{ paddingBottom: "10px" }}>
                       <Train train={this.props.train} />
                    </div>
                    <OverlayTrigger
                        key={this.props.id}
                        trigger="hover"
                        overlay={
                            <Tooltip id="tooltip-disabled">
                                <div
                                    className="wowhead-tooltip"
                                    dangerouslySetInnerHTML={{ __html: this.props.tooltip }}>
                                </div>
                            </Tooltip>}
                    >
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