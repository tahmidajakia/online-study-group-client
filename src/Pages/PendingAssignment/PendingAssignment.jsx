import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";


const PendingAssignment = () => {
    const {user} = useContext(AuthContexts)
    const [submitted,setSubmitted] = useState([])
    useEffect(() => {
      fetch(`https://online-study-group-assignment-server.vercel.app/pending-assignment/${user?.email}`)
        .then(res => res.json())
        .then(data => setSubmitted(data))
    },[user])
    console.log(submitted)
    return (
        <div>
            <h1 className="text-center font-bold text-2xl mt-3 mb-16">pending assignment <span className="bg-orange-700 text-white rounded-2xl p-3">{submitted.length}</span></h1>
            <div className="overflow-x-auto mb-16 border border-orange-700 p-5">
            <table className="table table-xs">
    <thead>
      <tr> 
        <th className="text-2xl font-bold">Email</th> 
        <th className="text-2xl font-bold"> Assignment title</th> 
        <th className="text-2xl font-bold">Assignment status</th> 
        <th className="text-2xl font-bold">Assignment marks</th> 
        {/* <th>My obtained marks</th>  */}
        <th className="text-2xl font-bold">Give Marks</th>
        {/* <th>pdf file</th> */}
      </tr>
    </thead> 
    <tbody>
      {submitted.map(submit => (
        <tr key={submit._id}>
        <th className="text-2xl font-bold">{submit.email}</th> 
        <td className="text-2xl font-bold">{submit.assignment_title}</td> 
        <td className="text-2xl"><div className={`${
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
        <td className="text-2xl font-bold">
          {submit.mark}

          </td> 
        <td><Link to='/give-mark'>
        <button className="bg-red-700 text-white px-5 py-4 rounded-xl">Give Mark</button>
        </Link>
        </td> 
        {/* <td>{submit.pdf_file}</td>  */}
        <td></td>
      </tr>
      ))}
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default PendingAssignment;