import React from 'react'
import WindowLogo from '../../Assets/WindowLogo'

const TCCompo = () => {
    return (
        <div className='mb-[4.8rem]'>
            <div className='bg-[#f9f9f9]'>
                <div className='mx-auto px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] max-w-[1440px] min-[1520px]:px-0'>
                    <div>
                        <div className='py-[3.2rem] md:py-[4.8rem] max-w-[1440px] mx-auto block text-left'>
                            <p className='text-[1.3rem] md:text-[1.4rem] '>
                                At participating stores. Restrictions apply.
                            </p>
                            <p className='text-[1.3rem] md:text-[1.4rem] '>
                                * Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars.</p>

                            <p className='text-[1.3rem] md:text-[1.4rem] pb-[3.2rem]'>Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads.
                                <a href='/' className='text-green inline-flex underline hover:no-underline'>
                                    <span>For details, visit</span>
                                    <WindowLogo />
                                </a> </p>
                            <div className='inline-block m-0 relative text-left align-top w-full pb-[3.2rem] md:w-[50%]'>
                                <h2 className='text-[#00000094] pb-[1.6rem] text-[1.3rem] font-bold uppercase tracking-widest md:text-[1.4rem]'>Earning Stars</h2>
                                <p className='text-[1.3rem] pb-[1.6rem] md:text-[1.4rem]'>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
                                <p className='text-[1.3rem] pb-[1.6rem] md:text-[1.4rem]'>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
                                <p className='text-[1.3rem] md:text-[1.4rem]'>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
                            </div>
                            <div className='inline-block m-0 relative text-left align-top w-full pb-[3.2rem] md:w-[50%] md:pl-[3.2rem]'>
                                <h2 className='text-[#00000094] pb-[1.6rem] text-[1.3rem] font-bold uppercase tracking-widest md:text-[1.4rem]'>Terms Of Use</h2>
                                <p className='text-[1.3rem] pb-[1.6rem] md:text-[1.4rem]'>For full program details visit&nbsp;
                                    <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'>
                                        <span>starbucks.com/rewards/terms</span>
                                        <WindowLogo />
                                    </a>
                                </p>
                                <p className='text-[1.3rem] pb-[1.6rem] md:text-[1.4rem]'>* Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</p>
                                <p className='text-[1.3rem] pb-[1.6rem] md:text-[1.4rem]'>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the&nbsp;
                                    <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'>
                                        <span>Starbucks Store Locator</span>
                                        <WindowLogo />
                                    </a>
                                    and search for locations honoring “Redeem Rewards”.</p>
                                <p className='text-[1.3rem] md:text-[1.4rem]'>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
                            </div>
                            <div className='inline-block m-0 relative text-left align-top w-full pb-[3.2rem] md:w-[50%] md:pb-0'>
                                <h2 className='text-[#00000094] pb-[1.6rem] text-[1.3rem] font-bold uppercase tracking-widest md:text-[1.4rem]'>Benefits</h2>
                                <p className='text-[1.3rem] md:text-[1.4rem]'>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
                            </div>
                            <div className='inline-block m-0 relative text-left align-top w-full pb-[3.2rem] md:w-[50%] md:pl-[3.2rem] md:pb-0'>
                                <h2 className='text-[#00000094] pb-[1.6rem] text-[1.3rem] font-bold uppercase tracking-widest md:text-[1.4rem]'>Redeeming Rewards</h2>
                                <p className='text-[1.3rem] md:text-[1.4rem]'>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TCCompo