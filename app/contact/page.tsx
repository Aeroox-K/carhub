'use client'
import { CustomButton } from '@/components';
import React, { useState } from 'react'

export default function Contact() {


    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("submitted")
        // Handle form submission logic here (or send data to an API)
        console.log('Form submitted:', formData);
      };

  return (

    
<section className="py-28">

<div className="container mx-0 md:mx-12 xl:mx-12 p-4">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="text-xl mt-4">
            We would love to hear from you! Please fill out the form below, <br /> and we will get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="md:w-2/3 xl:w-1/2 mt-12">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-lg font-semibold outline-none">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-lg font-semibold outline-none">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-lg font-semibold outline-none">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 rounded"
                rows={4}
              />
            </div>

            <CustomButton 
            title = "Send Message"
            btnType='submit'
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            /> 
          </form>
</div>

</section>
      )
}
