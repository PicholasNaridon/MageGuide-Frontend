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

  render() {
    return (
      <ul>
        { this.state.skills.map(skill => <li key={skill.id}>{skill.name}</li>)}
      </ul>
    )
  }
}