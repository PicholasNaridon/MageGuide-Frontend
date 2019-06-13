import React, { Component } from 'react'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'
import _ from 'lodash';


class Talent extends Component {
    constructor(props){
        super(props)
        this.state ={
            talent: null,
            color: false
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.trainedTalents !== this.props.trainedTalents) {
            this.findTalentById();
        }
    }

    findTalentById = () =>{
        var trainedTalents = this.props.trainedTalents
        var allTalents = this.props.allTalents
        var ranks = this.props.allRanks

        ranks.forEach((ele) => {
            trainedTalents.forEach((ele2) => {
                if (ele == ele2.talentId){
                    this.setState({
                        talent: ele2,
                        color: true
                    })
                }else {
                  var tal = _.find(allTalents, function(t){
                        return t.talentId == ranks[0]
                    })
                    this.setState({
                        talent: ele2,
                    })
                }
            })
        })

        
    }

    render () {
        if (this.state.talent){
            return (
                <div style={{margin: "1%"}}>
                        <OverlayTrigger key={this.state.talent.id} trigger="hover" overlay={<Tooltip id="tooltip-disabled"> <div className="wowhead-tooltip" dangerouslySetInnerHTML={{  __html: this.state.talent.toolTip}}></div></Tooltip>}>
                            <img style={this.state.color ?  null: {filter: "grayscale(100%)"}} src={this.state.talent.jpg}>
                            </img>
                        </OverlayTrigger>
                </div>
            )
        }else{
            return <div />
        }
    }
}

export default Talent