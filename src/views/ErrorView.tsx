interface Props {
	error?: Error | string;
}

export const ErrorView = ({ error }: Props) => {
	return <h1>Error{`${error ? `: ${error}` : ''}`}</h1>;
};
