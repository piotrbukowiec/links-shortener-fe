import { ChangeEvent } from 'react';

interface Props {
	onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
	text: string;
}
export const UrlInput = ({ onTextChange, text }: Props) => {
	return (
		<>
			<input
				type='text'
				placeholder='Podaj link do skrócenia'
				value={text}
				onChange={event => onTextChange(event)}
			/>
		</>
	);
};
