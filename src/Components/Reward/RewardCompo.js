import React from 'react'
import './reward.css'
import delta from '../../Assets/delta-skymiles.png'
const RewardCompo = () => {
    return (
        <div className="mb5">
            <div className="md-p5 outerBox___3IjBB">
                <div className="innerBox___3SaAl">
                    <div className="sb-contentColumn innermost sb-global-gutters mx-auto sb-contentColumn--xlarge sb-global-gutters--maxWidthLayout">
                        <div className="sb-contentColumn__inner contentColumn___1Bl8B">
                            <div className="starsImage___32QiX leftStars___3o4Et">
                            </div>
                            <div>
                                <div className="text-center sm-size10of12 sm-offset1of12 md-size8of12 md-offset2of12">
                                    <h2 className="sb-heading text-lg text-semibold pt3 px7 md-px0" tabIndex="-1">Keep the Rewards Coming</h2>
                                    <p className="text-center pt3">The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
                                </div>
                                <div className="programContainer___vIuLE">
                                    <div className="size12of12 md-pb0 text-center">
                                        <div className="text-center">
                                            <img className="sb-imageFade__show" src={delta} alt="Delta Skymiles" width="195px" />
                                        </div>
                                        <p className="pt1">
                                            <a className="color-greenStarbucks" href="/" >
                                                Link your Delta SkyMiles®</a>
                                            and Starbucks® Rewards accounts to earn 1 mile per $1* spent at Starbucks and double Stars on Delta travel days.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a className="sb-button sb-button--positive mt4 mb2" href="/account/create" style={{ marginTop: '20px', minWidth: "35px", minHeight: "35px" }}>Join Starbucks® Rewards
                                    </a>
                                </div>
                            </div>
                            <div className="starsImage___32QiX rightStars___3Gx5M">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RewardCompo