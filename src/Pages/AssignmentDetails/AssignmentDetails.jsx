import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContexts } from "../../Providers/AuthProviders";


const AssignmentDetails = () => {
    const {user} = useContext(AuthContexts)
    const assignment = useLoaderData();
    const {assignment_title,_id,email,mark,thumbnail_image_url,description,difficulty_level} = assignment;
    return (
        <div>
            <img className="w-full h-[400px]" src={thumbnail_image_url} alt="" />
            <h1 className="text-2xl font-bold mt-10"><span className="text-orange-600" >Examiner Email :</span> : {email}</h1>
            <h1 className="text-2xl font-bold mt-6"><span className="text-orange-600" >Type Of Assignment</span> : {assignment_title}</h1>
            <h1 className="text-2xl font-bold mt-6"><span className="text-orange-600" >Difficulty Level</span> : {difficulty_level}</h1>
            <h1 className="text-2xl font-bold mt-6"><span className="text-orange-600" >Total Mark</span> : {mark}</h1>
            <h1 className="text-2xl font-bold mt-6"><span className="text-orange-600" >Description</span> : {description}</h1>
            <div className="">
      <Link to={`/takeAssignment/${_id}`}>
      <button className="bg-orange-600 text-white px-5  py-3 mt-8 mb-14 rounded-lg ">Take Assignment </button>
      </Link>
    </div>
        </div>
    );
};

export default AssignmentDetails;