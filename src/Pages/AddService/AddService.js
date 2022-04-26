import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Added Service</h2>
            <form className='d-flex  flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='mb-2' {...register("description")} />
                <input placeholder='Price' className='mb-2' type="number" {...register("price")} />
                <input placeholder='Photo Url' className='mb-2' type="text" {...register("img")} />
                <input type="Add Service" />
            </form>
        </div>
    );
};

export default AddService;