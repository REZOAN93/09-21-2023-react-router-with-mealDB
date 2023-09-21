import { useLoaderData } from "react-router-dom";
import FoodDetails from "./FoodDetails";
import Category from "./Category";

const Shop = () => {
  const data = useLoaderData();
  const foods = data.meals;

  return <div>
     <Category></Category>
   <div className="grid grid-cols-4 gap-3 m-5">
   {
      foods.map(na=><FoodDetails key={na.idMeal} food={na}></FoodDetails>)
    }
   </div>
  </div>;
};

export default Shop;
