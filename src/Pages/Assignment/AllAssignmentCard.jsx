import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../Providers/AuthProviders";


const AllAssignmentCard = ({assignments}) => {
  const [allAssignment,setAllAssignment] = useState([])
  const {user} = useContext(AuthContexts)
    const {_id,assignment_title, marks,due_date,thumbnail_image_url,difficulty_level,email} = assignments;

    

    const handleDelete = id => {
      if(user?.email !== email){
        alert('Oops! Sorry, You Cannot Delete Others Data')
      }
       if(user?.email === email){
        const proceed = confirm('Are you sure want to delete');
      if (proceed){
        fetch(`https://online-study-group-assignment-server.vercel.app/assignment/${_id}`,{
            method: 'DELETE',
        })
        .then((res) => res.json()) 
        .then((data) => {
          console.log(data)
          if(data.deletedCount > 0){
            alert('deleted successfully')
            const remaining = allAssignment.filter(assignments => assignments._id !== id)
            setAllAssignment(remaining)
          }
        })
      }

      }
      
      
    };
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
               <Link to={`/updateAssignment/${_id}`}>
               <button  className="bg-orange-600 text-white px-5  py-2 rounded-lg ">Update</button>
                </Link>
              </div>
              }
              {
                user && 
                <div>
               <Link
               >
               <button onClick={() => handleDelete(assignments._id)}  className="bg-orange-600 text-white px-5 py-2 rounded-lg ">Delete</button>
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

export default AllAssignmentCard;
