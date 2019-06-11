import React from 'react';
import Talent from './Talent'

export default class Talents extends React.Component {
    state = {
        skills: []
    }

    

    render() {
        return (
            <div>
                <ul>
                    {this.props.talents.map(talent =>
                        <Talent key={talent}
                                id={talent}
                        />
                    )}
                </ul>
            </div>

        )
    }
}