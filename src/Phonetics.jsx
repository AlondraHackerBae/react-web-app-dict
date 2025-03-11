import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div>
      Listen
      <br />
      <ReactAudioPlayer src={props.phonetic.audio} autoPlay={false} controls />
      <br />
      {props.phonetic.text}
    </div>
  );
}
