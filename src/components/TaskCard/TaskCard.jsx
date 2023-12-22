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
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{taskTitle}</h2>
            <h2 className="card-title uppercase text-warning">{status}</h2>
          </div>
          <h2 className="card-title text-red-600">{priority}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">On Going</button>
          </div>
        </div>
      </div>
      <div>{_id} </div>
      <div>{email} </div>
      <div>{taskTitle} </div>
      <div>{description} </div>
      <div>{priority} </div>
    </div>
    
  )
}
