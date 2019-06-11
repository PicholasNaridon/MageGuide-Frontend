import React from 'react';
import axios from 'axios';
import Talent from './Talent'

export default class Talents extends React.Component {
    state = {
        skills: []
    }

    componentDidMount() {
        axios.get(`/api/talents`)
            .then(res => {
                console.log(res)
                const skills = res.data;
                this.setState({ skills });
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.skills.map(skill =>
                        <Talent key={skill.talentId}
                                id={skill.talentId}
                                rank={skill.rank}
                                jpg={skill.jpg}
                                tooltip={skill.toolTip} 
                        />
                    )}
                </ul>
            </div>

        )
    }
}