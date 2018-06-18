import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
	padding: 20px 0 0;
	max-width: 935px;
	margin: 0 auto;

	${breakpoint("tablet")`
    padding: 30px 20px 0;
	  width: calc(100% - 40px);
	`};
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 3px;

	${breakpoint("tablet")`
    grid-column-gap: 20px;
	`};
`;
