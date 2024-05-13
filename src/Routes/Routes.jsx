import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllAssignments from "../Pages/Assignment/AllAssignments";
import CreateAssignments from "../Pages/CreateAssignment/CreateAssignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import TakeAssignment from "../Pages/TakeAssignment/TakeAssignment";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import MySubmittedAssignment from "../Pages/MySubmittedAssignment/MySubmittedAssignment";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";
import GiveMark from "../Pages/GiveMark/GiveMark";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            // loader: () => fetch(`${import.meta.env.VITE_API_URL}/assignment`),
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/allAssignment',
          element:<AllAssignments></AllAssignments>
        },
        {
          path:'/create-assignment',
          element: <CreateAssignments></CreateAssignments>
        },
        {
          path:'/assignmentDetails/:id',
          element: <AssignmentDetails></AssignmentDetails>,
          loader:({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
          path: '/takeAssignment/:id',
          element: <TakeAssignment></TakeAssignment>,
          loader:({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
          path: '/my-submit-assignment',
          element: <MySubmittedAssignment></MySubmittedAssignment>
        },
        {
          path:'/pending-assignment',
          element:<PendingAssignment></PendingAssignment>
        },
        {
          path:'/give-mark',
          element:<GiveMark></GiveMark>
        },
        {
          path:'/updateAssignment/:id',
          element: <UpdateAssignment></UpdateAssignment>,
         loader:({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
        }
      ]
    },
  ]);

  export default router;