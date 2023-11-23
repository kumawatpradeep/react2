import React from "react";
import { One } from "./one";
import { Two } from "./two";
import { Three } from "./three";
import { For } from "./for";

function Main(){

    return(
        <>
        <div className="main-flx">
        <One/>
        <Two/>
        <Three/>
        <For/>
        </div>
        
        </>
    )
}
export{Main}