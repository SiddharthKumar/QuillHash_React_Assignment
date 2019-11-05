import React from 'react';
import './Imagebox.css';



const imagebox = (props) => {
    return (
        <div className="Imgcard">
            <img src={require("../../../Assets/images/" + props.data.icon)} alt="Denim Jeans" style={{ width: "100%", height: "400px" }} />
            <h1>.......................</h1>
            {/* <p className="price">$19.99</p>
            <p>Some text about the image..</p>  */}
            <p><button onClick={props.addFavorite}>Add to favourite</button></p>
            <p><button onClick={props.deleteImage}>Delete Image</button></p>
        </div>
    )
}

export default imagebox;