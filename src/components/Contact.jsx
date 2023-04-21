import React from 'react'
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const navigate = useNavigate();
    const HandleBack = () => {
        navigate("/planets");
    }
    return (
        <>
            <div style={{ color: "aqua", backgroundColor: "black", fontSize: "30px", padding: "20px" }} onClick={HandleBack}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div>
                <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
                    <h2 style={{ color: "aqua" }}>Coming In The Next Update!</h2>
                </div>
            </div>
        </>
    )
}

export default Contact