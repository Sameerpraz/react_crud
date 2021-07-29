import React from 'react'

const MovieKeyList = () => {
    const movieLists = [
        {
            id: 1,
            name: 'Sameer',
        },
        {
            id: 2,
            name: 'Shyam',
        },
        {
            id: 3,
            name: 'Sagar',
        },
        {
            id: 4,
            name: 'San,',
        },
    ];
    // providing of key 
    const movieList = movieLists.map((movie)=>{
        return(
            <li key={movie.id}>{movie.name}</li>
        )});
    return (
        <div>
            <h2>Keys in lists</h2>
            <ol>{movieList}</ol>
            
        </div>
    )
}

export default MovieKeyList;
