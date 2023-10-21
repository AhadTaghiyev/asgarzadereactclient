import React, { useState } from 'react'
import './CreditCard.scss'
import { ReactComponent as Visa } from './../../../../../assets/svg/Visa.svg'
import { ReactComponent as MasterCard } from './../../../../../assets/svg/Mastercard.svg'
import { ReactComponent as Amex } from './../../../../../assets/svg/Amex.svg'
import { ReactComponent as Diners } from './../../../../../assets/svg/Diners.svg'
import { ReactComponent as CVC } from './../../../../../assets/svg/CVC.svg'
import Select from 'react-select'
const CreditCard = () => {
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

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <form className='credit-card'>
            <div className='credit-card_header'>
                <h5>Add / Change Credit Card</h5>
                <p>You must keep a card on file as long as you have an active subscription or payment plan.</p>
            </div>
            <div className='credit-card_body'>
                <div className='full-inputs'>
                    <label htmlFor="">Name on card</label>
                    <input type="text" placeholder='malahat' />
                </div>
                <div className='half-inputs first'>
                    <div className='half'>
                        <label htmlFor="">Country</label>
                        <Select
                            placeholder={'Select your billing country'}
                            options={options}
                            styles={customStyles}
                            value={selectedOption}
                            onChange={handleOptionChange}
                        />
                    </div>
                    <div className='half'>
                        <label htmlFor="">Postal code</label>
                        <input type="email" placeholder='' />
                    </div>
                </div>
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
            </div>
            <button className='credit-card_upload'>Update credit card</button>
        </form>
    )
}

export default CreditCard