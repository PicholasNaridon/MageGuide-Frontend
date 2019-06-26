import React, { Component } from 'react'
import axios from 'axios'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

class NewTalent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            talent: {}
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.fetchTrans();
        }
    }
    fetchTrans() {
        axios.get(`/api/talents/${this.props.id}`)
            .then(res => {
                this.setState({ talent: res.data[0] });
            })
    }

    render() {
        if (this.state.talent) {
            return (
                <div>
                    <h1 style={{ color: "#00c0ff" }}>Next Talent:</h1>
                    <div style={{ marginLeft: "30%", marginBottom: "10px" }}>
                        <OverlayTrigger key={this.state.talent.id} trigger="hover" overlay={<Tooltip id="tooltip-disabled"> <div className="wowhead-tooltip" dangerouslySetInnerHTML={{ __html: this.state.talent.toolTip }}></div></Tooltip>}>
                            <img src={this.state.talent.jpg}>
                            </img>
                        </OverlayTrigger>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h4 style={{ color: "green" }}>Available at level 10</h4>
                </div>
            )
        }
    }
}

export default NewTalent