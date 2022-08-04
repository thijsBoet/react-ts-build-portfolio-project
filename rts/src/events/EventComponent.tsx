const EventComponent: React.FC = () => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value);

	return (
		<div>
			<input onChange={onChange} type='text' />
		</div>
	);
};

export default EventComponent;
