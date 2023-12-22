import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";


export default function TaskCard({ postedTask, handleDelete }) {

  const { user } = useAuth()
  const axios = useAxios()

  const {
    _id,
    email,
    taskTitle,
    description,
    priority,
    status } = postedTask;


  return (
    <div>
      <div className="card w-96 h-96 shadow-xl    bg-gradient-to-b from-red-500 from-5%  to-red-300 to-90%">
        <div className="card-body">
          <div className="flex justify-center w-full ">
            <h2 className="card-title text-sm bg-red-700 text-white w-fit rounded-md py-1 px-2 ">{priority}</h2>
          </div>
          <div className="flex justify-between border-b-2 pb-3">
            <h2 className="card-title font-bold text-3xl">{taskTitle}</h2>
            <h2 className="card-title uppercase text-info font-extrabold">{status}</h2>
          </div>
          <p className="text-white">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-red-700 border-none text-white hover:bg-red-800 ">On Going</button>
          </div>
        </div>
      </div>
      {/* <div>{_id} </div>
      <div>{email} </div>
      <div>{taskTitle} </div>
      <div>{description} </div>
      <div>{priority} </div> */}
    </div>

  )
}
