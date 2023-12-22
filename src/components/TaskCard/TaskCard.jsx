import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function TaskCard({ postedTask, handleDelete, handleOnGoing, handleTodo, handleComplete }) {

	const { user } = useAuth()
	const axios = useAxios()

	const {
		_id,
		email,
		taskTitle,
		description,
		deadline,
		priority,
		status } = postedTask;

	const [statusStateCard, setStatusStateCard] = useState(status)


	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	return (
		<div>
			<div className="card w-96 h-96 shadow-xl    bg-gradient-to-b from-red-500 from-5%  to-red-400 to-90%">
				<div className="card-body">
					<div className="flex  flex-col items-center gap-2 w-full ">
						<h2 className="card-title text-sm bg-red-700 text-white w-fit rounded-md py-1 px-2 ">{priority}</h2>

					</div>
					<div className="flex justify-between border-b-2 pb-3">
						<h2 className="card-title font-bold text-3xl">{taskTitle}</h2>
						<h2 className="card-title uppercase text-info font-extrabold">{statusStateCard}</h2>
						{/* <h2 className="card-title uppercase text-info font-extrabold">{status}</h2> */}
					</div>
					<div className="grid grid-cols-3">
						{/* <p className="text-white justify-center col-span-2 pr-0 border-r-2 h-full ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus atque dolorum necessitatibus! Veniam iure doloribus eum unde quisquam debitis, officiis aliquid aliquam quam maiores dolorem? Labore, aspernatur maxime. Similique laboriosam iure eligendi suscipit ab velit, tempora cupiditate consectetur odit quibusdam. Odio animi debitis aliquid, vero ex dolorem sunt non doloribus temporibus eius id aut obcaecati eum ea repudiandae quasi perferendis laudantium velit deserunt minima facere. Repellat nihil sed aut odit autem repudiandae ea deserunt ullam quidem hic cum dolor vel adipisci aspernatur doloremque delectus, tempore veniam reprehenderit? Accusantium, nisi. Perspiciatis possimus sit corporis inventore repellendus debitis. Tenetur, inventore delectus.</p> */}
						<p className="text-white justify-center col-span-2 pr-0 border-r-2 h-full ">
							{
								deadline && <div className="border-b-2 pb-2 flex justify-center">
									<h2 className="card-title text-sm bg-warning text-white w-fit rounded-md py-1 px-2 "><span> Deadline:</span>{deadline}</h2>
								</div>}

							<p>
								{description}
							</p>
						</p>
						<div className="card-actions justify-end grid-cols-3 flex">
							<div className="flex flex-col  gap-1">

								<button className="btn btn-sm w-full btn-warning  text-white " onClick={() => document.getElementById('my_modal_1').showModal()}>Update</button>
								{/* Open the modal using document.getElementById('ID').showModal() method */}
								{/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
								<dialog id="my_modal_1" className="modal">
									<div className="modal-box">
										{/* code */}
										<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
											<input className="input input-bordered input-primary w-full max-w-xs" type="email" placeholder="email" {...register("email", {})} />
											<input className="input input-bordered input-primary w-full max-w-xs" type="text" placeholder="taskTitle" {...register("taskTitle", { required: true })} />
											<input className="input input-bordered input-primary w-full max-w-xs" type="text" placeholder="description" {...register("description", { required: true })} />
											<input className="input input-bordered input-primary w-full max-w-xs" type="datetime" placeholder="deadline" {...register("deadline", { required: true })} />
											<input className="input input-bordered input-primary w-full max-w-xs" type="text" placeholder="priority" {...register("priority", { required: true })} />

											<input className="btn w-full" type="submit" />
										</form>
										<div className="modal-action">
											<form method="dialog">
												{/* if there is a button in form, it will close the modal */}
												<button className="btn">Close</button>
											</form>
										</div>
									</div>
								</dialog>
								<button className="btn btn-sm w-full btn-primary  text-white " onClick={() => handleDelete(_id)}>Delete</button>
								{/* </div>
            <div className="flex flex-col gap-4"> */}
								{
									status === "OnGoing" ? <button className="btn btn-sm w-full btn-success text-white" onClick={() => handleTodo(_id)}>
										To-Do
									</button> : status === "todo" ? <button className="btn btn-sm w-full btn-success text-white" onClick={() => handleOnGoing(_id)}>
										On Going
									</button> : status === "Complete" ? <button className="btn btn-sm w-full btn-success text-white" onClick={() => handleTodo(_id)}>
										To-Do
									</button> : null
								}

								{
									status === "Complete" ? <button className="btn btn-sm w-full btn-primary bg-neutral border-none text-white hover:bg-red-800 disabled">
										Completed
									</button> : <button className="btn btn-sm w-full btn-primary bg-red-700 border-none text-white hover:bg-red-800 " onClick={() => handleComplete(_id)}>
										Complete
									</button>
								}
								{/* <button className="btn btn-sm w-full btn-primary bg-red-700 border-none text-white hover:bg-red-800 ">Complete</button> */}
							</div>

						</div>
					</div>
				</div>
			</div>
			{/* <div>
        <UpdateTask></UpdateTask>
      </div> */}
			{/* <div>{_id} </div>
      <div>{email} </div>
      <div>{taskTitle} </div>
      <div>{description} </div>
      <div>{priority} </div> */}
		</div>

	)
}

function UpdateTask() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="email" placeholder="email" {...register("email", {})} />
			<input type="text" placeholder="taskTitle" {...register("taskTitle", { required: true })} />
			<input type="text" placeholder="description" {...register("description", { required: true })} />
			<input type="datetime" placeholder="deadline" {...register("deadline", { required: true })} />
			<input type="text" placeholder="priority" {...register("priority", { required: true })} />

			<input type="submit" />
		</form>
	);
}
