import * as React from "react";
import "./style.css";

export default function Movie(props) {
  return <div>
    <h2>{props.title}</h2>
    <p>{props.hours}h {props.minutes}min</p>
  </div>
}