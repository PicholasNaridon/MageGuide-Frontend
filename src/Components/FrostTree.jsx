import React, { Component } from 'react'
import Talent from './Talent'

class FrostTree extends Component {
    render() {
        return (
            <div >
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11189} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11070} idsWithLevel={{ 12: 11070, 13: 12473, 14: 16763, 31: 16765, 32: 16766 }} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={29438} idsWithLevel={{ 10: 29438, 11: 29439, 39: 29440 }} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11207} idsWithLevel={{ 18: 11207, 19: 12672, 20: 15047, 21: 15052, 22: 15053 }} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11071} idsWithLevel={{ 15: 11071, 16: 12496, 17: 12497 }} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11165} idsWithLevel={{ 23: 11165, 24: 12475 }} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11175} /></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11151} idsWithLevel={{ 51: 11151, 52: 12952, 53: 12953 }} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={12472} idsWithLevel={{ 33: 12472 }} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} > | </div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11185} /></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={16757} idsWithLevel={{ 37: 16757, 38: 16758 }} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11160} idsWithLevel={{ 34: 11160, 35: 12518, 36: 12519 }} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11170} idsWithLevel={{ 25: 11170, 26: 12982, 27: 12983, 28: 12984, 29: 12985 }} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11958} idsWithLevel={{ 30: 11958 }} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11190} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11180} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11426} idsWithLevel={{ 40: 11426 }} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
            </div>
        )
    }
}

export default FrostTree