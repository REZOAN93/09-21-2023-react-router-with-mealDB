import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategory(data.meals));
  }, []);
  return (
    <div className="text-center bg-slate-300 py-3 font-bold">
      {categories.map((na,index) => (<NavLink key={index} className="ml-6 text-center" to={`/category/${na.strCategory}`}>{na.strCategory}</NavLink>))}
    </div>
  );
};

export default Category;
