import { Navigate } from 'react-router-dom';
import { useSessionStore } from '../store/sessionStore';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const { authorized } = useSessionStore();

	// Dodaj logowanie
	console.log('Authorized status: ', authorized);

	if (!authorized) {
		return (
			<Navigate
				to='/failure'
				replace
				state={{ status: 403, error: 'Brak autoryzacji.' }}
			/>
		);
	}

	return children;
};
