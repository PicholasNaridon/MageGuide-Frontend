import React from 'react';
import axios from 'axios';
import {Tooltip, OverlayTrigger} from 'react-bootstrap'

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
                    {this.state.skills.map(skill =>
                         <OverlayTrigger key={skill.id} trigger="hover" overlay={<Tooltip id="tooltip-disabled"> <div className="wowhead-tooltip" dangerouslySetInnerHTML={{  __html: skill.toolTip}}></div></Tooltip>}>
                         <span className="d-inline-block">
                             <img disabled style={{ pointerEvents: 'none' }} src={skill.jpg}>
                             </img>
                         </span>
                         </OverlayTrigger>
                    )}
                </ul>
            </div>

        )
    }
}