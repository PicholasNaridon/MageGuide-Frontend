import React from 'react';
import axios from 'axios';
import Skill from './Skill'

export default class Skills extends React.Component {
    state = {
        skills: []
    }
    componentDidUpdate(prevProps) {
        if (prevProps.level !== this.props.level) {
          this.fetchTrans();
        }
      }
    fetchTrans() {
        axios.get(`/api/skills?level=${this.props.level}`)
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
                        <Skill key={skill.id}
                                id={skill.id}
                                rank={skill.rank}
                                jpg={skill.jpg}
                                cost={skill.cost}
                                level={skill.level}
                                tooltip={skill.toolTip} 
                        />
                    )}
                </ul>
            </div>

        )
    }
}