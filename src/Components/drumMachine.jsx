import React, { Component } from "react";
import BassDrum from "../Sounds/Bass-Drum-Hit-Level-6c.mp3";
import CrashCymbal from "../Sounds/Crash-Cymbal-Hit-B.mp3";
import DrumSticks from "../Sounds/Drum-Sticks-Hit-C.mp3";
import HiHat from "../Sounds/Hi-Hat-Open-Hit-C3.mp3";
import RideCymbal from "../Sounds/Ride-Cymbal-Wash-Crescendo.mp3";
import RideCymbalD from "../Sounds/Ride-Cymbal-Bell-Hit-D.mp3";
import SnareDrum from "../Sounds/Snare-Drum-Hit-Level-6b.mp3";
import SmallTomDrum from "../Sounds/Small-Tom-Drum-Hit-Level-4A.mp3";
import RideCymbalMetal from "../Sounds/Ride-Cymbal-Metal-Slide-Scrape-A.mp3";

const soundsInfo = [
  { key: "Q", sound: BassDrum, description: "Bass Drum" },
  { key: "W", sound: CrashCymbal, description: "Crash Cymabl" },
  { key: "E", sound: DrumSticks, description: "Drum Sticks" },
  { key: "A", sound: HiHat, description: "Hi Hat" },
  { key: "S", sound: RideCymbal, description: "Ride Cymbal" },
  { key: "D", sound: SnareDrum, description: "Snare Drum" },
  { key: "Z", sound: RideCymbalD, description: "Ride Cymbal D" },
  { key: "X", sound: SmallTomDrum, description: "Small Tom Drum" },
  { key: "C", sound: RideCymbalMetal, description: "Ride Cymbal Metal" },
];

class Drums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };
  }

  render() {
    return (
      <div id="container">
        <div id="drum-machine" onKeyPress={(e) => this.pressKey(e)}>
          <div id="pads">
            {soundsInfo.map((item, index) => {
              return (
                <button
                  className="drum-pad"
                  onClick={() => this.playSound(item.key, item.description)}
                  id={item.description}
                  key={item.description}
                >
                  {item.key}
                  <audio
                    className="clip"
                    id={item.key}
                    src={item.sound}
                  ></audio>
                </button>
              );
            })}
          </div>
          <div id="display">
            <h1>{this.state.description}</h1>
          </div>
        </div>
      </div>
    );
  }

  playSound(sound, desc) {
    var s = document.getElementById(sound);
    s.play();
    this.setState({
      description: desc,
    });
  }

  pressKey(event) {
    switch (event.key) {
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
}

export default Drums;
