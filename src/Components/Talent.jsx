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

    getTalent(id, color) {
        axios.get(`/api/talents/${id}`)
            .then(res => {
                const talent = res.data[0];
                this.setState({ talent: talent, color: color });
            })
    }

    checkTalentsVsLevl(lvl) {
        var talents = this.props.idsWithLevel
        var maxId = this.props.baseId

        if (talents != null) {
            console.log(Object.entries(talents))
            Object.entries(talents).forEach(entry => {
                let key = parseInt(entry[0]);
                let value = entry[1];
                console.log(key, value, lvl)
                if (lvl >= key ) {
                    maxId = key
                    this.getTalent(value, true)
                }
            });
        }
        if (maxId == this.props.baseId)
        this.getTalent(this.state.talentId, false)
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