import React from "react";
import Heading from "./Heading";
import Image from "./Image";

function Cards(props){
    return(
        <>
            <div className="cards">
                <div className="card">
                    <Image imgsrc={props.imgsrc} />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <Heading sname={props.sname} />
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Cards;