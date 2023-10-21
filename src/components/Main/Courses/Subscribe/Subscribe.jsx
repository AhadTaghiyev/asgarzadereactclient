import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { subscribeWithEmail } from '../../../../redux/actions/subscribeActions';
import Swal from 'sweetalert2';

const Subscribe = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const { isSuccess } = useSelector((state) => state.subscribe);

    const handleSubscribe = async () => {
        try {
            await dispatch(subscribeWithEmail(email));
            setEmail('');
            setShowAlert(true);
        } catch (error) {
            console.error('Subscription error:', error);
        }
    };

    useEffect(() => {
        if (isSuccess && showAlert) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You have been subscribed',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }, [isSuccess, showAlert]);
    return (
        <section className='subscribe'>
            <div className="container">
                <div className='subscribe-container'>
                    <div className='subscribe-container_head'>
                        <h5>Would you like to receive news about the courses?</h5>
                        <p>Do you want us to notify you when these courses are available?<br />
                            Then subscribe to our mailing list and receive news about all innovations and courses.</p>
                    </div>
                    <div className='subscribe-container_field'>
                        <span>email</span>
                        <div className='input-field'>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleSubscribe}>Subscribe now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe