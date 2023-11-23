import React from "react";

function Three(){

    const list=[
        {
            ican:<i class="fa-solid fa-location-dot"></i>,
            name:"Lorem ipsum dolor sit amet,"
        },
        {
            ican:<i class="fa-solid fa-phone"></i>,
            name:"8742879987"
        },
        {
            ican:<i class="fa-solid fa-message"></i>,
            name:"p@gmail.com"
        },
    ]

    return(
        <>
        <div className="three">
            {
                list.map((data)=>{
                    return(
                        <>
                        <p>{data.ican}<span>{data.name}</span> </p>  
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Three}