"use client"

import React, { useState } from 'react'


interface FormData {
    firstName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    email?: string;
    phoneNumber?: string;
    message?: string;
}


const Contact = () => {

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [disabled, setDisabled] = useState<boolean>(false);
    const [submit, setSubmit] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = (): boolean => {
        let tempErrors: FormErrors = {};

        if (!formData.firstName) tempErrors.firstName = "First Name is required.";
        if (!formData.email) tempErrors.email = "Email is required.";
        if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone Number is required.";
        if (!formData.message) tempErrors.message = "Message is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validate()) {
            console.log('Form data:', formData);
            setSubmit("Submit Success");
            setDisabled(true);
        }
    };


    return (
        <div className='h-[500px] w-full bg-[#FFD4D0] flex items-center justify-center gap-x-40'>
            <div className='space-y-5'>
                <h1 className='text-4xl font-bold tracking-wider'>Get In Touch</h1>
                <p className='max-w-[350px]'>Have a question or a project in mind? I&apos;d love to hear from you. Let&apos;s chat and make something amazing together.</p>
            </div>
            <div className='w-[400px]'>
                <form onSubmit={handleSubmit} className='flex flex-col items-start gap-y-3'>
                    <div className='w-full space-y-1'>
                        <input type="text" placeholder='First Name' className='p-1 rounded-sm w-full'
                            value={formData.firstName}
                            onChange={handleInputChange}
                            name='firstName'
                        />
                        {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
                    </div>
                    <div className='w-full space-y-1'>
                        <input type="email" placeholder='Email' className='p-1 rounded-sm w-full'
                            value={formData.email}
                            onChange={handleInputChange}
                            name='email'
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                    </div>
                    <div className='w-full space-y-1'>
                        <input type="number" placeholder='Phone Number' className='p-1 rounded-sm w-full'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            name='phoneNumber'
                        />
                        {errors.phoneNumber && <p className='text-red-500 text-sm'>{errors.phoneNumber}</p>}
                    </div>
                    <div className='w-full space-y-1'>
                    <textarea placeholder='Your Message' name='message' value={formData.message} onChange={handleInputChange} className='p-1 rounded-sm w-full h-[200px]'></textarea>
                        {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                    </div>
                    <button type='submit'
                        disabled={disabled}
                        className={`bg-[#FF6464] text-white p-1 px-6 rounded-sm font-semibold text-sm
                        ${disabled ? 'bg-gray-400' : 'hover:bg-[#FF6464] hover:shadow-lg transition-all'}
                        `}>Send Message</button>
                    {disabled && <p className='text-green-500 text-sm'>{submit}</p>}
                </form>
            </div>
        </div>
    )
}

export default Contact