const EventComponent: React.FC = () => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value);
	const onDragStart = (e: React.DragEvent<HTMLInputElement>) => console.log(e);

	return (
		<div>
			<h3>Events</h3>
			<input onChange={onChange} type='text' />
			<div draggable onDragStart={onDragStart}>
				Drag Me!
			</div>
		</div>
	);
};

export default EventComponent;
