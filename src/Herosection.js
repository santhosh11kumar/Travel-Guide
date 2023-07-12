import data from "./data"
import { useState } from "react";
import Card from "./Card"
import React from "react";

const Herosection  = (props) => {

function tourshandler(id){
    props.removetour(id);
}
  

return(
    <div>
        <div className="display" >
           {
            //  props.tours_stored.map((tour)=>{
            //   return  <Card  {...tour}></Card>

            //  })


            props.locationdata.map((tour) => {
              return <Card {...tour} removeplacebyid={tourshandler} />;
          })
          
             

           }

        </div>
        </div>
           
    ); 


};

export default Herosection;