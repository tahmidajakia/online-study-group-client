import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../Providers/AuthProviders";


const MySubmittedAssignment = () => {
    const {user} = useContext(AuthContexts)
    const [submitted,setSubmitted] = useState([])
    useEffect(() => {
      fetch(`https://online-study-group-assignment-server.vercel.app/my-submitted-assignment/${user?.email}`)
        .then(res => res.json())
        .then(data => setSubmitted(data))
    },[user])
    console.log(submitted)
    return (
        <div>
            <h1 className="text-center font-bold text-3xl mb-14">My Submitted Assignment <span className="bg-red-700 text-white p-3 rounded-2xl">{submitted.length}</span></h1>
            <div>
            <div className="overflow-x-auto mb-11 border border-red-700 p-5">
  <table className="table table-xs">
    <thead>
      <tr> 
        <th className="text-2xl font-bold text-black">Email</th> 
        <th className="text-2xl font-bold text-black"> Title</th> 
        <th className="text-2xl font-bold text-black">Status</th> 
        <th className="text-2xl font-bold text-black"> Marks</th> 
        <th className="text-2xl font-bold text-black">Obtained Marks</th> 
        <th className="text-2xl font-bold text-black">Feedback</th> 
        {/* <th>Assignment marks</th> 
        <th>My obtained marks</th> 
        <th>Feedback</th> */}
      </tr>
    </thead> 
    <tbody>
      {submitted.map(submit => (
        <tr key={submit._id}>
        <th className="">{submit.email}</th> 
        <td className=" font-bold" >{submit.assignment_title}</td> 
        <td className="font-bold"><div className={`${
              submit.status === 'pending' && 'bg-yellow-400 text-yellow-500'
            }
            ${
              submit.status === 'complete' && 'bg-green-400 text-green-500'
            }
            `}>
              <span className={`${
              submit.status === 'pending' && 'bg-yellow-400 text-yellow-500'
            }
            ${
              submit.status === 'complete' && 'bg-green-400 text-green-500'
            }`}>
                
              </span>
              <h2 className="bg-green-600 w-1/2 text-center py-1 px-2 text-white rounded-full ">{submit.status}</h2>
            
          </div></td>  
        {/* <td>{submit.mark}</td>  */}
        <td>{submit.mark}</td> 
        <td>{submit.marks}</td> 
        <td>{submit.feedback}</td>
      </tr>
      ))}
    </tbody> 
  </table>
</div>
            </div>
        </div>
    );
};

export default MySubmittedAssignment;