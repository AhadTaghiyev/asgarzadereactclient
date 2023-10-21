import React, { useState } from 'react'
import './Address.scss'
import Select from 'react-select'
import { ReactComponent as QuestionRed } from './../../../../../assets/svg/QuestionRed.svg'

const Address = () => {
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
        <div className='address'>
            <div className='address_header'>
                <h5>Billing address</h5>
                <div className='address_header_fields'>
                    <div className='half-inputs'>
                        <div className='half'>
                            <label htmlFor="">Name on card</label>
                            <input type="text" />
                        </div>
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
                    </div>
                    <div className='full-inputs'>
                        <label htmlFor="">Street address</label>
                        <input type="password" placeholder='' />
                    </div>
                    <div className='full-inputs'>
                        <label htmlFor="">Street address line 2 (optional)</label>
                        <input type="password" placeholder='' />
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
            </div>
            <div className='address_extras'>
                <div className='address_extras_field pad'>
                    <label className="switch">
                        <input className='switch-input' type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <p>Add a business tax ID</p>
                </div>
                <div className='address_extras_field '>
                    <label className="switch">
                        <input className='switch-input' type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <p>Delivery address same as billing</p>
                    <QuestionRed />
                </div>
            </div>
            <button className='address_update-billing'>Update billing info</button>
        </div>
    )
}

export default Address