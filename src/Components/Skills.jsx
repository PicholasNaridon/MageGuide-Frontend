import React from 'react';

import axios from 'axios';

export default class Skills extends React.Component {
    state = {
        skills: []
    }

    componentDidMount() {
        axios.get(`/api/skills`)
            .then(res => {
                console.log(res)
                const skills = res.data;
                this.setState({ skills });
            })
    }

    click = () => {
        axios.get(`/api/skills?level=4`)
            .then(res => {
                console.log(res)
             
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.click}>Click</button>
                <ul>
                    {this.state.skills.map(skill => <div key={skill.id}><img src={skill.jpg} /> <div className="wowhead-tooltip" dangerouslySetInnerHTML={{  __html: skill.toolTip}}></div></div>)}
                </ul>
            </div>

        )
    }
}