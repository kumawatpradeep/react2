import React from "react";
import img1 from "../image/about-img.jpg";

function Next() {
  const list = [
    {
      img: `${img1}`,
    },
  ];

  return (
    <>
      <div className="com2">
        {list.map((data) => {
          return (
            <>
              <div className="com2-main">
                <img src={data.img} alt="" />
              </div>
              <div className="com2-text">
                <h1>WHO ARE WE?</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia, esse. Repellendus dolor ea vitae dignissimos illum
                  incidunt doloremque maxime ullam alias. Sunt est velit aut
                  nostrum adipisci magnam, reiciendis quasi.
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
export { Next };
