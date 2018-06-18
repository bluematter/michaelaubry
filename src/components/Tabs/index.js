import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const TabsWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
	position: sticky;
	top: 0;
	background: #fff;
	z-index: 9;

	${breakpoint("tablet")`
      justify-content: flex-start;
  	`};
`;

const TabText = styled.div`
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 600;
	margin-right: 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 11px;
	height: 32px;

	${breakpoint("tablet")`
	      font-size: 13px;
	      height: 52px;
	  	`};
`;

export class Tabs extends React.Component {
	render() {
		return <TabsWrapper>{this.props.children}</TabsWrapper>;
	}
}

export class Tab extends React.Component {
	render() {
		return <TabText>{this.props.text}</TabText>;
	}
}
