import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipe/:id" element={<Detail />} />
			</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
