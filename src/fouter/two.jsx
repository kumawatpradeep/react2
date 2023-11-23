import React from "react";

function Two(){

const list = [
    {
        itams:"Useful Link"
    },
    {
        p:"dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quisdotempor incididunt r"
    }
]

    return(
        <>
        <div className="two-f">
            {
                list.map((data)=>{
                    return(
                        <>
                        <h1>{data.itams}</h1>
                        <p>{data.p}</p>
                        </>
                    )
                })
            }
        </div>
        
        </>
    )
}
export{Two}