import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <section>
                <img src="/public/Rectangle 1 (1).jpg" alt="" className="w-full" />
            </section>
            <main>
                <section className="container max-w-screen-xl m-auto mt-16">
                    <div className="about-item grid grid-cols-3 gap-8 ">
                        <div className="about-content flex flex-col justify-center items-center">
                            <img className="w-[100px] h-[100px]" src="/public/streamline_target-solid.svg" alt="" />
                            <h1 className="font-bold text-[32px] mt-[20px] mb-[12px]">OUR MISSION</h1>
                            <p className="text-center text-[18px] font-normal">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                        <div className="about-content flex flex-col justify-center items-center">
                            <img className="w-[100px] h-[100px]" src="/public/mdi_highway.svg" alt="" />
                            <h1 className="font-bold text-[32px] mt-[20px] mb-[12px]">OUR VISION</h1>
                            <p className="text-center text-[18px] font-normal">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                        <div className="about-content flex flex-col justify-center items-center">
                            <img className="w-[100px] h-[100px]" src="/public/lucide_book-heart.svg" alt="" />
                            <h1 className="font-bold text-[32px] mt-[20px] mb-[12px]">OUR VALUES</h1>
                            <p className="text-center text-[18px] font-normal">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container max-w-screen-xl m-auto mt-16">
                    <div className="about-container flex gap-8">
                        <img src="/public/Rectangle 87.svg" alt="" />
                        <div className="about-content">
                            <h1 className="font-bold text-[32px] mt-[20px] mb-8">ABOUT FURNIRO COMPANY</h1>
                            <p className="text-[18px] mb-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                            </p>
                            <p className="text-[18px]">
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container max-w-screen-xl m-auto mt-16">
                    <h1 className="text-center font-bold text-[32px]">WE CREATE NATURAL WOOD FURNITURE
                    </h1>
                    <h1 className="text-center font-bold text-[32px]">AS WELL AS HIGH-QUALITY
                    </h1>
                    <div className="about-container grid grid-cols-4 gap-8 mt-8 mb-8">
                        <div className="about-item relative">
                            <img className="" src="/public/Rectangle 146.svg" alt="" />
                            <span className="absolute bottom-[20px] left-[20px] text-white ">FLOORING</span>
                        </div>
                        <div className="about-item relative">
                            <img className="" src="/public/Rectangle 147.svg" alt="" />
                            <span className="absolute bottom-[20px] left-[20px] text-white ">REFINISHING</span>
                        </div>
                        <div className="about-item relative">
                            <img className="" src="/public/Rectangle 148.svg" alt="" />
                            <span className="absolute bottom-[20px] left-[20px] text-white ">INSTALLTION</span>
                        </div>
                        <div className="about-item relative">
                            <img className="" src="/public/Rectangle 149.svg" alt="" />
                            <span className="absolute bottom-[20px] left-[20px] text-white ">WARMING THE FLOOR</span>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default AboutPage