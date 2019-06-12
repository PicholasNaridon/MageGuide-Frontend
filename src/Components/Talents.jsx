import React from 'react';
import Talent from './Talent'

export default class Talents extends React.Component {
    state = {
        skills: []
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "#00c0ff" }}>Current Talents</h1>

                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
                    {this.props.talents.map(talent =>
                        <Talent key={talent}
                            id={talent}
                        />
                    )}
                </div>
            </div>

        )
    }
}