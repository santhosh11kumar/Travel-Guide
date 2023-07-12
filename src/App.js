import Herosection from "./Herosection"
import data from "./data"
import { useState } from "react";


function App() {
  const [tours_stored,setTours] = useState(data)
  const tour_count = tours_stored.length

  function refresh_data(){
    setTours(data);
  }

   if(tour_count === 0){
    return (
        <div className="refresh">
            <h2 >No Tours left</h2>
            <button onClick={refresh_data} className="btnWhite">Refresh</button>

        </div>
    );
   }

  function removetourbyid(id){
    const temp_tours = tours_stored.filter(tour=>tour.id !== id)
    setTours(temp_tours);
  }
  
  return (
    <div className="App">
      <h1 className="Title">Vacations</h1>
      <Herosection locationdata = {tours_stored} removetour={removetourbyid}></Herosection>
    
    </div>
  );   
}

export default App;
