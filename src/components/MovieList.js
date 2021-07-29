import React from 'react'


// react arrow functional component export(rafce)
const MovieList = () => {
    const movies = [
        "Sadeexya",
        "Sameer",
        "Sangeeta"
    ];
    const movielist = movies.map((movie,index)=>{
        return(
            <li key={index}>{movie}</li>
        )});
    return (
        <div>
            <h2>Lists without Key</h2>
            <ul>{movielist}
            </ul>
        </div>
    )
}

export default MovieList
