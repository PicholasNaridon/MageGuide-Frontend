import React, { Component } from 'react';
import { Container, Button, Row, Col, ProgressBar } from 'react-bootstrap'
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
            <Container style={{
                width: "1900px", margin: "3% auto", backgroundColor: "#181818", opacity: "0.9", height: "900px"
            }}>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1 style={{ color: "Gold" }}>Classic Mage Guide</h1>
                    </Col>
                </Row>
                <Row style={{ height: "700px" }}>
                    <Col xl>
                        <Level level={this.state.level} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "5%"}}>
                            {this.state.level >= 2 ?
                                <Button style={{margin: "10px"}} onClick={this.setLevel.bind(this, this.state.level - 1)}> Previous Level </Button> : <div></div>
                            }
                            {this.state.level <= 59 ?
                                <Button style={{margin: "10px"}} onClick={this.setLevel.bind(this, this.state.level + 1)}> Next Level </Button> : <div></div>
                            }
                        </div>
                    </Col>
                </Row>

            </Container >
        )
    }
}

export default Main