import React, { Component } from 'react'
import Talent from './Talent'

class ArcaneTree extends Component {
    render() {
        return (
                <div >
                    <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                        <div style={{ order: 1, width: "75px", height: "75px" }} ><Talent baseId={11210} allRanks={[11210, 12592]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 2, width: "75px", height: "75px" }} ><Talent baseId={11222} allRanks={[11222, 12839, 12840, 12841, 12842]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 3, width: "75px", height: "75px" }} ><Talent baseId={11237} allRanks={[11237,12463,12464]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 4, width: "75px", height: "75px" }} ></div>

                    </div>
                    <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                        <div style={{ order: 1, width: "75px", height: "75px" }} ><Talent baseId={6057} allRanks={[6057, 6085]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 2, width: "75px", height: "75px" }} ><Talent baseId={29441} allRanks={[29441, 29444, 29445, 29446, 29447]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 3, width: "75px", height: "75px" }} ><Talent baseId={11213} allRanks={[11213, 12574, 12575, 12576, 12577]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 4, width: "75px", height: "75px" }} ></div>

                    </div>
                    <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                        <div style={{ order: 1, width: "75px", height: "75px" }} ><Talent baseId={11247} allRanks={[11247, 12606]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 2, width: "75px", height: "75px" }} ><Talent baseId={11242} allRanks={[11242, 12467, 12469]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 3, width: "75px", height: "75px" }} ><Talent baseId={28574} allRanks={[28574]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 4, width: "75px", height: "75px" }} ></div>

                    </div>
                    <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                        <div style={{ order: 1, width: "75px", height: "75px" }} ><Talent baseId={11252} allRanks={[11252,12605]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 2, width: "75px", height: "75px" }} ><Talent baseId={11255} allRanks={[11255,12598]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 3, width: "75px", height: "75px" }} > | </div>
                        <div style={{ order: 4, width: "75px", height: "75px" }} ><Talent baseId={18462} allRanks={[18462]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>

                    </div>
                    <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                        <div style={{ order: 1, width: "75px", height: "75px" }} ></div>
                        <div style={{ order: 2, width: "75px", height: "75px" }} ><Talent baseId={12043} allRanks={[12043]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 3, width: "75px", height: "75px" }} ><Talent baseId={11232} allRanks={[11232, 12500, 12501, 12502, 12503]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 4, width: "75px", height: "75px" }} ></div>

                    </div>
                    <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                        <div style={{ order: 1, width: "75px", height: "75px" }} ></div>
                        <div style={{ order: 2, width: "75px", height: "75px" }} ><Talent baseId={15058} allRanks={[15058, 15059, 15060]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 3, width: "75px", height: "75px" }} ></div>
                        <div style={{ order: 4, width: "75px", height: "75px" }} ></div>

                    </div>
                    <div style={{ display: "flex", flex: "row", flexFlow: "space-evenly", flexWrap: "nowrap" }}>
                        <div style={{ order: 1, width: "75px", height: "75px" }} ></div>
                        <div style={{ order: 2, width: "75px", height: "75px" }} ><Talent baseId={12042} allRanks={[12042]} trainedTalents={this.props.trainedTalents} allTalents={this.props.allTalents}/></div>
                        <div style={{ order: 3, width: "75px", height: "75px" }} ></div>
                        <div style={{ order: 4, width: "75px", height: "75px" }} ></div>

                    </div>
                </div>
        )
    }
}

export default ArcaneTree