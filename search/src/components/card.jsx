import React from "react";
import "./card.css";
//import Img from "./img";
import words from "../words";
import Vegetable from "./imgType/vegetable.png";
import Bakery from "./imgType/bakery.png";
import Dairy from "./imgType/dairy.png";
import Fruit from "./imgType/fruit.png";
import Vegan from "./imgType/vegan.png";
import Meat from "./imgType/meat.png";

function Card(props) {
	let icon = "";
	if (props.type === "vegetable") {
		icon = Vegetable;
	} else if (props.type === "bakery") {
		icon = Bakery;
	} else if (props.type === "dairy") {
		icon = Dairy;
	} else if (props.type === "fruit") {
		icon = Fruit;
	} else if (props.type === "vegan") {
		icon = Vegan;
	} else if (props.type === "meat") {
		icon = Meat;
	}

	let rate = "";
	if (props.rating === 5) {
		//meg kell szorozni 5-el
		rate = 5;
	} else if (props.rating === 4) {
		rate = 4;
	} else if (props.rating === 3) {
		rate = 3;
	} else if (props.rating === 2) {
		rate = 2;
	} else if (props.type === 1) {
		rate = 1;
	} else {
		rate = "";
	}

	return (
		<div className="cardContainer">
			<p className="title">{props.title}</p>

			<img className="icon" src={icon} title={props.type} alt="" />
			{words.map((e, index) => {
				//console.log(require(`./img/${e.filename}`));
				let img = require(`./img/${e.filename}`);
				return (
					<img key={index} className="filename" src={img.default} alt="" />
				);
			})}
			<p className="description">{props.description}</p>
			<p className="price">${props.price}</p>
			<p className="rating">{rate}&#9734;</p>
		</div>
	);
}

export default Card;
