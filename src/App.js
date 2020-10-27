import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/title';
import Filter from './Components/Main-body/Filter/Filters';
import Expert from './Components/Main-body/Experts/Expert';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="App-body">
				<Title />
				<div className="Content">
					<Filter />
					<Expert />
				</div>
			</div>
		</div>
	);
}

export default App;
