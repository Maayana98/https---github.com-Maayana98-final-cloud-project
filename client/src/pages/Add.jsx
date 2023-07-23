import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
    const [movie,setMovie] = useState({
        title:"",
        desc:"",
        price:null,
        cover:""
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setMovie(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:3010/movies", movie)
            navigate('/');
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Add New Movie</h1>
            <input 
            type="text" 
            placeholder="title" 
            onChange={handleChange} 
            name="title"
            />
            <input 
            type="text" 
            placeholder="desc" 
            onChange={handleChange} 
            name="desc"
            />
            <input 
            type="number" 
            placeholder="price" 
            onChange={handleChange} 
            name="price"
            />
            <input 
            type="text" 
            placeholder="cover" 
            onChange={handleChange} 
            name="cover"
            />
            <button onClick={handleClick}>Add</button>
            <Link to="/">See all movies</Link>
        </div>
    );
};

export default Add;