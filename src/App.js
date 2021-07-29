
import MovieKeyList from "./components/MovieKeyList";


// variable is defined in parents i.e(App.js) and accessed in child components. 
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



function App() {
    return (
        <div className="App">

{/* MovieKeylist is the child component and we are trying to pass value through props. 
Here property name are variable name i.e. movieLists is same because to avoid confusions */}
            <MovieKeyList movieLists={movieLists}/>
            
        </div>
    );
}

export default App;