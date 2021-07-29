import DisplayName from "./components/DisplayName";

function App() {
    const name = "Sameer"
    const surname = "Prajapati"
    const bachelor = true;
    function handleClick(){
        console.log('123')

    }   
    return (
        <div className="App">
            <DisplayName />
            <h1>{name} {surname}</h1>
            <h2>{bachelor? 'PASS':'FAILED'}</h2>
            {/* click garey pachi matrai change hunxa */}
            <button onClick={handleClick}>Submit</button>

            {/* click garnu pardaina */}
            <button onMouseEnter={handleClick}>Submit</button>

        </div>
    );
}

export default App;