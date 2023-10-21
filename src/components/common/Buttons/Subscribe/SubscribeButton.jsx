import React from 'react'
const buttonStyle = {
    width: "190px",
    backgroundColor: "transparent",
    color: "rgba(192, 118, 0, 1)"
}
const SubscribeButton = ({ scrollToSubscribeSection }) => {
    return (
        <button onClick={scrollToSubscribeSection} style={buttonStyle}>Subscribe Now</button>
    )
}

export default SubscribeButton