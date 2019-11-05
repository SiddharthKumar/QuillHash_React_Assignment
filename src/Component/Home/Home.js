import React, { Component } from 'react'
import './Home.css';
import Imagebox from '../Home/Imagebox/Imagebox';
import images from './Images.json';
import fs from 'fs'


console.log(fs);
const imagesList = images.imagesList;
// console.log(imagesList);



;
export class Home extends Component {
    state = {
        favourite: false,
        deleted: false
    }

    addFavoriteHandler = (id) => {
        console.log(id);
    }
    deleteImageHandler = (id) => {
        console.log(id);
        let data = {}
        data.table = []
        var obj = {
            id:1,
            deleted: true
        }
        data.table.push(obj)
       
       
        fs.writeFile("Images.json", JSON.stringify(data), function (err) {
            if (err) throw err;
            console.log('complete');
        }
        );

    }

    render() {
        return (
            <div className='Home'>
                <p>this is home Component</p>
                <div className='row'>
                    {imagesList.map(data => {
                        if (!data.deleted){
                            return <Imagebox
                                key={data.id}
                                data={data}
                                addFavorite={() => this.addFavoriteHandler(data.id)}
                                deleteImage={()=> this.deleteImageHandler(data.id)} />
                        }else{
                            return null;
                        }

                    })}
                    {/* <Imagebox />
                    <Imagebox /> */}
                </div>
            </div>
        )
    }
}

export default Home;
