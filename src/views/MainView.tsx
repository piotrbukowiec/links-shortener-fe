import { useState, ChangeEvent } from 'react';
import { isValidUrl } from '../utils/is-url-valid';

export const MainView = () => {
	const [text, setText] = useState<string>('');

	const [isTextUrl, setIsTextUrl] = useState<boolean>(false);

	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value: inputValue } = event.target;

		setIsTextUrl(isValidUrl(inputValue));

		setText(inputValue);
	};

	return (
		<>
			<div className='container'>
				<form>
					<input
						type='text'
						placeholder='Podaj link do skrócenia'
						value={text}
						onChange={event => handleTextChange(event)}
					/>
					<button
						className='trigger-url-shorting-btn'
						disabled={!isTextUrl} // Poprawna składnia
					>
						Skróć link
					</button>
				</form>
			</div>
		</>
	);
};
