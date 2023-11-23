import React from "react";

function One(){


    const list=[
        {
            name:"Guarder",
            p:"dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quisdotempor incididunt r"
        },
        
    ]
    return(
        <>
        <div className="one-f">
            {
                list.map((data)=>{
                    return(
                        <>
                        <h1>{data.name}</h1>
                        <p>{data.p}</p>
                        
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{One}