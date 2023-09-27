import React from 'react'

const CashCardCompo = () => {
    return (
        <div className='mb-[72px] md:mb-[128px]'>
            <div className="bg-cream">
                <div className='mx-auto py-[4.8rem] px-[1.6rem] max-w-[1440px] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:px-0'>
                    <div>
                        <div className='text-center pb-[4.8rem] mb-[1.6rem] md:ml-[16.667%] md:pb-[6.4rem] md:w-[66.667%] lg:mb-[2.4rem] lg:ml-[25%] lg:w-[50%]'>
                            <h2 className='pt-[2.4rem] pb-[1.6rem] text-[2rem] leading-[1.385] font-semibold min-[375px]:text-[2.4rem] md:text-[2.8rem] md:pt-0'>Cash or card, you earn Stars</h2>
                            <p className='text-[16px]'>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to <span>&#40;really delicious&#41;</span> Rewards.</p>
                        </div>
                        <div className='OneDollar block m-0 p-0 text-[16px] text-left'>
                            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full lg:p-0 lg:w-[16.667%]'>
                                <p className='font-semibold text-[1.9rem] md:text-[2.4rem]'>1 <span aria-hidden="true" className="text-black text-sm">★</span> per dollar</p>
                                <p>Pay as you go</p>
                            </div>
                            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full md:p-0 md:w-[50%] lg:w-[41.667%] xl:w-[33.33%]'>
                                <div className='flex md:pr-[0.8rem] lg:px-[2.4rem]'>
                                    <div className='text-center shrink-0 m-0 pr-[1.6rem] max-w-[128px]'>
                                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="Scan and pay separately" className='max-w-full h-auto fading' width={112} />
                                    </div>
                                    <div className='text-left min-w-[calc(100%-128px)]'>
                                        <h3 className='text-[1.6rem] font-semibold md:text-[1.9rem]'>Scan and pay separately</h3>
                                        <p className='pt-[1.6rem]'>Use cash or credit/debit card at the register.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full md:p-0 md:w-[50%] lg:w-[41.667%] xl:w-[33.33%]'>
                                <div className='flex md:pr-[0.8rem] lg:px-[2.4rem]'>
                                    <div className='text-center shrink-0 m-0 pr-[1.6rem] max-w-[128px]'>
                                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="Save payment in the app" className='max-w-full h-auto fading' width={112} />
                                    </div>
                                    <div className='text-left min-w-[calc(100%-128px)]'>
                                        <h3 className='text-[1.6rem] font-semibold md:text-[1.9rem]'>Save payment in the app</h3>
                                        <p className='pt-[1.6rem]'>Check-out faster by saving a credit/debit card or PayPal to your account. You&#8217;ll be able to order ahead or scan and pay at the register in one step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='mb-[4.8rem] mt-[2.4rem]' />
                        <div className='TwoDollar block m-0 p-0 text-[16px] text-left'>
                            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full lg:p-0 lg:w-[16.667%]'>
                                <p className='font-semibold text-[1.9rem] md:text-[2.4rem]'>2 <span aria-hidden="true" className="text-black text-sm">★</span> per dollar</p>
                                <p>Add funds in the app</p>
                            </div>
                            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full md:p-0 md:w-[50%] lg:w-[41.667%] xl:w-[33.33%]'>
                                <div className='flex md:pr-[0.8rem] lg:px-[2.4rem]'>
                                    <div className='text-center shrink-0 m-0 pr-[1.6rem] max-w-[128px]'>
                                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="Preload" className='max-w-full h-auto fading' width={112} />
                                    </div>
                                    <div className='text-left min-w-[calc(100%-128px)]'>
                                        <h3 className='text-[1.6rem] font-semibold md:text-[1.9rem]'>Preload</h3>
                                        <p className='pt-[1.6rem]'>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full md:p-0 md:w-[50%] lg:w-[41.667%] xl:w-[33.33%]'>
                                <div className='flex md:pr-[0.8rem] lg:px-[2.4rem]'>
                                    <div className='text-center shrink-0 m-0 pr-[1.6rem] max-w-[128px]'>
                                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="Register your gift card" className='max-w-full h-auto fading' width={112} />
                                    </div>
                                    <div className='text-left min-w-[calc(100%-128px)]'>
                                        <h3 className='text-[1.6rem] font-semibold md:text-[1.9rem]'>Register your gift card</h3>
                                        <p className='pt-[1.6rem]'>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashCardCompo