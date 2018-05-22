import React from "react";

const Title = props => (
	<div>
		<h1>{props.title}</h1>
		<h3>liczba zamowien: {props.length}</h3>
	</div>
);

export default Title;
