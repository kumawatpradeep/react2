import React from "react";

function Header(){


    const list=[
        {
            ican:<i class="fa-solid fa-location-dot"></i>,
            text:"Lorem ipsum dolor sit amet"
        },
        {
            ican:<i class="fa-solid fa-phone"></i>,
            text:"Call : +01 1234567890"
        },
       {
        ican:<i class="fa-solid fa-message"></i>,
        text:"demo@gmail.com"
       }

    ]
    return(
        <>
        <div className="header">
            {
                list.map((data)=>{
                    return(
                        <>
                        <div className="header-main">
                            <p>{data.ican}{data.text}</p>
                            
                        </div>
                        </>
                    )
                })
            }
        </div>
        
        </>
    )
}export{Header}