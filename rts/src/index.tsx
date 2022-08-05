import EventComponent from './events/EventComponent';
import UserSearchRef from './refs/UserSearchRef';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';


// 1) Import ReactDOM library
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);

// 4) Create a component
const App = () => {
	return (
		<div>
			<UserSearchRef />	
			<EventComponent />
			<UserSearch />
			<GuestList />
		</div>
	);
};

// 5) Show the component on the screen
root.render(<App />);
