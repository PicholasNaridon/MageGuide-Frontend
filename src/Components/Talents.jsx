import React from 'react';
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