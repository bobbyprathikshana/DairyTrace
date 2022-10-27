import { useEffect, useState } from 'react';
import React, { Component } from 'react';
import './Qrgenerator.css';

const Qrgenerator = () => {
const [temp, setTemp] = useState("");
const [word, setWord] = useState("");
const [size, setSize] = useState(250);
const [bgColor, setBgColor] = useState("ffffff");
const [qrCode, setQrCode] = useState("");

// Changing the URL only when the user
// changes the input
useEffect(() => {
	setQrCode
(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`);
}, [word, size, bgColor]);

// Updating the input word when user
// click on the generate button
function handleClick() {
	setWord(temp);
}

return (
	<div className="Qrgenerator">
	<h2>QR Code Generator for Product ID</h2>
	<br/>
	<div className="input-box">
		<div className="gen">
		<input type="text" onChange={
			(e) => {setTemp(e.target.value)}}
			placeholder="Enter product Id" />
		<button className="button"
			onClick={handleClick}>
			Generate
		</button>
		</div>
		<div className="extra">
		<h5>Background Color:</h5>
		<input type="color" onChange={(e) =>
		{ setBgColor(e.target.value.substring(1)) }} />
		<h5>Dimension:</h5>
		<input type="range" min="100" max="500"
		value={size} onChange={(e) =>
		{setSize(e.target.value)}} />
		</div>
	</div>
	<div className="output-box">
	<br/>
		<img src={qrCode} alt="" />
		<a href={qrCode} download="QRCode">
		<button type="button">Download</button>
		</a>
	</div>
	</div>
);

}
export default Qrgenerator;
