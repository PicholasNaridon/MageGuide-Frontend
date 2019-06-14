import React, { Component } from 'react'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'
import _ from 'lodash';
import { npost } from 'q';


class Talent extends Component {
    constructor(props){
        super(props)
        this.state ={
            talent: null,
            color: false
        }
        this.findTalentById = this.findTalentById.bind(this)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.lvl !== this.props.lvl) {
            var that = this
            var trainedTalents = this.props.trainedTalents
            var allTalents = this.props.allTalents
            var ranks = this.props.allRanks.sort()

            var i;
            var list = []
            for (i = 0; i < ranks.length; i++) { 
                var talent = _.find(trainedTalents, { talentId: ranks[i]})
                if (talent != undefined){
                    list.push(talent)
                }
            }
            if (list.length >= 1){
                var setTalent = list[list.length - 1]
                that.setState((prevState, props) => { 
                    return {talent: setTalent, color: true}
                }, () => console.log("state"))

            }else {
                var notTrained = _.find(allTalents, function(t) { return t.talentId === that.props.baseId})
                that.setState((prevState, props) => { 
                    return {talent: notTrained}
                }, () => console.log("state"))
            }
        }
    }

    findTalentById(){
        var that = this
        var trainedTalents = this.props.trainedTalents
        var allTalents = this.props.allTalents
        var ranks = this.props.allRanks.sort()

        var i;
        var list = []
        for (i = 0; i < ranks.length; i++) { 
            var talent = _.find(trainedTalents, { talentId: ranks[i]})
            if (talent != undefined){
                list.push(talent)
            }
        }
        if (list.length >= 1){
            var setTalent = list[list.length - 1]
            that.setState((prevState, props) => { 
                return {talent: setTalent, color: true}
            }, () => console.log("state"))

        }else {
            var notTrained = _.find(allTalents, function(t) { return t.talentId === that.props.baseId})
            that.setState((prevState, props) => { 
                return {talent: notTrained}
            }, () => console.log("state"))
        }
        
        // var tal2 = _.find(allTalents, function(t){
        //     return t.talentId == ranks[0]
        // })
        
        // ranks.forEach((ele) => {
        //     var tal1 = _.find(trainedTalents, function(t){
        //         return t.talentId == ele
        //     })
        

        //     if (tal1 != null){
        //         this.setState({
        //             talent: tal1,
        //             color: true
        //         })
        //     }else {
        //         this.setState({
        //             talent: tal2,
        //         })
        //     }
            
        // })

        
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