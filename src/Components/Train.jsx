import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'

class Train extends Component {
    render() {
        var train = this.props.train
        console.log("Train Val", train.toString())
        return (
            <div>
                {(function () {
                    switch ( train ) {
                        case true:
                            return <Badge pill variant="success" >Train</Badge>
                        case false: 
                            return <Badge pill variant="danger" >Don't Train</Badge>
                        case null: 
                            return <Badge pill variant="Warning">Maybe Train</Badge>
                        default:
                            return <div style={{color: "white"}}>not working</div>;
                    }
                })()}
            </div>
        )
    }
}

export default Train