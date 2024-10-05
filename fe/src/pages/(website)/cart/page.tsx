import React from 'react'
import { MdDelete } from 'react-icons/md'

const Cart = () => {
    return (

        <section className='container max-w-screen-xl m-auto grid grid-cols-12 gap-8 my-16'>
            <div className='col-span-8'>
                <table className='w-full '>
                    <thead>
                        <tr className='bg-neutral-100 *:py-4 font-medium'>
                            <th className='text-left pl-4'>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='*:py-4 *:text-center *:font-medium'>
                            <td className='!text-left'> <img src="/public/Rectangle 61.svg" alt="" className='inline mr-4' />
                                <span className=' text-[#A3A3A3]'>Asgaard sofa</span>
                            </td>
                            <td className=' text-[#A3A3A3]'>25.000.000đ</td>
                            <td>1</td>
                            <td>25.000.000đ</td>
                            <td><span className='text-red-500'> <MdDelete /></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col-span-4 bg-neutral-100 p-8'>
                <h2 className='font-semibold text-2xl mb-4'>
                    Cart Total
                </h2>
                <hr className='border-[#A3A3A3] mb-5' />
                <p className='font-medium flex justify-between items-center mb-4'>
                    <span>Subtotal</span>
                    <span className='text-[#a3a3a3]'>25.000.000đ</span>
                </p>
                <p className='font-medium flex justify-between items-center mb-8'>
                    <span>Total</span>
                    <span className='font-bold text-red-500 text-[20px]'>25.000.000đ</span>
                </p>
                <a href="" className='border border-solid text-yellow-600 border-yellow-600 w-full inline-block text-center py-2 hover:bg-yellow-600 hover:text-white'>Checkout</a>
            </div>

        </section>

    )
}

export default Cart