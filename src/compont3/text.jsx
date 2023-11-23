import React from "react";

function Text() {
  const list = [
    {
      ican:<i class="fa-brands fa-facebook"></i> ,
      name:"facebook"
    },
    {
      ican1: <i class="fa-brands fa-instagram"></i>,
      name:"instagram"
    },
    {
      ican2: <i class="fa-brands fa-twitter"></i>,
      name:"twitter"
    },
  ];

  return (
    <>
     
      <div className="main-text">
         
        {list.map((data) => {
          return (
            <>
            
              <div className="com3-text">
                <h1>{data.ican}</h1>
                
                <h2>{data.ican1}</h2>
                <h3>{data.ican2}</h3>
               <h4> {data.name}</h4>
                <p>
                  Minima consequatur architecto eaque assumenda ipsam itaque
                  quia eum in doloribus debitis impedit ut minus tenetur
                  corrupti excepturi ullam.
                </p>
                <button>Read more</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export { Text };
