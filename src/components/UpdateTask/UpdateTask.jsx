import React from 'react';
import { useForm } from 'react-hook-form';

export default function UpdateTask() {
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