import { useState } from "react";

function Card({id,name,info,image,price,removeplacebyid}){

    const [readMore,setReadmore_less] = useState(false);

    function Readmore_less_hanler(){
        setReadmore_less(!readMore);
    }

    const Description = readMore ? info : `${info.substring(0,200)}`

    return (
        <div className="cards">
            <img src={image} className="location_img"></img>
            <div className="tourPrice">{price}</div>
            <div className="tourName">{name}</div>

            <div className="Description">
                 <p>{Description}
                 <span className="readMore" onClick={Readmore_less_hanler}>{readMore?`Show Less` : `...Read More` }</span>
                 </p>
            </div>

            <div className="button_div">
                 <button className="btnRed" onClick={()=>removeplacebyid(id)}>Not Interested </button>
            </div>



        </div>
    );
}

export default Card;