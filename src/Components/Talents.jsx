import React from 'react';
import FrostTree from './FrostTree';
import ArcaneTree from './ArcaneTree';
import FireTree from './FireTree';
import axios from 'axios'
import { Row, Container, Col } from 'react-bootstrap'



export default class Talents extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            trainedTalents: [],
            allTalents: []
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.lvl !== this.props.lvl) {
          this.fetchTrans();
        }

      }
    

    fetchTrans = () => {
        var that = this
        axios.get(`/api/talents/level/${this.props.lvl}`)
            .then(res => {
                that.setState((prevState, props) => { 
                        return {trainedTalents: res.data}
                    })
            })
            // maybe make this a const?
        axios.get(`/api/talents`)
            .then(res => {
                that.setState((prevState, props) => { 
                        return {allTalents: res.data}
                    })
            })
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "#00c0ff" }}>Current Talents</h1>
                <Container >
                    <Row>
                        <Col>
                            <ArcaneTree lvl={this.props.lvl} trainedTalents={this.state.trainedTalents} allTalents={this.state.allTalents} />
                        </Col>
                        <Col>
                            <FireTree lvl={this.props.lvl} trainedTalents={this.state.trainedTalents} allTalents={this.state.allTalents} />
                        </Col>
                        <Col>
                            <FrostTree lvl={this.props.lvl} trainedTalents={this.state.trainedTalents} allTalents={this.state.allTalents} />
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}