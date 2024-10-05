import React from 'react'
import { AiFillTikTok } from 'react-icons/ai'
import { CiShare2 } from 'react-icons/ci'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6'
import { IoIosSend } from 'react-icons/io'
import { IoLogoYoutube } from 'react-icons/io5'
import { MdOutlinePermContactCalendar, MdPlace } from 'react-icons/md'

const Contact = () => {
    return (
        <div>
            <img src="/public/Rectangle 1.jpg" alt="" className='w-full' />
            <section className='ontainer max-w-screen-xl m-auto mt-16'>
                <div className='grid grid-cols-3 gap-8'>
                    <div className="contact-item flex gap-6">
                        <div className="border-2 border-yellow-600  w-[40px] h-[40px] flex items-center justify-center">
                            <span className="material-symbols-outlined text-yellow-600 "><MdPlace />  </span>
                        </div>
                        <div className="contact-content mt-1 ">
                            <h3 className="font-semibold text-[24px]">ADDRESS</h3>
                            <p className="font-normal text-neutral-400">60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội</p>
                        </div>
                    </div>
                    <div className="contact-item flex gap-6">
                        <div className="border-2 border-yellow-600  w-[40px] h-[40px] flex items-center justify-center">
                            <span className="material-symbols-outlined text-yellow-600 "> <MdOutlinePermContactCalendar /> </span>
                        </div>
                        <div className="contact-content mt-1">
                            <h3 className="font-semibold text-[24px]">CONTACT DETAILS</h3>
                            <p className="font-normal text-neutral-400">info@furniro.com</p>
                            <p className="font-bold text-neutral-400">02056278686</p>
                        </div>
                    </div>
                    <div className="contact-item flex gap-6">
                        <div className="border-2 border-yellow-600  w-[40px] h-[40px] flex items-center justify-center">
                            <span className="material-symbols-outlined text-yellow-600 "> <CiShare2 /></span>
                        </div>
                        <div className="contact-content mt-1">
                            <h3 className="font-semibold text-[24px]">SOCIAL NETWORKS</h3>
                            <p className="font-normal text-neutral-400 text-center  flex">
                                <img className="pr-4" src="" alt="" /><FaFacebookSquare />
                                <img className="pr-4" src="" alt="" /><FaSquareInstagram />
                                <img className="pr-4" src="" alt="" /><AiFillTikTok />
                                <img className="pr-4" src="" alt="" /><FaSquareTwitter />
                                <img className="pr-4" src="" alt="" /><IoLogoYoutube />
                            </p>
                        </div>
                    </div>
                </div>
            </section >
            <section className="bg-[#F1F1F1] mt-16">
                <div className="contact-container flex grid-cols-2 gap-8">
                    <div className="contact-image">
                        <img src="/public/image 40.svg" alt="" />
                    </div>
                    <div className="contact-form flex flex-col justify-center">
                        <h4 className="font-semibold text-[20px]">CONTACT</h4>
                        <h2 className="font-bold text-[40px] mb-8">CONTACT WITH US NOW</h2>
                        <form action="">
                            <div className="flex grid-cols-2 gap-8">
                                <input className="bg-transparent border-b-2 w-[300px]" type="text" name="" id="" placeholder="First name" />
                                <input className="bg-transparent border-b-2  w-[300px]" type="text" name="" id="" placeholder="Last name" />
                            </div>
                            <div className="grid grid-cols-2 gap-8 mt-8">
                                <input className="bg-transparent border-b-2  w-[300px]" type="text" name="" id="" placeholder="Email" />
                                <input className="bg-transparent border-b-2  w-[300px]" type="text" name="" id="" placeholder="Phone number" />
                            </div>
                            <div className="grid grid-cols-1 mt-8">
                                <input className="bg-transparent border-b-2 w-full" type="text" name="" id="" placeholder="Message" />
                            </div>
                            <button className="mt-[44px] bg-yellow-600 text-white p-2 w-[200px] flex justify-center items-center">
                                <span className="material-symbols-outlined pr-2"> <IoIosSend /> </span>

                                Send infomation</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>





    )
}

export default Contact