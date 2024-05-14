import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import AllAssignmentCard from "./AllAssignmentCard";


const AllAssignments = () => {

    const [ allAssignment,setAllAssignment ] = useState([]);
    useEffect(() => {
        fetch('https://online-study-group-assignment-server.vercel.app/assignment')
        .then(res => res.json())
        .then(data => setAllAssignment(data))
    },[]);
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mb-10 mt-6">All Assignments <span className="bg-orange-600 text-white py-2 px-4 rounded-xl">{allAssignment.length}</span></h1>
            <div className=' flex items-center text-center mb-10 justify-center mx-auto
            '>
                <Tabs>
                    <TabList>
                        <Tab>Easy</Tab>
                        <Tab>Medium</Tab>
                        <Tab>Hard</Tab>
                    </TabList>
                    <TabPanel>
                        <h1 className='grid gap-6 mb-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-14'>
                        {
                    allAssignment.filter(j=>j.difficulty_level==='Easy').map(assignments => <AllAssignmentCard
                        key={assignments._id} 
                        assignments={assignments}
                    ></AllAssignmentCard>)
                }
                        </h1>
                    </TabPanel>
                    <TabPanel>
                        <h1 className='grid gap-6 mb-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-16'>
                        {
                    allAssignment.filter(j=>j.difficulty_level==='Medium').map(assignments => <AllAssignmentCard
                        key={assignments._id} 
                        assignments={assignments}
                    ></AllAssignmentCard>)
                }
                        </h1>
                    </TabPanel>
                    <TabPanel>
                        <h1 className='grid gap-6 mb-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-16'>
                        {
                    allAssignment.filter(j=>j.difficulty_level==='Hard').map(assignments => <AllAssignmentCard
                        key={assignments._id} 
                        assignments={assignments}
                    ></AllAssignmentCard>)
                }
                        </h1>
                    </TabPanel>
                </Tabs>
            </div>
            {/* <div className="grid gap-6 mb-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                {
                    allAssignment.map(assignments => <AllAssignmentCard
                        key={assignments._id} 
                        assignments={assignments}
                    ></AllAssignmentCard>)
                }
            </div> */}
            
        </div>
    );
};

export default AllAssignments;