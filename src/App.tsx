import { Routes, Route } from 'react-router-dom';
import { MainView } from './views/MainView';

// import { MainView } from './views/MainView';

export const App = () => (
	<Routes>
		<Route path='/' element={<MainView />} />
	</Routes>
);
