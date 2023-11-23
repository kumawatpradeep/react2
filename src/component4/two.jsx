import React from "react";
import img1 from "../image/t1.jpg";
import img2 from "../image/t2.jpg";
import img3 from "../image/t3.jpg";

function Two() {
  const list = [
    {
      img: `${img1}`,
      name:"Martin Anderson  supervisor"
    },
    {
      img: `${img2}`,
      name:"Denny Butler  supervisor"
    },
    {
      img: `${img3}`,
      name:"Nathan Mcpherson supervisor"
    },
  ];
  return (
    <>
      <div className="text">
        <h1>OUR GUARDS</h1>
        <p>
         Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sit facere id
          consectetur, quia cupiditate eum tempore incidunt dicta quibusdam ad
          itaque nobis aspernatur placeat debitis nihil fugiat illum beatae
          quaerat!
        </p>
      </div>
      <div className="img-3">
        {list.map((data) => {
          return (
            <>
             
             <div className="rev">
             <img src={data.img} alt="" />
             <h3>{data.name}</h3>
                </div> 
                
              
            </>
          );
        })}
      </div>
      
      <div className="but-3">
      <button>Viwe All</button>
        </div>

    </>
  );
}
export { Two };
