import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContexts } from "../../Providers/AuthProviders";


const CreateAssignments = () => {
    // const navigate = useNavigate()

    const {user} = useContext(AuthContexts);
const [startDate, setStartDate] = useState(new Date());

const handleCreate = event =>{
    event.preventDefault()
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

        fetch('http://localhost:5000/assignment',{
            method: 'POST',
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
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
}


    return (
        <div>
            <div>
                <div className="text-center text-3xl mt-10 mb-8 font-semibold text-orange-600">
       <h1 className="text-3xl font-bold" >Create Assignment</h1>
       </div>
        <div className="flex justify-center items-center shadow-2xl bg-orange-100 w-1/2 mx-auto mb-24">
      <form onSubmit={handleCreate}  className="card-body">
        <div className=" form-control ">
          <div className="flex justify-center gap-2">
          <div>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="assignment_title" placeholder="Title" className="input input-bordered" required />
          </div>
          <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
          </div>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <div>
          <label className="label">
            <span className="label-text">Thumbnail_Image_Url</span>
          </label>
          <input type="text" name="thumbnail_image_url" placeholder="Photo" className="input input-bordered" required />
          </div>
          <div>
          <label className="label">
            <span className="label-text">Difficulty Level</span>
          </label>
          <select
          name="difficulty_level"
          id="difficulty_level"
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
          <DatePicker className="p-3 rounded-md border" selected={startDate} onChange={(date) => setStartDate(date)} />
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
          <input type="text"  name="mark" placeholder="Mark" className=" ml-12 input input-bordered" required />
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

export default CreateAssignments;