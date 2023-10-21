import React, { useState } from 'react'
import './PaymentMethod.scss'
import { ReactComponent as Lock } from './../../../../../../assets/svg/Lock.svg'
import { ReactComponent as PayPalWhite } from './../../../../../../assets/svg/PaypalLogoWhite.svg'
import { ReactComponent as PayPalBlue } from './../../../../../../assets/svg/PaypalLogoBlue.svg'
import { ReactComponent as Visa } from './../../../../../../assets/svg/Visa.svg'
import { ReactComponent as MasterCard } from './../../../../../../assets/svg/Mastercard.svg'
import { ReactComponent as Amex } from './../../../../../../assets/svg/Amex.svg'
import { ReactComponent as Diners } from './../../../../../../assets/svg/Diners.svg'
import { ReactComponent as CVC } from './../../../../../../assets/svg/CVC.svg'
import Select from 'react-select'

const PaymentMethod = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypalRadio2');
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'Azerbaijan', label: 'Azerbaijan' },
        { value: 'Turkey', label: 'Turkey' },
        { value: 'Poland', label: 'Poland' }
    ]
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isHovered ? 'rgba(42, 42, 42, 1)' : '#222',
            ':active': {
                backgroundColor: 'orange',
            },
            ':selected': {
                backgroundColor: 'rgba(42, 42, 42, 1) !important',
                color: 'rgba(192, 118, 0, 1) !important',
            },
            ':hover': {
                backgroundColor: 'rgba(42, 42, 42, 1)'
            },
        }),
    };
    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.id);
    };
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className='payment-method-section'>
            <div className='payment-method-section_head'>
                <h5>Payment information</h5>
                <div className='secure'>
                    <Lock />
                    <p>All transactions are secure and encrypted.</p>
                </div>
            </div>
            <ul className='payment-method-section_options'>
                <li>
                    <div className={`method radio ${selectedPaymentMethod === 'paypalRadio' ? 'checked' : ''}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            id="paypalRadio"
                            checked={selectedPaymentMethod === 'paypalRadio'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="paypalRadio" className='radio-label'>
                            <PayPalWhite />
                        </label>
                    </div>
                    <div className={`method_form ${selectedPaymentMethod === 'paypalRadio' ? 'visible' : ''}`}>
                        <div className="full-inputs">
                            <label htmlFor="">Country</label>
                            <Select
                                placeholder={'Select Country'}
                                options={options}
                                styles={customStyles}
                                value={selectedOption}
                                onChange={handleOptionChange}
                            />
                        </div>
                        <div className='paypal-logo'>
                            <PayPalBlue />
                        </div>
                        <p>
                            Where applicable, the final sales tax may be added after you complete the transaction.
                        </p>
                    </div>
                </li>
                <li>
                    <div className={`method radio ${selectedPaymentMethod === 'paypalRadio2' ? 'checked' : ''}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            id="paypalRadio2"
                            checked={selectedPaymentMethod === 'paypalRadio2'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="paypalRadio2" className='radio-label'>
                            Card
                        </label>
                    </div>
                    <div className={`method_form ${selectedPaymentMethod === 'paypalRadio2' ? 'visible' : ''}`}>
                        <div className='full-inputs'>
                            <label htmlFor="">Card number</label>
                            <div className="input card-number">
                                <input type="text" placeholder='1234 1234 1234 1234' />
                                <div className='cards'>
                                    <Visa />
                                    <MasterCard />
                                    <Amex />
                                    <Diners />
                                </div>
                            </div>
                        </div>
                        <div className='half-inputs'>
                            <div className='half'>
                                <label htmlFor="">Expiration</label>
                                <input type="text" placeholder='MM/YY' />
                            </div>
                            <div className='half'>
                                <label htmlFor="">CVC</label>
                                <div className="input">
                                    <input type="password" placeholder='CVC' />
                                    <div className='cvc'>
                                        <CVC />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='checkbox-side'>
                            <label className="custom-checkbox">
                                <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                                <span className="geekmark"></span>
                            </label>
                            <p>Save my card info for future purchases</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PaymentMethod