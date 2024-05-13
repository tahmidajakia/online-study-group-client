import { useEffect, useState } from "react";
import AllAssignmentCard from "./AllAssignmentCard";


const AllAssignments = () => {
    const [filter,setFilter] = useState('')

    const [ allAssignment,setAllAssignment ] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/assignment/${filter}`)
        .then(res => res.json())
        .then(data => setAllAssignment(data))
    },[filter])
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mb-10 mt-6">All Assignments <span className="bg-orange-600 text-white py-2 px-4 rounded-xl">{allAssignment.length}</span></h1>
            <div className="flex justify-center mx-auto mb-12 ">
                <select
                className="p-4"
                onChange={e => setFilter(e.target.value)}
                value={filter}
                name="category"
                id="category"
                >
                    <option value=''>Filter</option>
                    <option value='Easy'>Easy</option>
                    <option value='Medium'>Medium</option>
                    <option value='Hard'>Hard</option>
                </select>
            </div>
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