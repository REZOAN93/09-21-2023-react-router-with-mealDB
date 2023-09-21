import { useNavigate } from "react-router-dom";

const Details = ({ data }) => {
  const { strInstructions, strMeal, strMealThumb } = data;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="card w-6/12 mx-auto m-5 bg-base-100 shadow-xl">
        <figure className=" h-80 w-full">
          <img src={strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">{strCategory}</h2> */}
          <h2 className="card-title">{strMeal}</h2>
          <p>{strInstructions}</p>
          <div className="card-actions justify-end">
            <button onClick={handleBack} className="btn btn-primary">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
