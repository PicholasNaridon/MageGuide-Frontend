import React, { Component } from 'react'
import Skills from './Skills'
import NewTalent from './NewTalent'
import Talents from './Talents';
import axios from 'axios';

class componentName extends Component {
    constructor(props){
        super(props)
        this.state ={
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
    fetchTrans = () =>{
        axios.get(`/api/levels?level=${this.props.level}`)
        .then(res => {
            this.setState({
               level: res.data
            })
        })
    }

    render () {
        return (
            <div>
            <h1 style={{color: "#00c0ff"}}>Current Level {this.state.level.level}</h1>
            <h1 style={{color: "#00c0ff"}}>Return to trainer: {this.state.level.returnToTrainer ? "Yes" : "No"}</h1>
            <NewTalent id={this.state.level.newTalent} />

                <Skills level={this.props.level} />

                <Talents talents={this.state.level.talents} />
            </div>
        )
    }
}

export default componentName