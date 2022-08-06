import React, { useState } from 'react';

const users = [
	{ name: 'John', age: 20 },
	{ name: 'Sara', age: 21 },
	{ name: 'Bob', age: 22 },
	{ name: 'Alice', age: 23 },
	{ name: 'Sam', age: 24 },
	{ name: 'Tom', age: 25 },
	{ name: 'Jack', age: 26 },
	{ name: 'Jill', age: 27 },
	{ name: 'Jane', age: 28 },
	{ name: 'Mary', age: 29 },
	{ name: 'Johan', age: 30 },
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const search = () => {
		const foundUser = users.find(user => user.name === name);
		setUser(foundUser);
		console.log(foundUser);
	};

	return (
		<div>
			<h3>User Search</h3>
			<input value={name} onChange={e => setName(e.target.value)} type='text' />
			<button onClick={search}>Find User</button>
			<div>
				{user && user.name} {user && user.age}
			</div>
		</div>
	);
};

export default UserSearch;
