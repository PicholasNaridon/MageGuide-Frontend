import React, { Component } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Skills from './Skills'
import Talents from './Talents';
import axios from 'axios';
import Items from './Items';

class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            levelInfo: null
        }
    }

    componentDidMount() {
        this.fetchTrans();

    }

    componentDidUpdate(prevProps) {
        if (prevProps.level !== this.props.level) {
            this.fetchTrans();
        }
    }
    fetchTrans = () => {
        axios.get(`/api/levels/${this.props.level}`)
            .then(res => {
                this.setState({
                    levelInfo: res.data,
                    newTalent: res.data.newTalent
                })
            })
    }

    render() {
        if (this.state.levelInfo) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{ color: "#ffd100" }}>Current Level {this.state.levelInfo.level}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{color: "white"}}>{this.state.levelInfo.notes}</p>

                            <Items items={this.state.levelInfo.items ? this.state.levelInfo.items : []} />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <h1 style={{ color: "#ffd100" }}>Return to trainer: {this.state.levelInfo.returnToTrainer ? "Yes" : "No"}</h1>
                            <Skills level={this.props.level} />
                        </Col>
                        <Col>
                            <Talents lvl={this.props.level} />
                        </Col>
                    </Row>


                </Container>
            )
        } else {
            return <Spinner animation="border" />
        }
    }
}

export default componentName