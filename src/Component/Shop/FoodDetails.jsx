import { useNavigate } from "react-router-dom";

const FoodDetails = ({ food }) => {
  const navigate = useNavigate();

  const { idMeal, strMealThumb, strMeal } = food;

  const handleBuyFood = () => {
    navigate(`/food/${idMeal}`)
  };
  return (
    <div className="card bg-base-100 shadow-xl flex flex-col">
      <figure className="w-full h-48">
        <img className="w-full h-48" src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="p-3 flex-grow">
        <h2>{strMeal}</h2>
      </div>
      <button onClick={handleBuyFood} className="btn btn-primary m-3">
        Buy Now
      </button>
    </div>
  );
};

export default FoodDetails;
