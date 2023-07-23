import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies,setMovies] = useState([])
    
    useEffect(()=>{
        const fetchAllMovies = async ()=>{
            try {
                const res = await axios.get("http://localhost:3010/movies")
                setMovies(res.data);
            } catch (err) {
                console.log(err)   
            }
        }
        fetchAllMovies()
    },[])

    const handleDelete = async (id)=>{
        try {
            await axios.delete("http://localhost:3010/movies/"+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Movies Shop</h1>
            <div className="movies" >
                {movies.map((movie)=>(
                    <div className="movie" key={movie.id}>
                        {movie.cover && <img src={movie.cover} alt="" />}
                        <h2>{movie.title}</h2>
                        <p>{movie.desc}</p>
                        <span>{movie.price}</span>
                        <button className="delete" onClick={() => handleDelete(movie.id)}>Delete</button>
                        <button className="update"><Link to={`/update/${movie.id}`}>Update</Link></button>
                    </div>  
                ))}
            </div>
            <button>
                <Link to="/add">Add new movie</Link>
            </button>
        </div>
    )
}

export default Movies