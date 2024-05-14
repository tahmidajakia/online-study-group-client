import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContexts } from "../../Providers/AuthProviders";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";


const UpdateAssignment = () => {
  const navigate = useNavigate()
    const {user} = useContext(AuthContexts)
    const assignments = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const {_id,assignment_title,description, mark,due_date,thumbnail_image_url,difficulty_level,email} = assignments;

    const handleUpdate = e =>{
        e.preventDefault()
        const form = event.target;

    const assignment_title = form.assignment_title.value;
    const description = form.description.value;
    const thumbnail_image_url = form.thumbnail_image_url.value;
    const difficulty_level = form.difficulty_level.value;
    const 
    due_date = startDate;
    const email = form.email.value;
    const mark = form.mark.value;

    const assignmentData = {assignment_title,description,thumbnail_image_url,difficulty_level,due_date,email,mark,
      examiner:{
        email,
        name: user?.displayName
    }
    }
        console.log(assignmentData)

        fetch(`https://online-study-group-assignment-server.vercel.app/assignment/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  navigate('/allAssignment')

            }
        })

    }
    return (
        <div>
        <div>
            <div className="text-center text-3xl mt-10 mb-8 font-semibold text-orange-600">
   <h1 className="text-3xl font-bold" >Update Assignment</h1>
   </div>
    <div className="flex justify-center items-center shadow-2xl bg-orange-100 mb-20 w-1/2 mx-auto">
  <form onSubmit={handleUpdate} className="card-body">
    <div className=" form-control ">
      <div className="flex justify-center gap-2">
      <div>
      <label className="label">
        <span className="label-text">Title</span>
      </label>
      <input type="text" defaultValue={assignment_title} name="assignment_title" placeholder="Title" className="input input-bordered" required />
      </div>
      <div>
      <label className="label">
        <span className="label-text">Description</span>
      </label>
      <input type="text" defaultValue={description} name="description" placeholder="Description" className="input input-bordered" required />
      </div>
      </div>
    </div>
    <div className="flex justify-center gap-3">
      <div>
      <label className="label">
        <span className="label-text">Thumbnail_Image_Url</span>
      </label>
      <input type="text" defaultValue={thumbnail_image_url} name="thumbnail_image_url" placeholder="Photo" className="input input-bordered" required />
      </div>
      <div>
      <label className="label">
        <span className="label-text">Difficulty Level</span>
      </label>
      <select
      name="difficulty_level"
      id="difficulty_level"
      defaultValue={difficulty_level}
      className="border px-16 py-3 rounded-md"
      >
        <option value='Easy'>Easy</option>
        <option value='Medium'>Medium</option>
        <option value='Hard'>Hard</option>


      </select>
      {/* <input type="text" name="level" placeholder="Level" className="input input-bordered" required /> */}
      </div>
    </div>
    <div className="flex justify-center gap-3">
      <div>
      <label className="label">
        <span className="label-text">Deadline</span>
      </label>
      <DatePicker className="p-3 rounded-md border"  selected={startDate} onChange={(date) => setStartDate(date)} />
      {/* <input type="text" name="date" placeholder="Date" className="input input-bordered" required /> */}
      </div>
      <div>
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="text" defaultValue={user?.email} name="email" placeholder="Email" className="input input-bordered" required />
      </div>
    </div>
    <div>
      <label className="label">
        <span className="label-text ml-12">Assignment Marks</span>
      </label>
      <input type="text" defaultValue={mark}  name="mark" placeholder="Mark" className=" ml-12 input input-bordered" required />
      </div>

    <div className="form-control mt-6">
      <button className="btn bg-orange-600 text-white">Add</button>
    </div>
  </form>
</div>
        </div>
    </div>
    );
};

export default UpdateAssignment;