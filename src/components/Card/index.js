import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const CardItem = styled.div`
	border-radius: 2px;
	text-align: center;
	margin-bottom: 3px;
	position: relative;
	overflow: hidden;
	padding-bottom: 100%;

	${breakpoint("tablet")`
    margin-bottom: 20px;
	`};
`;

const Image = styled.img`
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
`;

class Card extends React.Component {
	render() {
		return (
			<CardItem>
				<Image src={this.props.src} />
			</CardItem>
		);
	}
}

export default Card;
