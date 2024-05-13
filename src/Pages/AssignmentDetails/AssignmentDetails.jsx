import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContexts } from "../../Providers/AuthProviders";


const AssignmentDetails = () => {
    const {user} = useContext(AuthContexts)
    const assignment = useLoaderData();
    const {assignment_title,_id,email} = assignment;
    return (
        <div>
            <h1>This is assignment details page {assignment_title}</h1>
            <h1>This is assignment details page {email}</h1>
            <div className="">
      <Link to={`/takeAssignment/${_id}`}>
      <button className="btn btn-primary">Take Assignment </button>
      </Link>
    </div>
        </div>
    );
};

export default AssignmentDetails;