import React from 'react'

const ExtraCompo = () => {
    return (
        <div className='mb-[72px] md:mb-[128px]'>
            <div className='mx-auto px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:max-w-[1440px] min-[1520px]:px-0'>
                <div>
                    <div className='text-center w-full md:ml-[16.667%] md:w-[66.667%] lg:ml-[25%] lg:w-[50%]'>
                        <h2 className='text-[2rem] min-[375px]:text-[2.4rem] md:text-[2.8rem] font-semibold'>Endless Extras</h2>
                        <p className='text-center text-[16px] pt-[16px]'>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and &#8212; yes, free coffee.</p>
                    </div>
                    <div className='flex flex-col pt-[48px] md:my-0 md:mx-[5vw] md:flex-row'>
                        <div className='extra1 flex md:mr-[2.4rem] pb-[3.2rem] w-[100%] md:pb-0 md:w-[33.33%] md:flex-col'>
                            <div className='img-container text-center cursor-pointer shrink-0 pr-[1.6rem] pb-[2.4rem] max-w-[128px] my-0 mx-auto md:pr-0'>
                                <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="Fun freebies" className='w-[112px]' />
                            </div>
                            <div className='text-container text-left md:text-center min-w-[calc(100%-128px)]'>
                                <h3 className='text-[1.6rem] md:text-[1.9rem] font-semibold'>Fun freebies</h3>
                                <p className='text-[16px] pt-[1.6rem]'>Not only you can earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                                <div className='my-[1.6rem]'>
                                    <a href="/" className='text-dark-green underline hover:no-underline text-[16px] '>Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className='extra2 flex md:mx-[2.4rem] pb-[3.2rem] w-[100%] md:pb-0 md:w-[33.33%] md:flex-col'>
                            <div className='img-container text-center cursor-pointer shrink-0 pb-[2.4rem] pr-[1.6rem] max-w-[128px] my-0 mx-auto md:pr-0'>
                                <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="Order and pay ahead" className='w-[112px]' />
                            </div>
                            <div className='text-container text-left md:text-center min-w-[calc(100%-128px)]'>
                                <h3 className='text-[1.6rem] md:text-[1.9rem] font-semibold'>Order and pay ahead</h3>
                                <p className='text-[16px] pt-[1.6rem]'>Enjoy the convenience of in-store curbside or drive-thru pickup at select stores.</p>
                                <div className='my-[1.6rem]'>
                                    <a href="/" className='text-dark-green underline hover:no-underline text-[16px] '>Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className='extra3 flex md:ml-[2.4rem] pb-[3.2rem] w-[100%] md:pb-0 md:w-[33.33%] md:flex-col'>
                            <div className='img-container text-center cursor-pointer shrink-0 pb-[2.4rem] pr-[1.6rem] max-w-[128px] my-0 mx-auto md:pr-0'>
                                <img src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="Get to free faster" className='w-[112px]' />
                            </div>
                            <div className='text-container text-left md:text-center min-w-[calc(100%-128px)]'>
                                <h3 className='text-[1.6rem] md:text-[1.9rem] font-semibold'>Get to free faster</h3>
                                <p className='text-[16px] pt-[1.6rem]'>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games</p>
                                <div className='my-[1.6rem]'>
                                    <a href="/" className='text-dark-green underline hover:no-underline text-[16px] '>Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraCompo