import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../../Providers/AuthProviders";


const FeaturedCard = ({assignments}) => {
    const {_id,assignment_title, marks,due_date,thumbnail_image_url} = assignments;
  const {user} = useContext(AuthContexts);
    
    return (
      <div>

      <div className="card gap-5 border border-orange-600 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={thumbnail_image_url} alt="Shoes" className="rounded-xl" />
        </figure>
       <div className="card-body items-center text-center">
        <h2 className="card-title">{assignment_title}</h2>
        <p>{marks}</p>
       <div className="flex gap-4">
         {
          user && 
          <div>
          <Link to='/updateAssignment'>
          <button  className="bg-orange-600 text-white px-5  py-2 rounded-lg ">Update</button>
           </Link>
         </div>
         }
         {
          user && 
          <div>
          <Link to='/updateAssignment'>
          <button  className="bg-orange-600 text-white px-5 py-2 rounded-lg ">Delete</button>
           </Link>
         </div>
         }
       </div>
       <div className="card-actions">
        <Link to={`/assignmentDetails/${_id}`}>
         <button className="bg-orange-600 text-white px-32 py-2 rounded-lg ">View </button>
        </Link>
        </div>
       </div>
    </div>



       
   </div>
    );
};

export default FeaturedCard;