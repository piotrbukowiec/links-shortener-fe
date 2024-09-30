import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from './Spinner';
import { useLongUrlStore } from '../store/longUrlStore';
import { useShortUrlStore } from '../store/shortUrlStore';
import { useSessionStore } from '../store/sessionStore'; // Dodaj sessionStore

export const UrlForm = () => {
	const [isValid, setIsValid] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { longUrl, setLongUrl } = useLongUrlStore();
	const { setShortUrl } = useShortUrlStore();
	const { setAuthorized } = useSessionStore(); // Dodaj setter autoryzacji
	const navigate = useNavigate();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setLongUrl(value);
		const urlRegex = new RegExp(
			'^(https?:\\/\\/)?([\\w-]+\\.)+[\\w-]+(\\/[\\w-]*)*\\/?$'
		);
		setIsValid(urlRegex.test(value));
	};

	const handleSubmit = async () => {
		if (!isValid) return;

		setIsLoading(true);

		try {
			const response = await fetch('/links', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ longUrl }),
			});

			console.log('RESPONSE: ', response);
			if (!response.ok) {
				const data = await response.json();
				navigate('/failure', {
					state: {
						status: response.status,
						error: data.message || 'Wystąpił błąd.',
					},
				});
			} else {
				const data = await response.json();
				console.log('SUCCESS DATA: ', data);
				setShortUrl(data.shortUrl);
				setAuthorized(true); // Ustaw autoryzację na true po sukcesie
				navigate('/success');
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			navigate('/failure', {
				state: { status: 500, error: 'Serwer jest niedostępny.' },
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='form-container'>
			<input
				className='url-input'
				type='text'
				placeholder='Podaj link do skrócenia'
				value={longUrl}
				onChange={handleInputChange}
				disabled={isLoading}
			/>
			<button
				className='submit-button'
				onClick={handleSubmit}
				disabled={!isValid || isLoading}>
				{isLoading ? <Spinner size={50} /> : 'Skróć link'}
			</button>
		</div>
	);
};
