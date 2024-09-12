import { Routes, Route } from 'react-router-dom';
import { MainView } from './views/MainView';
import { ErrorView } from './views/ErrorView';

// import { MainView } from './views/MainView';

export const App = () => (
	<Routes>
		<Route path='/' element={<MainView />} />
		<Route path='/error' element={<ErrorView />} />
	</Routes>
);
