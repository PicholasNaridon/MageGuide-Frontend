import React, { Component } from 'react'
import axios from 'axios'
import { Tooltip, OverlayTrigger, Spinner } from 'react-bootstrap'

class TopDPM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skill: {}
        }
        this.fetchTrans = this.fetchTrans.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.skill !== this.props.skill) {
            this.fetchTrans();
        }
    }

    fetchTrans() {
        axios.get(`/api/skills/${this.props.skill}`)
            .then(res => {
                this.setState({
                    skill: res.data,
                })
            })
    }

    componentDidMount() {
        axios.get(`/api/skills/${this.props.skill}`)
            .then(res => {
                this.setState({
                    skill: res.data,
                })
            })
    }

    render() {
        if (this.state.skill) {
            return (
                <div style={{ width: "60px", height: "60px", margin: "auto", boxSizing: "border-box" }} >
                    <OverlayTrigger
                        key={this.state.skill.skillId}
                        trigger="hover"
                        overlay={
                            <Tooltip id="tooltip-disabled">
                                <div
                                    className="wowhead-tooltip"
                                    dangerouslySetInnerHTML={{ __html: this.state.skill.toolTip }}>
                                </div>
                            </Tooltip>}
                    >
                        <img src={this.state.skill.jpg} ></img>

                    </OverlayTrigger>
                </div>
            )
        } else {
            return <div></div>

        }
    }
}

export default TopDPM