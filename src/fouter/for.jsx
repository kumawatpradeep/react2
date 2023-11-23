import React from "react";

function For(){

    const list=[
        {
            ican:<i class="fa-brands fa-facebook"></i>
        },
        {
            ican:<i class="fa-brands fa-twitter"></i>
        },
        {
            ican:<i class="fa-brands fa-youtube"></i>
        },
        {
            ican:<i class="fa-brands fa-instagram"></i>
        },
    ]
    return(
        <>
        <div className="for">
            <h1>Newsletter</h1>
            <input type="text"  placeholder="Enter your Email"/> <br /> <br />
            <button>Subcribe</button> <br /><br />
            {
                list.map((data)=>{
                    return(
                        <>
                      <s>{data.ican}</s>
                         
                        
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{For}