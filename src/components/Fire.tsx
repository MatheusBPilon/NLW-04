import React from "react";
import style from "./Profile.module.css";

export const Fire = () => {
  return (
    <div className={style.fire} style={{marginLeft:0, left:"8.5%", display: "inline-block", zIndex:-1, position:"relative", width:"1.25rem", height:"1.25rem"}}>
      <div className={style.fireleft} style={{marginLeft:0, top:"10%"}}>
        <div className={style.mainfire} style={{marginLeft:0, top:"10%"}}></div>
        <div className={style.particlefire} style={{marginLeft:0, top:"10%"}}></div>
      </div>
      <div className={style.firemain} style={{marginLeft:0, top:"10%"}}>
        <div className={style.mainfire} style={{marginLeft:0, top:"10%"}}></div>
        <div className={style.particlefire} style={{marginLeft:0, top:"10%", height:"0.1em", width:"0.1em"}}></div>
      </div>
      <div className={style.fireright} style={{marginLeft:0, top:"10%"}}>
        <div className={style.mainfire} style={{marginLeft:0, top:"10%"}}></div>
        <div className={style.particlefire} style={{marginLeft:0, top:"10%", height:"0.15em", width:"0.15em"}}></div>
      </div>
      <div className={style.firebottom} style={{marginLeft:0, top:"10%"}}>
        <div className={style.mainfire} style={{marginLeft:0, top:"10%"}}></div>
      </div>
    </div>
  );
};
