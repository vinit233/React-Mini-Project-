import React from "react";
import Cards from './Cards';
import Sdata from './Sdata';

const ncard=(val)=>{
    return(
        <Cards 
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.links}
        />
    );
}
const App=()=>{
    return (<>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2021</h1>
    {Sdata.map(ncard)}
    </>);
};

export default App;