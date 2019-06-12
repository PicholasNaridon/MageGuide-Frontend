import React, { Component } from 'react'

class Price extends Component {
    render () {
        return (
            <div>
                <span style={{padding: "3px", color: "white"}}>
                        <img src="https://wow.zamimg.com/images/icons/money-gold.gif"></img>  {this.props.cost.gold}
                </span>
                <span style={{padding: "3px", color: "white"}}>
                        <img src="https://wow.zamimg.com/images/icons/money-silver.gif"></img>  {this.props.cost.silver}
                </span>
                <span style={{padding: "3px", color: "white"}}>
                        <img src="https://wow.zamimg.com/images/icons/money-copper.gif"></img>  {this.props.cost.copper}
                </span>
            </div>
        )
    }
}

export default Price