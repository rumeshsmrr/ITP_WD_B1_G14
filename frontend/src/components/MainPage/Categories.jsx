import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/computer.png",
      cateName: "PC",
    },
    {
      cateImg: "./images/category/computer.png",
      cateName: "Laptops",
    },
    {
      cateImg: "./images/category/computer.png",
      cateName: "Monitors",
    },
    {
      cateImg: "./images/category/computer.png",
      cateName: "Graphic Cards",
    },
    {
      cateImg: "./images/category/computer.png",
      cateName: "Power Suppliers",
    },
    {
      cateImg: "./images/category/computer.png",
      cateName: "Oder Accessories",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
