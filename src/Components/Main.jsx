import React, { Component } from 'react';
import { Button, ListGroup, Container, Row, Col, Nav } from 'react-bootstrap'
import Level from './Level'

const LEVELS20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const LEVELS40 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
const LEVELS60 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 1
        }
    }

    setLevel = (n) => {
        console.log(n)
        this.setState({
            level: n
        })
        console.log("STATE", this.state)
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1 style={{ color: "Gold" }}>Classic Mage Guide</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav>
                            <ListGroup vertical>
                                {LEVELS20.map(n =>
                                    <ListGroup.Item
                                        action
                                        variant={n == 10 ? "success" : "primary"}
                                        key={n}
                                        level={n}
                                        onClick={this.setLevel.bind(this, n)}
                                    >
                                        Level {n}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                            <ListGroup vertical>
                                {LEVELS40.map(n =>
                                    <ListGroup.Item
                                        action
                                        variant={n == 40 || n == 30 ? "success" : "primary"}
                                        key={n}
                                        level={n}
                                        onClick={this.setLevel.bind(this, n)}
                                    >
                                        Level {n}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                            <ListGroup vertical>
                                {LEVELS60.map(n =>
                                    <ListGroup.Item
                                        action
                                        variant={n == 60 ? "warning" : "primary"}
                                        key={n}
                                        level={n}
                                        onClick={this.setLevel.bind(this, n)}
                                    >
                                        Level {n}
                                    </ListGroup.Item>
                                )}

                            </ListGroup>
                        </Nav>

                    </Col>
                </Row>
                <Row>
                <Col xl>
                        <Level level={this.state.level} />
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default Main