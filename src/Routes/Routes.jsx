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
import PrivateRoutes from "./PrivateRoutes";

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
          element: <PrivateRoutes>
            <CreateAssignments></CreateAssignments>
          </PrivateRoutes>
        },
        {
          path:'/assignmentDetails/:id',
          element: <PrivateRoutes>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoutes>,
           loader:({params}) => fetch(`https://online-study-group-assignment-server.vercel.app/assignment/${params.id}`)
        },
        {
          path: '/takeAssignment/:id',
          element: <TakeAssignment></TakeAssignment>,
          loader:({params}) => fetch(`https://online-study-group-assignment-server.vercel.app/assignment/${params.id}`)
        },
        {
          path: '/my-submit-assignment',
          element: <PrivateRoutes>
            <MySubmittedAssignment></MySubmittedAssignment>
          </PrivateRoutes>
        },
        {
          path:'/pending-assignment',
          element:<PrivateRoutes>
            <PendingAssignment></PendingAssignment>
          </PrivateRoutes>
        },
        {
          path:'/give-mark',
          element:<GiveMark></GiveMark>
        },
        {
          path:'/updateAssignment/:id',
          element: <UpdateAssignment></UpdateAssignment>,
          loader:({params}) => fetch(`https://online-study-group-assignment-server.vercel.app/assignment/${params.id}`)
        }
      ]
    },
  ]);

  export default router;