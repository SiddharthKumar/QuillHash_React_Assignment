import React from 'react';
import './Imagebox.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const imagebox = (props) => {
    return (
        <div className="Imgcard">
            <img src={require("../../../Assets/images/" + props.data.icon)} alt="Denim Jeans" style={{ width: "100%", height: "400px" }} />
            <h1>.......................</h1>
            <p><button onClick={props.addFavorite}>Add to favourite {(props.data.favourite) ? <FontAwesomeIcon icon={Icons.faStar} /> : null}</button></p>
            <p><button onClick={props.deleteImage}>Delete Image</button></p>
        </div>
    )
}

export default imagebox;