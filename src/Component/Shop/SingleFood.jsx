import { useLoaderData } from "react-router-dom";
import Details from "./Details";

const SingleFood = () => {
  const foodDetails = useLoaderData();
  const singleFood = foodDetails.meals;
 
  return (
    <div>
      {
        singleFood.map((na,inx)=><Details data={na} key={inx}></Details>)
      }
    </div>
  );
};

export default SingleFood;
