import React from 'react';
import './Imagebox.css';
import image from '../../../Assets/images/1.jpg'


const imagebox = () => {
    return (
        <div className="Imgcard">
            <img src={image} alt="Denim Jeans" style={{ width: "100%",height:"400px" }} />
            <h1>.......................</h1>
            {/* <p className="price">$19.99</p>
            <p>Some text about the image..</p>  */}
            <p><button>Add to favourite</button></p>
        </div>
    )
}

export default imagebox;