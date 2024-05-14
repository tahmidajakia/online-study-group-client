import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../Providers/AuthProviders";


const GiveMark = () => {
    const {user} = useContext(AuthContexts)
    const [submitted,setSubmitted] = useState([])
    useEffect(() => {
        fetch(`https://online-study-group-assignment-server.vercel.app/pending-assignment/${user?.email}`)
        .then(res => res.json())
        .then(data => setSubmitted(data))
    },[user])
    console.log(submitted)

    const handleSubmit = (_id,prevStatus,status) => {
        console.log(_id,prevStatus,status)
        fetch(`https://online-study-group-assignment-server.vercel.app/pending-status/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Complete'})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }
    return (
        <div className="space-y-6 mb-20 mt-3">
            {submitted.map(submit => (
            <div key={submit._id}>
            <div className=" flex justify-center items-center text-center mx-auto gap-10">
            <div className="border border-red-500  w-1/2 p-10">
                <div>
                    <h1 className="font-bold mb-5 text-2xl border border-red-600 p-5">Email:{submit.email}</h1>
                    <h1 className="font-bold mb-5 text-2xl border border-red-600 p-5">Submitted Assignment Pdf File:  {submit.pdf_file}</h1>
                    <h1 className="font-bold mb-5 text-2xl border border-red-600 p-5">Note: {submit.note}</h1>
                    
                </div>
            </div>
            <form className="border border-red-500  p-10">
                <div className="form-control ">
                  <label className="label">
                   <span className="label-text">Marks</span>
                  </label>
                   <input type="marks" name="marks" placeholder="Mark" className="input input-bordered" required />
                 </div>
                <div className="form-control ">
                  <label className="label">
                   <span className="label-text">Feedback</span>
                  </label>
                   <input type="text" name="feedback" placeholder="Feedback" className="input input-bordered" required />
                 </div>
                 <button onClick={() => handleSubmit(submit._id,submit.status, 'Complete')} className="btn bg-orange-600 text-white w-full mt-6">Give Mark</button>
            </form>

        </div>
            </div>))}
            
        </div>
    );
};

export default GiveMark;