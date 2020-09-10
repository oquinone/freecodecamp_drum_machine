import React, { Component } from 'react';
import BassDrum from '../Sounds/Bass-Drum-Hit-Level-6c.mp3'
import CrashCymbal from '../Sounds/Crash-Cymbal-Hit-B.mp3'
import DrumSticks from '../Sounds/Drum-Sticks-Hit-C.mp3'
import HiHat from '../Sounds/Hi-Hat-Open-Hit-C3.mp3'
import RideCymbal from '../Sounds/Ride-Cymbal-Wash-Crescendo.mp3'
import RideCymbalD from '../Sounds/Ride-Cymbal-Bell-Hit-D.mp3'
import SnareDrum from '../Sounds/Snare-Drum-Hit-Level-6b.mp3'
import SmallTomDrum from '../Sounds/Small-Tom-Drum-Hit-Level-4A.mp3'
import RideCymbalMetal from '../Sounds/Ride-Cymbal-Metal-Slide-Scrape-A.mp3'

class Drums extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: ""
        };
    }
    
    render() { 
        return (<div id="drum-machine" onKeyPress={(e) => this.pressKey(e)}>
            <div id="pads">
                <button className="drum-pad" 
                    onClick={() => this.playSound("Q", "BassDrum")}
                    id="BassDrum">
                    Q
                    <audio 
                        className="clip" 
                        id="Q"
                        src={BassDrum}>
                    </audio>
                </button>
                {/**********************************************************/}
                <button 
                    className="drum-pad" 
                    onClick={() => this.playSound("W", "Crash Cymbal")}
                    id="CrashCymbal">
                    W
                    <audio 
                        className="clip" 
                        id="W"
                        src={CrashCymbal}>
                    </audio>
                </button>
                {/**********************************************************/}
                <button 
                    className="drum-pad" 
                    id="DrumSticks"
                    onClick={() => this.playSound("E", "Drum Sticks")}>
                    E
                    <audio 
                        className="clip" 
                        id="E"
                        src={DrumSticks}>
                    </audio>
                </button>
                {/**********************************************************/}
                <br/>
                <button 
                    className="drum-pad" 
                    onClick={() => this.playSound("A", "Hi Hat")}
                    id="HiHat">
                    A
                    <audio 
                        className="clip" 
                        id="A"
                        src={HiHat}>
                    </audio>
                </button>
                {/**********************************************************/}
                <button 
                    className="drum-pad" 
                    onClick={() => this.playSound("S", "Ride Cymbal")}
                    id="RideCymbal">
                   S 
                   <audio 
                        className="clip" 
                        id="S"
                        src={RideCymbal}>
                    </audio>
                </button>
                {/**********************************************************/}
                <button 
                    className="drum-pad" 
                    onClick={() => this.playSound("D", "Snare Drum")}
                    id="SnareDrum">
                    D
                    <audio 
                        className="clip" 
                        id="D"
                        src={SnareDrum}>
                    </audio>
                </button>
                {/**********************************************************/}
                <br/>
                <button 
                    className="drum-pad" 
                    onClick={() => this.playSound("Z", "Ride Cymbal D")}
                    id="RideCymbalD">
                    Z
                    <audio 
                        className="clip" 
                        id="Z"
                        src={RideCymbalD}>
                    </audio>
                </button>
                {/**********************************************************/}
                <button 
                    className="drum-pad" 
                    onClick={() => this.playSound("X", "Small Tom Drum")}
                    id="SmallTomDrum">
                    X
                    <audio 
                        className="clip" 
                        id="X"
                        src={SmallTomDrum}>
                    </audio>
                </button>
                {/**********************************************************/}
                <button 
                    className="drum-pad" 
                    onClick={() => this.playSound("C", "Ride Cymbal Metal")}
                    id="RideCymbalMetal">
                    C
                    <audio 
                        className="clip" 
                        id="C"
                        src={RideCymbalMetal}>
                    </audio>
                </button>
                {/**********************************************************/}
            </div>
            <div id="display">
                <h1>{this.state.description}</h1>
            </div>
        </div>);
    }

    playSound(sound, desc){
        var s = document.getElementById(sound);
        s.play();
        this.setState({
            description: desc
        })
    }

    pressKey(event){
        switch(event.key){
            case "Q":
                this.playSound("Q");
                break;
            case "W":
                this.playSound("W");
                break;
            case "E":
                this.playSound("E");
                break;
            case "A":
                this.playSound("A");
                break;
            case "S":
                this.playSound("S");
                break;
            case "D":
                this.playSound("D");
                break;
            case "Z":
                this.playSound("Z");
                break;
            case "X":
                this.playSound("X");
                break;
            case "C":
                this.playSound("C");
                break;
            case "q":
                this.playSound("Q");
                break;
            case "w":
                this.playSound("W");
                break;
            case "e":
                this.playSound("E");
                break;
            case "a":
                this.playSound("A");
                break;
            case "s":
                this.playSound("S");
                break;
            case "d":
                this.playSound("D");
                break;
            case "z":
                this.playSound("Z");
                break;
            case "x":
                this.playSound("X");
                break;
            case "c":
                this.playSound("C");
                break;
            default:
                break;
        }
    }

    // soundDescription(newVal){
    //     this.setState({
    //         description: newVal
    //     });
    // }
}
 
export default Drums;