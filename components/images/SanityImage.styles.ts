import styled from 'styled-components'

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	opacity: 0.5;

	&.noOverlay {
		display: none;
	}
	&.darkOverlay {
		background-color: var(--black);
	}
	&.blueOverlay {
		background-color: var(--blue-33);
	}
`
