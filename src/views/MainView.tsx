import { useState, ChangeEvent, MouseEvent } from 'react';
import { isValidUrl } from '../utils/is-url-valid';
import { UrlInput } from '../components/UrlInput';
import { ShortenLinkBtn } from '../components/ShortenLinkBtn';

export const MainView = () => {
	const [text, setText] = useState<string>('');
	const [isTextUrl, setIsTextUrl] = useState<boolean>(false);
	// const [isError, setIsError] = useState<string>('');

	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value: inputValue } = event.target;

		setIsTextUrl(isValidUrl(inputValue));

		setText(inputValue);
	};

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		(async () => {
			event.preventDefault();
			// const { shortUrl, error } = await post({ longUrl: text });
			// if everything went well, redirect /link-created-view
			// if error, redirect /error-view
		})();
	};

	return (
		<>
			<div className='container'>
				<form>
					<UrlInput onTextChange={handleTextChange} text={text} />

					<ShortenLinkBtn isTextUrl={isTextUrl} onBtnClick={handleClick} />
				</form>
			</div>
		</>
	);
};
