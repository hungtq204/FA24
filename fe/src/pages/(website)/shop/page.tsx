
import { Link } from 'react-router-dom'

const Shop = () => {
    return (
        <div>

            <div className='w-full'>
                <Link to="/shop">  <img src="/public/Rectangle 1.svg" alt="" className="w-full" /></Link>
            </div>
            <main>

                <section className='container max-w-screen-xl m-auto grid grid-cols-12 gap-8 mt-16'>

                    <div className='col-span-3'>
                        <h2 className='font-semibold text-xl mb-4 '>Categories</h2>
                        <ul>
                            <li className='font-medium text-yellow-600 mb-2'><a href="">Cafe Chair</a></li>
                            <li className='font-medium text-[#737373] mb-2 hover:text-yellow-600'><a href="">Sofa</a></li>
                            <li className='font-medium text-[#737373] mb-2 hover:text-yellow-600'><a href="">Lamp</a></li>
                            <li className='font-medium text-[#737373] mb-2 hover:text-yellow-600' ><a href="">Carpet</a></li>
                            <li className='font-medium text-[#737373] mb-2 hover:text-yellow-600' ><a href="">Cabinet</a></li>
                            <li className='font-medium text-[#737373] ' ><a href="">Tea table</a></li>
                        </ul>
                    </div>
                    <div className=' col-span-9 '>


                        <div className='grid grid-cols-3 gap-8'>
                            <div >
                                <Link to="/product-detail">
                                    <div className="overflow-hidden"><img src="/public/Rectangle 307.jpg" alt="" className="hover:scale-125 duration-1000" /></div>
                                    <div className="bg-[#F5F5F5] p-4">
                                        <h3 className="font-semibold text-xl">Leviosa</h3>
                                        <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
                                        <p className="font-semibold text-xl text-red-600 mb-3">25.000.000đ</p>

                                    </div>
                                </Link>
                                <button className="border border-solid border-[#CA8A04] text-[#CA8A04] w-full font-semibold text-base py-2 hover:bg-[#CA8A04] hover:text-white">Add to cart</button>
                            </div>


                            <div >
                                <div className="overflow-hidden"><img src="/public/image 3.svg" alt="" className="hover:scale-125 duration-1000" /></div>
                                <div className="bg-[#F5F5F5] p-4">
                                    <h3 className="font-semibold text-xl">Lolito</h3>
                                    <p className="text-[#898989] text-base mt-1 mb-2"> Luxury big sofa</p>
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

                        <div className=' mt-8 space-x-1'>
                            <a href="" className='py-2 px-4 bg-yellow-600 inline-block text-white font-bold rounded-md'>1</a>
                            <a href="" className='py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md'>2</a>
                            <a href="" className='py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md'>3</a>
                            <a href="" className='py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md'>Next</a>

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
            </main>
        </div >
    )
}

export default Shop