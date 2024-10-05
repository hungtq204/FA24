
import { CgCalendarDates } from 'react-icons/cg'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Link to="/shop">  <img src="https://picsum.photos/id/1/1440/600" alt="" className="w-full" /></Link>
            <section className='container max-w-screen-xl m-auto mt-16'>
                {/* product */}
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='font-semibold text-[40px]'>New Products</h2>
                    <a href="" className='border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500'>View all products</a>
                </div>

                <div className='grid grid-cols-4 gap-8'>
                    <div >
                        <div className="overflow-hidden"><img src="/public/image 1.svg" alt="" className="hover:scale-125 duration-1000" /></div>
                        <div className="bg-[#F5F5F5] p-4">
                            <h3 className="font-semibold text-xl">Syltherine</h3>
                            <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
                            <p className="font-semibold text-xl text-red-600 mb-3">2.500.000đ</p>
                            <button className="border border-solid border-[#CA8A04] text-[#CA8A04] w-full font-semibold text-base py-2 hover:bg-[#CA8A04] hover:text-white">Add to cart</button>
                        </div>
                    </div>


                    <div >
                        <div className="overflow-hidden"><img src="/public/image 2.svg" alt="" className="hover:scale-125 duration-1000" /></div>
                        <div className="bg-[#F5F5F5] p-4">
                            <h3 className="font-semibold text-xl">Leviosa</h3>
                            <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
                            <p className="font-semibold text-xl text-red-600 mb-3">1.800.000đ</p>
                            <button className="border border-solid border-[#CA8A04] text-[#CA8A04] w-full font-semibold text-base py-2 hover:bg-[#CA8A04] hover:text-white">Add to cart</button>
                        </div>
                    </div>



                    <div >
                        <div className="overflow-hidden"><img src="/public/image 3.svg" alt="" className="hover:scale-125 duration-1000" /></div>
                        <div className="bg-[#F5F5F5] p-4">
                            <h3 className="font-semibold text-xl">Lolito</h3>
                            <p className="text-[#898989] text-base mt-1 mb-2">Luxury big sofa</p>
                            <p className="font-semibold text-xl text-red-600 mb-3">2.000.000đ</p>
                            <button className="border border-solid border-[#CA8A04] text-[#CA8A04] w-full font-semibold text-base py-2 hover:bg-[#CA8A04] hover:text-white">Add to cart</button>
                        </div>
                    </div>


                    <div >
                        <div className="overflow-hidden"><img src="/public/image 4.svg" alt="" className="hover:scale-125 duration-1000" /></div>
                        <div className="bg-[#F5F5F5] p-4">
                            <h3 className="font-semibold text-xl">Respira</h3>
                            <p className="text-[#898989] text-base mt-1 mb-2">Outdoor bar table and stool</p>
                            <p className="font-semibold text-xl text-red-600 mb-3">4.500.000đ</p>
                            <button className="border border-solid border-[#CA8A04] text-[#CA8A04] w-full font-semibold text-base py-2 hover:bg-[#CA8A04] hover:text-white">Add to cart</button>
                        </div>
                    </div>
                </div>

            </section>
            <section className='container max-w-screen-xl m-auto mt-16'>

                <div className='flex justify-between items-center mb-4'>
                    <h2 className='font-semibold text-[40px]'>Gallery</h2>
                    <a href="" className='border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500'>View all Gallery</a>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    <img src="/public/Rectangle 63.svg" alt="" />
                    <img src="/public/Rectangle 64.svg" alt="" />
                    <img src="/public/Rectangle 65.svg" alt="" />
                    <img src="/public/Rectangle 66.svg" alt="" />
                    <img src="/public/Rectangle 67.svg" alt="" />
                    <img src="/public/Rectangle 68.svg" alt="" />
                </div>

            </section>
            <section className='container max-w-screen-xl m-auto mt-16'>

                <div className='flex justify-between items-center mb-4'>
                    <h2 className='font-semibold text-[40px]'>News</h2>
                    <a href="" className='border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500'>View all news</a>
                </div>

                <div className='grid grid-cols-4 gap-8'>
                    <div>
                        <div>
                            <img src="/public/Rectangle 200.svg" alt="" /> </div>
                        <div>
                            <p className='text-[#9CA3AF] font-semibold flex text-sm items-center mt-4 mb-1 '>
                                <CgCalendarDates className='mr-2' /> 24/4/2024

                            </p>
                            <h3 className='font-semibold text-xl mb-3'>A bedroom must have something like this</h3>
                            <a className='text-red-600 font-semibold text-base flex items-center' href="">Xem chi tiết<FaArrowRight className='ml-2' />

                            </a>
                        </div>
                    </div>


                    <div>
                        <div>
                            <img src="/public/Rectangle 200.svg" alt="" /> </div>
                        <div>
                            <p className='text-[#9CA3AF] font-semibold flex text-sm items-center mt-4 mb-1 '>
                                <CgCalendarDates className='mr-2' /> 24/4/2024

                            </p>
                            <h3 className='font-semibold text-xl mb-3'>A bedroom must have something like this</h3>
                            <a className='text-red-600 font-semibold text-base flex items-center' href="">Xem chi tiết<FaArrowRight className='ml-2' />

                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/public/Rectangle 200.svg" alt="" /> </div>
                        <div>
                            <p className='text-[#9CA3AF] font-semibold flex text-sm items-center mt-4 mb-1 '>
                                <CgCalendarDates className='mr-2' /> 24/4/2024

                            </p>
                            <h3 className='font-semibold text-xl mb-3'>A bedroom must have something like this</h3>
                            <a className='text-red-600 font-semibold text-base flex items-center' href="">Xem chi tiết<FaArrowRight className='ml-2' />

                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/public/Rectangle 200.svg" alt="" /> </div>
                        <div>
                            <p className='text-[#9CA3AF] font-semibold flex text-sm items-center mt-4 mb-1 '>
                                <CgCalendarDates className='mr-2' /> 24/4/2024

                            </p>
                            <h3 className='font-semibold text-xl mb-3'>A bedroom must have something like this</h3>
                            <a className='text-red-600 font-semibold text-base flex items-center' href="">Xem chi tiết<FaArrowRight className='ml-2' />

                            </a>
                        </div>
                    </div>


                </div>
            </section>
            <section className='bg-[#FFF7ED] py-16 mt-16'>
                <div className='container max-w-screen-xl m-auto grid grid-cols-4'>

                    <div className='flex gap-5 items-center'>
                        <img src="/public/Group.svg" alt="" />
                        <div>
                            <h3 className='font-semibold text-xl mb-1'>High Quality</h3>
                            <p className='text-[#898989]'>Crafted from top materials</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src="/public/Vector.svg" alt="" />
                        <div>
                            <h3 className='font-semibold text-xl mb-1'>24 / 7 Support</h3>
                            <p className='text-[#898989]'>Dedicated support</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src="/public/Group (1).svg" alt="" />
                        <div>
                            <h3 className='font-semibold text-xl mb-1'>Warranty Protection</h3>
                            <p className='text-[#898989]'>Over 2 years</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src="/public/Vector (1).svg" alt="" />
                        <div>
                            <h3 className='font-semibold text-xl mb-1'>Free Shipping</h3>
                            <p className='text-[#898989]'>Order over 150 $</p>
                        </div>
                    </div>


                </div>

            </section>


        </div>
    )
}

export default HomePage