import React, { Component } from 'react'
import Talent from './Talent'

class ArcaneTree extends Component {
    render() {
        return (
            <div >
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11210} idsWithLevel={{41: 11210, 42: 12592}} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11222} idsWithLevel={{ 43: 11222, 44: 12839, 45: 12840 }} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11237} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={6057} idsWithLevel={{ 54: 6057, 55: 6085 }} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={29441} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11213} idsWithLevel={{ 46: 11213 ,  47: 12574 ,  48: 12575 ,  49: 12576 ,  50: 12577 }} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11247} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11242} idsWithLevel={{ 57: 11242 ,  58: 12467}} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={28574} idsWithLevel={{ 56: 28574 }} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11252} /></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11255} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} > | </div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={18462} idsWithLevel={{ 59: 18462 ,  60: 18463 }} /></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={12043} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={11232} /></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={15058} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
                <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                    <div style={{ order: 1, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 2, width: "40px", height: "40px" }} ><Talent lvl={this.props.lvl} baseId={12042} /></div>
                    <div style={{ order: 3, width: "40px", height: "40px" }} ></div>
                    <div style={{ order: 4, width: "40px", height: "40px" }} ></div>

                </div>
            </div>
        )
    }
}

export default ArcaneTree