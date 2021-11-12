import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Roster from './components/Roster'

function App() {
	const [teamMembers, setTeamMember] = useState([]);
	const URL = 'https://coding-assignment.g2crowd.com/';

	const getTeamMembers = async () => {
		let response = await axios.get(URL);
		console.log(response);
		setTeamMember(response.data);
    console.log(teamMembers)
	};

	useEffect(() => {
		getTeamMembers();
	}, []);

	return (
		<div className="App">
			<Roster teamMembers={teamMembers}/>
		</div>
	);
}

export default App;
