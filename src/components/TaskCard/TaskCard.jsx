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
      <div className="card w-96 h-96 shadow-xl    bg-gradient-to-b from-red-500 from-5%  to-red-400 to-90%">
        <div className="card-body">
          <div className="flex justify-center w-full ">
            <h2 className="card-title text-sm bg-red-700 text-white w-fit rounded-md py-1 px-2 ">{priority}</h2>
          </div>
          <div className="flex justify-between border-b-2 pb-3">
            <h2 className="card-title font-bold text-3xl">{taskTitle}</h2>
            <h2 className="card-title uppercase text-info font-extrabold">{status}</h2>
          </div>
          <div className="grid grid-cols-3">
            {/* <p className="text-white justify-center col-span-2 pr-0 border-r-2 h-full ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus atque dolorum necessitatibus! Veniam iure doloribus eum unde quisquam debitis, officiis aliquid aliquam quam maiores dolorem? Labore, aspernatur maxime. Similique laboriosam iure eligendi suscipit ab velit, tempora cupiditate consectetur odit quibusdam. Odio animi debitis aliquid, vero ex dolorem sunt non doloribus temporibus eius id aut obcaecati eum ea repudiandae quasi perferendis laudantium velit deserunt minima facere. Repellat nihil sed aut odit autem repudiandae ea deserunt ullam quidem hic cum dolor vel adipisci aspernatur doloremque delectus, tempore veniam reprehenderit? Accusantium, nisi. Perspiciatis possimus sit corporis inventore repellendus debitis. Tenetur, inventore delectus.</p> */}
            <p className="text-white justify-center col-span-2 pr-0 border-r-2 h-full ">{description}</p>
            <div className="card-actions justify-end grid-cols-3 flex">
              <div className="flex flex-col  gap-1">
                <button className="btn btn-sm w-full btn-warning  text-white ">Update</button>
                <button className="btn btn-sm w-full btn-primary  text-white ">Delete</button>
                {/* </div>
            <div className="flex flex-col gap-4"> */}
                <button className="btn btn-sm w-full btn-success  ">On Going</button>
                <button className="btn btn-sm w-full btn-primary bg-red-700 border-none text-white hover:bg-red-800 ">Complete</button>
              </div>

            </div>
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
