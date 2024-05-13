import { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { Link } from "react-router-dom";


const FeaturedSection = () => {
    const [dataLength,setDataLength] = useState(6)

    const [ assignment,setAssignment ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/assignment')
        .then(res => res.json())
        .then(data => setAssignment(data))
    },[])

    
    return (
        <div className=" p-5 mt-6 rounded-2xl">
            <h1 className="text-center text-4xl font-bold mt-5 mb-14">Assignment Featured</h1>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                {
                    assignment.slice(0,dataLength).map(assignments => <FeaturedCard
                        key={assignments._id} 
                        assignments={assignments}
                    ></FeaturedCard>)
                }
            </div>
            <div className="flex justify-center mt-14">
                <Link to='/allAssignment'>
                <button className="btn bg-orange-600 py-2 px-10 text-white mb-8">Show all</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedSection;