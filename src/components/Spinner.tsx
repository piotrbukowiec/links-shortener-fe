import styled, { keyframes } from 'styled-components';

interface Props {
	size?: number;
}

export const Spinner = ({ size = 500 }: Props) => <StyledSpinner size={size} />;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.span<{ size: number }>`
	--spinner-size: ${({ size }) => `${size}px`};
	--border-width: calc(var(--spinner-size) / 16);
	--color-main: #fff;
	--color-accent: #ff3d00;

	width: var(--spinner-size);
	height: var(--spinner-size);
	border-radius: 50%;
	display: inline-block;
	border: var(--border-width) solid;
	border-color: var(--color-main) var(--color-main) transparent transparent;
	box-sizing: border-box;
	animation: ${rotation} 1s linear infinite;
`;
