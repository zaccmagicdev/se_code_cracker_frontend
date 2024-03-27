import React from "react";
import './PegPalette.css';


function PegPallete(props){
    return (
    <div className="pegpallete">
        <button className="pegpallete__slot"/>
        <button className="pegpallete__slot"/>
        <button className="pegpallete__slot"/>
        <button className="pegpallete__slot"/>
        <button className="pegpallete__slot"/>
        <button className="pegpallete__slot-submit" >Attempt</button>
    </div>
    );
}

export default PegPallete;