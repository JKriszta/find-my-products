import React from "react";
import "./card.css";
import words from "../words";
//import Img from "./img/0.jpg";
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

	/*
	let arr = [];

	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);

	let myArray = Array.apply(null, {length: 50}).map(Number.call, Number);
	const importAll = (r) =>{
		return r.keys(i).map(r)
	}		
	 let myArray = filename.map((e)=> {
		return './img/${}.jpg'
	}) */

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
			rate = 0;
		}

		return (
			<div className="cardContainer">
				<p className="title">{props.title}</p>

				<img className="icon" src={icon} title={props.type} alt="" />

				{words.map(({ filename , src}) => (
					<img key={filename} className="filename" src={src} alt="" />
					))}
					{/*
					<p className="filename">{props.filename}</p>
 <img src={require("./img/${ props.filename}.jpg")} /> */}
				{/* 	<img src={require('./img/"${i}".jpg')} alt=""/> */}
				<p className="description">{props.description}</p>
				<p className="price">${props.price}</p>

				<p className="rating">{rate}&#9734;</p>
			</div>
		);
	}

export default Card;
