import React, { Component } from 'react'
import axios from 'axios'
import { Tooltip, OverlayTrigger, Spinner } from 'react-bootstrap'

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        axios.get(`/api/items/7513`)
            .then(res => {
                console.log(res)
                this.setState({
                    item: res.data,
                })
            })
    }

    render() {
        if (this.state.item) {
            return (
                <div style={{ width: "60px", height: "60px", margin: "auto", boxSizing: "border-box"}} >
                <OverlayTrigger
                    key={this.state.item.id}
                    trigger="click"
                    overlay={
                        <Tooltip id="tooltip-disabled">
                            <div
                                className="wowhead-tooltip"
                                dangerouslySetInnerHTML={{ __html: this.state.item.toolTip }}>
                            </div>
                        </Tooltip>}
                >
                    <img src={`https://wow.zamimg.com/images/wow/icons/large/${this.state.item.icon}.jpg`} >
                    </img>
                </OverlayTrigger>
                </div>
            )
        } else {
            return <Spinner animation="border" />

        }
    }
}

export default Item