import React, { Component } from 'react'
import Item from './Item'

class Items extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        console.log(this.props.items)
        return (
            <div>
                                  {this.props.items.map(item =>
                        <Item key={item}
                                id={item}
                              
                        />
                    )}
            </div>
        )
    }
}

export default Items