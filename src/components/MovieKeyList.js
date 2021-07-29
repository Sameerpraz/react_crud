import React from 'react'
// props are short form of property. Genarally they are passed form parents to the child. Varialbles and functions both
// can be passed as the components. 
const MovieKeyList = (props) => {
    const movieList = props.movieLists.map((movie)=>{
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
