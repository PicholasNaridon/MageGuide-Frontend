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
        console.log(prevProps, this.props)
        if (prevProps.lvl !== this.props.lvl) {
          this.fetchTrans();
        }
      }
    

    fetchTrans = () => {
        console.log("lvl",this.props.lvl)
        axios.get(`/api/talents/level/${this.props.lvl}`)
            .then(res => {
                console.log("TALENTS BY LEVEL", res.data)
                this.setState({ trainedTalents: res.data });
            })
            // maybe make this a const?
        axios.get(`/api/talents`)
            .then(res => {
                console.log(res)
                this.setState({ allTalents: res.data });
            })
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "#00c0ff" }}>Current Talents</h1>
                <Container >
                    <Row>
                        <Col>
                            <ArcaneTree trainedTalents={this.state.trainedTalents} allTalents={this.state.allTalents} />
                        </Col>
                        <Col>
                            <FireTree trainedTalents={this.state.trainedTalents} allTalents={this.state.allTalents} />
                        </Col>
                        <Col>
                            <FrostTree trainedTalents={this.state.trainedTalents} allTalents={this.state.allTalents} />
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}