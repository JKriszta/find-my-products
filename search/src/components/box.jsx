import React from "react";
import Card from "./card";
import words from "../words";


function box({setSearch, search}) {	

	const list = words.filter((words)=>{
		return words.description.toLowerCase().includes(search.toLowerCase() ||
		words.title.toLowerCase().includes(search.toLowerCase() ||
		words.rating.toString().includes(search)))
	  })

    

	return (
		<div className="box">
			{list.map((e, index)=> (
            <Card key={index} title={e.title} type={e.type} description={e.description} filename={e.filename} price={e.price} rating={e.rating}/>))}

			
       	</div>
	);
}

export default box;
