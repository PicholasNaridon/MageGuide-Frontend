import React, { Component } from 'react'
import Skills from './Skills'
import NewTalent from './NewTalent'
import Talents from './Talents';
import axios from 'axios';

class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: {
                level: 1,
                talents: []
            }
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.level !== this.props.level) {
            this.fetchTrans();
        }
    }
    fetchTrans = () => {
        axios.get(`/api/levels/${this.props.level}`)
            .then(res => {
                console.log(res)
                this.setState({
                    level: res.data,
                    newTalent: res.data.newTalent
                })
            })
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "#ffd100" }}>Current Level {this.state.level.level}</h1>
                <h1 style={{ color: "#ffd100" }}>Return to trainer: {this.state.level.returnToTrainer ? "Yes" : "No"}</h1>
                <NewTalent id={this.state.level.newTalent} />
                <Talents lvl={this.props.level} />
                <Skills level={this.props.level} />
            </div>
        )
    }
}

export default componentName