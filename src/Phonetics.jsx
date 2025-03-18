import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  //console.log(props.phonetic);
  return (
    <div>
      <ReactAudioPlayer
        src={props.phonetic.audio}
        autoPlay={false}
        controls
        className="audio-player"
      />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
