import { useLocation, useNavigate } from 'react-router-dom';

export const FailurePage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const errorStatus = location.state?.status || 500;
	const errorMessage = location.state?.error || 'Wystąpił nieznany błąd.';

	let errorHeader;
	switch (errorStatus) {
		case 403:
			errorHeader = '403 Forbidden';
			break;
		case 404:
			errorHeader = '404 Not Found';
			break;
		case 500:
		default:
			errorHeader = '500 Internal Server Error';
			break;
	}

	return (
		<div className='error-container'>
			<h1 className='error-header'>{errorHeader}</h1>
			<h2 className='error-message'>{errorMessage}</h2>
			<button className='back-button' onClick={() => navigate('/')}>
				Powrót na stronę główną
			</button>
		</div>
	);
};
