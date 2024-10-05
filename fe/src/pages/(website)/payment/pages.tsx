import React from 'react'

const Payment = () => {
    return (
        <main>

            <section className='container max-w-screen-xl m-auto'>
                <h1 className='font-semibold text-[40px] mt-16 mb-8'>Billing details</h1>
                <div className='grid grid-cols-2 gap-8 mb-16'>
                    <div>
                        <form action="">
                            <div className='grid grid-cols-2 gap-8'>
                                <div>
                                    <label htmlFor="Firstname" className='font-medium '>First name</label>
                                    <input type="text" name="firstname" className='border border-solid border-neutral-300 block w-full outline-none p-2 mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className='font-medium '>Last name</label>
                                    <input type="text" name="lastname" className='border border-solid border-neutral-300 block w-full outline-none p-2  mt-2' />
                                </div>
                            </div>
                            <div className='mt-8'>
                                <label htmlFor="company" className='font-medium '>Company Name (Optional)</label>
                                <input type="text" name='company' className='block w-full  border border-solid border-neutral-300 outline-none p-2 mt-2' />
                            </div>
                            <div className='mt-8'>
                                <label htmlFor="Country/Region" className='font-medium '>Country / Region</label>
                                <div className='border border-solid border-neutral-300 p-2 mt-2'> <select name="Country/Region" id="" className='block w-full'>
                                    <option value="" className='hidden'>Choose Your Country</option>
                                    <option value="VietNam">VietNam</option>

                                    <option value="Taiwant">Taiwant</option>
                                </select></div>
                            </div>
                            <div className='mt-8'>
                                <label htmlFor="company" className='font-medium'>Street address</label>
                                <input type="text" name='streetaddress' className='block w-full p-2 border border-solid border-neutral-300 outline-none mt-2' />
                            </div>
                            <div className='mt-8'>
                                <label htmlFor="company" className='font-medium'>Town / City</label>
                                <input type="text" name='TownCity' className='block w-full p-2 border border-solid border-neutral-300 outline-none mt-2' />
                            </div>
                            <div className='mt-8'>
                                <label htmlFor="Country/Region" className='font-medium'>Province</label>
                                <div className='border border-solid border-neutral-300 p-2 mt-2'> <select name="Country/Region" id="" className='block w-full'>
                                    <option value="" className='hidden'>Western Province</option>
                                    <option value="VietNam">VietNam</option>

                                    <option value="Taiwant">Taiwant</option>
                                </select></div>
                                <div className='mt-8'>
                                    <label htmlFor="company" className='font-medium'>ZIP code</label>
                                    <input type="text" name='zipcode' className='block w-full p-2 border border-solid border-neutral-300 outline-none mt-2' />
                                </div>
                                <div className='mt-8'>
                                    <label htmlFor="company" className='font-medium'>Phone</label>
                                    <input type="number" name='phone' className='block w-full p-2 border border-solid border-neutral-300 outline-none mt-2' />
                                </div>
                                <div className='mt-8'>
                                    <label htmlFor="company" className='font-medium'>Email address</label>
                                    <input type="text" name='email' className='block w-full p-2 border border-solid border-neutral-300 outline-none mt-2' />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div>
                        <p className='*:font-semibold *:text-2xl flex justify-between'>
                            <span>Product</span>
                            <span>Subtotal</span>
                        </p>
                        <p className='flex justify-between mt-4'>
                            <span className='text-neutral-500'>Asgaard sofa <strong className='font-medium text-black'>X1</strong> </span>

                            <span className='font-medium'>25.000.000đ</span>
                        </p>
                        <p className='flex justify-between mt-4'>
                            <span>Subtotal </span>
                            <span className='font-medium'>25.000.000đ</span>
                        </p>
                        <p className='flex justify-between mt-4'>
                            <span>Total </span>
                            <span className='font-bold text-xl text-[#B88E2F]'>25.000.000đ</span>
                        </p>
                        <hr className='my-8 border-[#A3A3A3]' />
                        <div className='mb-8'>
                            <input type="radio" name="payment-method" id="" />
                            <span className='font-medium ml-2'>Direct Bank Transfer</span>
                        </div>
                        <p className='text-[#a3a3a3] mt-3'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <div className='my-4'>
                            <input type="radio" name="payment-method" id="" />
                            <span className='font-medium ml-2 text-[#a3a3a3]'>ATM Bank Transfer</span>
                        </div>
                        <div className=''>
                            <input type="radio" name="payment-method" id="" />
                            <span className='font-medium ml-2 text-[#a3a3a3]'>Cash On Delivery</span>
                        </div>

                        <p className='text-[#262626] py-2'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span>.</p>
                        <div className='text-center mt-8'>
                            <a className='border border-solid border-yellow-600 text-yellow-600 font-semibold py-2 px-24 inline-block hover:bg-yellow-500 hover:text-white' href="">Placeholder</a>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Payment