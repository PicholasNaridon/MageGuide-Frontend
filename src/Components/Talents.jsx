import React from 'react';
import FrostTree from './FrostTree';
import ArcaneTree from './ArcaneTree';
import FireTree from './FireTree';
import axios from 'axios'
import RevampedTalents from './RevampedTalents'
import { Row, Container, Col } from 'react-bootstrap'



export default class Talents extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            trainedTalents: [],
            allTalents: []
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "#00c0ff" }}>Current Talents</h1>
                <Container >
                    <Row>
                        <RevampedTalents lvl={this.props.lvl} />
                    </Row>
                </Container>

            </div>

        )
    }
}