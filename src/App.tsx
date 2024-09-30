import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { UrlForm } from './components/UrlForm';
import { SuccessPage } from './pages/SuccessPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { FailurePage } from './pages/FailurePage';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<UrlForm />} />
				<Route
					path='/success'
					element={
						<ProtectedRoute>
							<SuccessPage />
						</ProtectedRoute>
					}
				/>
				<Route path='/failure' element={<FailurePage />} />
				<Route path='*' element={<Navigate to='/not-found' replace />} />
			</Routes>
		</Router>
	);
};
