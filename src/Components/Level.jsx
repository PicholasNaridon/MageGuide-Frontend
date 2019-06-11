import React, { Component } from 'react'
import Skills from './Skills'
import Talents from './Talents';
import axios from 'axios';

class componentName extends Component {
    constructor(props){
        super(props)
        this.state ={
            talents: []
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
                talents: res.data.talents
            })
        })
    }

    render () {
        return (
            <div>
                <Skills level={this.props.level} />
                <Talents talents={this.state.talents}/>
            </div>
        )
    }
}

export default componentName