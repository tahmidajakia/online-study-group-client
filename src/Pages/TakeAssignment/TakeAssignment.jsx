import img from '../../assets/images/RS8101_GettyImages-658984533-hig.jpg'
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContexts } from "../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";


const TakeAssignment = () => {
    const assignments = useLoaderData();
    const {_id,email,assignment_title,examiner,mark} = assignments;
    const {user} = useContext(AuthContexts)

    const handleTake = e => {
        e.preventDefault()
        const form = e.target;
        const email= form.email.value
        const pdf_file = form.pdf_file.value
        const note = form.note.value
        // const examinee_email: examinee_email
        const status = 'Pending'

        const submitData = {
            email,
            pdf_file,
            note,
            assignment_title,
            examiner_email:examiner?.email,
            examiner,
            mark,
            status,
            // examiner:{email}
        }
        fetch('https://online-study-group-assignment-server.vercel.app/takeAssignment',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Take Assignment Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
    }
    return (
        <div className="flex justify-between mb-32">
            <div className='border border-orange-600 p-10'>
                <img className='' src={img} alt="" />
                <h1 className='text-2xl font-bold'>Examiner Name: {email}</h1>

            </div>
            <div>
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleTake} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PDF File</span>
          </label>
          <input type="url" label='pdf/Doc link' name="pdf_file" placeholder="PDF File" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Note Text</span>
          </label>
          <input type="text" name="note" placeholder="Text Area" className="input input-bordered h-[100px]" required />
        </div>
        <div className="form-control mt-6">
          <button className="bg-orange-600 btn text-white p-3 rounded-2xl">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default TakeAssignment;