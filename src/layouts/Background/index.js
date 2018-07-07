import React from "react";
import "./style.css";

class Background extends React.Component {
  render() {
    return (
      <div className="Background">
        <div className="shape shape-1 magenta right" />
        <div className="shape shape-2 yellow right" />
        <div className="shape shape-3 cyan right" />
        <div className="shape shape-4 key right" />
        <div className="shape shape-5 key-25 right" />
        <div className="shape shape-6 stripes right" />

        <div className="shape shape-7 magenta" />
        <div className="shape shape-8 yellow" />
        <div className="shape shape-9 cyan" />
        <div className="shape shape-10 key" />
        <div className="shape shape-11 key-25" />
        <div className="shape shape-12 stripes" />
      </div>
    );
  }
}

export default Background;
