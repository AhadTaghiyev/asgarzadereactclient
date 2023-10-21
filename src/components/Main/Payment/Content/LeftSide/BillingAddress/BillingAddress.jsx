import React, { useState } from 'react'
import './BillingAddress.scss'
import { ReactComponent as QuestionWhite } from './../../../../../../assets/svg/QuestionWhite.svg'
import Select from 'react-select'

const BillingAddress = () => {
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
        <div className='billing-address-payment'>
            <h5>Billing address</h5>
            <div className='billing-address-payment_fields'>
                <div className='fields'>
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
                    <div className="full-inputs">
                        <label htmlFor="">Street adress</label>
                        <input type="text" placeholder='' />
                    </div>
                    <div className="full-inputs">
                        <label htmlFor="">Street address line 2 (optional)</label>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='triple-inputs'>
                        <div className='triple'>
                            <label htmlFor="">City</label>
                            <input type="text" />
                        </div>
                        <div className='triple'>
                            <label htmlFor="">State</label>
                            <Select
                                placeholder={'Select state'}
                                options={options}
                                styles={customStyles}
                                value={selectedOption}
                                onChange={handleOptionChange}
                            />
                        </div>
                        <div className='triple'>
                            <label htmlFor="">ZIP code</label>
                            <input type="text" />
                        </div>  
                    </div>
                </div>
                <div className='checkboxes'>
                    <div className='checkbox bottom-line'>
                        <label className="custom-checkbox">
                            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                            <span className="geekmark"></span>
                        </label>
                        <p>Delivery address same as billing</p>
                        <QuestionWhite />
                    </div>
                    <div className='checkbox'>
                        <label className="custom-checkbox">
                            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                            <span className="geekmark"></span>
                        </label>
                        <p>Add a business tax ID</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillingAddress