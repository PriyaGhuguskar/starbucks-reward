import React from 'react'

const MainDesktop = () => {
    return (
        <div className='bg-desktop bg-light-green md:bg-[50%] bg-cover md:bg-[length:auto_100%] bg-no-repeat w-full flex text-left max-[767px]:hidden'>
            <div className='mx-auto px-0 w-full md:px-[2.4rem] lg:px-[4rem] box-content max-w-[1440px]'>
                <div className='flex box-border'>
                    <div className='pb-[56.25%] float-left w-0'></div>
                    <div className='flex items-center justify-start w-full'>
                        <div className='text-left py-[3.2rem] px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:px-0 max-w-[400px] my-0 md:min-w-[48%] md:m-initial'>
                            <h2 className='text-[2.2rem] leading-tight min-[375px]:text-[2.8rem] md:text-[3.6rem] font-semibold'>FREE COFFEE <br /> IS A TAP AWAY </h2>
                            <div>
                                <p className='text-[1.6rem] md:text-[1.9rem] mt-[1.6rem]'>Join now to start earning Rewards.</p>
                                <div className='buttonContainer mt-[3.2rem]'>
                                    <a href="/" className="button join-now border-solid border-[1px] rounded-[50px] px-[16px] py-[7px] h-max font-semibold text-sm text-[white] hover:bg-black hover:opacity-70 transition-all no-underline duration-200 ease-in-out text-center inline-block"
                                        style={{ backgroundColor: "#008248", borderColor: "008248" }}>
                                        Join now</a>
                                </div>
                                <div className='text-[1.6rem] md:text-[1.9rem] mt-[1.6rem]'>
                                    <p>Or&nbsp;
                                        <a href='/' className='underline hover:no-underline'>join the app</a>
                                        &nbsp;for the best experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDesktop