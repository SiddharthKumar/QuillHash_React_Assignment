import React, { Component } from 'react'
import './Home.css';
import Imagebox from '../Home/Imagebox/Imagebox';

export class Home extends Component {
    state = {
        imagesList: [
            {
                "id": 1,
                "icon": "1.jpg",
                "favourite": false,
                "deleted": false
            },
            {
                "id": 2,
                "icon": "1.jpg",
                "favourite": false,
                "deleted": false
            },
            {
                "id": 3,
                "icon": "1.jpg",
                "favourite": false,
                "deleted": false
            },
            {
                "id": 4,
                "icon": "1.jpg",
                "favourite": false,
                "deleted": false
            },
            {
                "id": 5,
                "icon": "1.jpg",
                "favourite": false,
                "deleted": false
            },
            {
                "id": 6,
                "icon": "1.jpg",
                "favourite": false,
                "deleted": false
            }
        ]
    }

    writeJsonFile = (list) => {
        list = JSON.stringify({ imagesList: list });
        localStorage.setItem("imagesList", list)
    }

    /**
     * Add favorite image 
     */
    addFavoriteHandler = (id) => {
        const newImagesList = this.state.imagesList.map(data => {
            if (data.id === id) {
                data.favourite = !data.favourite;
            }
            return data;
        });
        this.writeJsonFile(newImagesList);
        this.setState({
            imagesList: newImagesList,
        });
    }

    deleteImageHandler = (id) => {
        const newImagesList = this.state.imagesList.map(data => {
            if (data.id === id) {
                data.deleted = true;
            }
            return data;
        });
        this.writeJsonFile(newImagesList);
        this.setState({
            imagesList: newImagesList,
        });
    }

    componentDidMount() {
        let imagesList = localStorage.getItem("imagesList");
        if (imagesList != null) {
            imagesList = JSON.parse(imagesList).imagesList;
            this.setState({
                imagesList: imagesList,
            });
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.state.imagesList.map(data => {
                        if (!data.deleted) {
                            return <Imagebox
                                key={data.id}
                                data={data}
                                addFavorite={() => this.addFavoriteHandler(data.id)}
                                deleteImage={() => this.deleteImageHandler(data.id)} />
                        } else {
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
