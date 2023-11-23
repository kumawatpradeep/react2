import React from "react";

function Image(props){

    return(
        <>

        <div className="slider-img">
        <img src={props.img} alt="" />
        </div>
        
        </>
    )
}
export{Image}