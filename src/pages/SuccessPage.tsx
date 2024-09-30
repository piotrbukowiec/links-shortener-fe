import { useEffect, useState } from 'react';
import { useShortUrlStore } from '../store/shortUrlStore';
import { useNavigate } from 'react-router-dom';

export const SuccessPage = () => {
	const { shortUrl } = useShortUrlStore();
	const navigate = useNavigate();

	const [text] = useState<string>(
		import.meta.env.VITE_APP_URL + '/redirect/' + shortUrl
	);

	useEffect(() => {
		console.log(text);
	});

	const handleCopy = () => {
		navigator.clipboard.writeText(text);
		alert('Skrócony link skopiowany do schowka!');
	};

	return (
		<div className='success-container'>
			<h1 className='success-header'>Twój link został skrócony!</h1>
			<p className='short-url'>{text}</p>
			<button className='copy-button' onClick={handleCopy}>
				Kopiuj link
			</button>
			<button className='back-button' onClick={() => navigate('/')}>
				Powrót na stronę główną
			</button>
		</div>
	);
};
