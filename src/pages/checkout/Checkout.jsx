import React from 'react'

const Checkout = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch] space-y-10'>
        <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3 space-y-7 pr-20">
            <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                Passenger Information
            </h2>
            <form className="space-y-6">
                <div className="">
                            <label htmlFor="fullname" className="block mb-2 font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                placeholder="e.g G-Tech Offical"
                                name="fullname"
                                min="1"
                                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                            />

                </div>
                <div className="">
                            <label htmlFor="email" className="block mb-2 font-medium">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="e.g gtechoffical@gmail.com"
                                name="email"
                                min="1"
                                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                            />
                            <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal">
                                You will get your tickets on this email
                            </small>

                </div>
                <div className="">
                            <label htmlFor="phone" className="block mb-2 font-medium">
                               Phone Nummer
                            </label>
                            <input
                                type="number"
                                id="phone"
                                placeholder="e.g +123456789"
                                name="phone"
                                min="1"
                                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                            />
                </div>
            </form> 
            </div>
        </div>
    </div>
  )
}

export default Checkout