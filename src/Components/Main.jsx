import React, { Component } from 'react';
import { Button, Row, Col, ProgressBar } from 'react-bootstrap'

import Level from './Level'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 1
        }
        this.setLevel = this.setLevel.bind(this)
    }

    setLevel = (n) => {
        this.setState((prevState, props) => {
            return { level: n }
        })
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
                            <Button onClick={this.setLevel.bind(this, this.state.level + 1)}> Up </Button>
                            <Button onClick={this.setLevel.bind(this, this.state.level - 1)}> Down </Button>
                            <ProgressBar now={this.state.level} max={60} min={1} striped label={`${this.state.level}`} />

                        </Col>
                        <Col xl>
                            <Level level={this.state.level} />
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Container >
        )
    }
}

export default Main