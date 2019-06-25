import React, { Component } from 'react'
import Talent from './Talent'

class FireTree extends Component {
    render() {
        return (
            <div >
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11069} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11103} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11119} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11100} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11078} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={18459} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11108} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11366} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11083} /></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11095} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11094} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={29074} /></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11115} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11113} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11124} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11129} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
            </div>
        )
    }
}

export default FireTree