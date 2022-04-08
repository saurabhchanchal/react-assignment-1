

import "./App.css"

// here always come with capital case with function
function App() {
  const OpSystem = ["Android", "Blackberry", "iPhone", "WhindowPhone"];
  const Manufacturers = [ {name:"Android", style: "square"}, {name: "HTC", style: "square"}, {name: "Micromax", style: "disc"}, {name: "Apple", style: "circle"}]
  return (
    <div className="App">

<div className="operating">
   <h1>Mobile Operating System</h1>
   {OpSystem.map((ele) => {
             return <Systeam opsytm={ele}/>
              // here we take key value pairs
   })}
  </div>

<div>
  <h1>Mobile Manufacturere</h1>
  {Manufacturers.map((e) => {
     return <li className= {e.style}>{e.name} </li>
  })}
</div>

    </div>
  );
};

//here we are creating Component
function Systeam(parameter) {
     return <li className="changesize">{parameter.opsytm }</li>   
}

export default App;
//age mai ternery(3)at line 14 operator use hua hai es k ander{}