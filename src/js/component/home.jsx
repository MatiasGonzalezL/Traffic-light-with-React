import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("0");
	return (
		<div className="container">
			<div>
				<h1 className="text-center" id="fierro">
					H
				</h1>
			</div>
			<div className="cuerpo">
				<div
					onClick={() => setColor("red")}
					className={
						"light red" + (color === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow" + (color === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green" + (color === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
