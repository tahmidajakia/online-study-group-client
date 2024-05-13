import { useEffect, useState } from "react";
import AllAssignmentCard from "./AllAssignmentCard";


const AllAssignments = () => {

    const [ allAssignment,setAllAssignment ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/assignment')
        .then(res => res.json())
        .then(data => setAllAssignment(data))
    },[])
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mb-10 mt-6">All Assignments <span className="bg-red-600 text-white py-2 px-4 rounded-xl">{allAssignment.length}</span></h1>
            <div className="grid gap-6 mb-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                {
                    allAssignment.map(assignments => <AllAssignmentCard
                        key={assignments._id} 
                        assignments={assignments}
                    ></AllAssignmentCard>)
                }
            </div>
            
        </div>
    );
};

export default AllAssignments;