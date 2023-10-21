import React,{useState} from 'react'
import './BasketArea.scss'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const BasketArea = ({price,title,image,handlePrice,courseId,code,handleCode}) => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
const applyCuponCode=async (e)=>{
    setButtonDisabled(true); 
   try {
    const res= await axios.post(`"http:/bashirja-005-site10.etempurl.com/api/v1/CuponCode/Apply?code=${code}&courseId=${courseId}`)
  
    if(res.data.statusCode === 200){
        toast.success('Coupon code applied successfully.');
        handlePrice(res.data.message)
        setButtonDisabled(false); 
    }else{
        toast.error('The coupon code is not valid!');
        setButtonDisabled(false); 
    }
        
    } catch (error) {
       
        toast.error('The coupon code is not valid!');
        setButtonDisabled(false); 
    }
    
}
    return (
        <div className='basket-area-payment-section'>
            <div className='basket-area-payment'>
                <div className='basket-area-payment_head'>
                    <div className='main-info'>
                        <img className='main-info_image' src={image} alt="videoImage" />
                        <div className='main-info_text'>
                            <p>{title}</p>
                            <span>${price}</span>
                        </div>
                    </div>
                    <div className='basket-area-payment_head_field'>
                        <p>If you have a coupon code you can add it here</p>
                        <div className='input-field'>
                            <input value={code} onChange={e=>handleCode(e.target.value)} name="code" type="text" />
                            <button disabled={isButtonDisabled} onClick={e => applyCuponCode(e)}>
    {isButtonDisabled ? "loading" : "apply"}
</button>

                        </div>
                    </div>
                </div>
                <div className='basket-area-payment_total'>
                    <p>Billed today (USD)</p>
                    <span>${price}</span>
                </div>
            </div>
            <Toaster toastOptions={{
    className: '',
    style: {
        duration: 3000,
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
      zIndex:"999999999999999999999"
    },
  }} className="test"  position="top-center"
  reverseOrder={false} />
        </div>
    )
}

export default BasketArea