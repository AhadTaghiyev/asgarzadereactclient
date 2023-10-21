import React from 'react'
import './PricingOption.scss'

const PricingOption = ({price}) => {
    return (
        <section className='pricing-section-course'>
            <div className="container">
                <div className="pricing-section-container">
                    <div className='pricing-section-container_first-part'>
                        <h3>Choose a Pricing Option</h3>
                        <div className="options">
                            <div className='option'>
                                <input type="radio" name="onetime" id="onetime" />
                                <label htmlFor="">
                                    <h5>{price}$</h5>
                                    <span>One time payment</span>
                                    <p>Get full access to the entire course forever!</p>
                                </label>
                            </div>
                            <div className='option'>
                                <input type="radio" name="onetime" id="onetime" />
                                <label htmlFor="">
                                    <h5>12 payments of ${price/12}/month</h5>
                                    <span>Payment Plan (12 months)</span>
                                    <p>Get full access to the entire course forever!</p>
                                    <h6>Include Taxes</h6>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button className='enroll-button'>Enroll now</button>
                </div>
            </div>
        </section>
    )
}

export default PricingOption