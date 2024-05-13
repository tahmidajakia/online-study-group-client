import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../Providers/AuthProviders";


const AllAssignmentCard = ({assignments}) => {
  const [deleted,setDeleted] = useState([])
  const {user} = useContext(AuthContexts)
    const {_id,assignment_title, marks,due_date,thumbnail_image_url,difficulty_level,email} = assignments;

    

    const handleDelete = _id => {
      const proceed = confirm('Are you sure want to delete');
      if (proceed){
        fetch(`http://localhost:5000/assignment/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
            alert('deleted successfully')
            const remaining = deleted.filter(deletes => deletes._id !== _id)
            setDeleted(remaining)
          }
        })
        

      }
      // if(email===user?.email)
      
    }
    return (
      
        <div>

           <div className="card gap-5 bg-red-100 shadow-xl">
             <figure className="px-10 pt-10">
               <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
             </figure>
            <div className="card-body items-center text-center">
             <h2 className="card-title">{assignment_title}</h2>
             <p>{marks}</p>
            <div className="flex gap-4">
              <div>
               <Link to={`/updateAssignment/${_id}`}>
               <button  className="bg-red-700 text-white px-5  py-2 rounded-lg ">Update</button>
                </Link>
              </div>
              <div>
               <Link
               >
               <button onClick={() => handleDelete(assignments._id)}  className="bg-red-700 text-white px-5 py-2 rounded-lg ">Delete</button>
                </Link>
              </div>
            </div>
            <div className="card-actions">
             <Link to={`/assignmentDetails/${_id}`}>
              <button className="bg-red-700 text-white px-32 py-2 rounded-lg ">View </button>
             </Link>
             </div>
            </div>
         </div>



            
        </div>
    );
};

export default AllAssignmentCard;
