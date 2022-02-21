import React, { useState } from "react";

function LightSwitchButton(props) {
  console.log("=========", props);
  const { light, setLight } = props;
  const handleClick = () => {
    if (light === "on") {
      setLight("off")
    } else {
      setLight("on");
    }
  };

  return (

      <button onClick={handleClick } className="LightSwitchButton">
        {light === 'on' && <span><i>💡</i> I'm on!</span>}
        {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
      </button>
    );
}

export default LightSwitchButton;