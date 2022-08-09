import { StrictMode, useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import * as esbuild from 'esbuild-wasm';

const App = () => {
	const ref = useRef<any>();
	const [input, setInput] = useState('');
	const [code, setCode] = useState('');

	const startService = async () => {
		ref.current = await esbuild.startService({
			worker: true,
			wasmURL: './esbuild.wasm',
		});
	};
	useEffect(() => {
		startService();
	}, []);

	const onClick = async () => {
		if (!ref.current) return;
		const result = await ref.current.transform(input, {
			loader: 'jsx',
			target: 'es2015',
		});

		setCode(result.code);
	};

	return (
		<div>
			<textarea
				value={input}
				onChange={e => setInput(e.target.value)}
			></textarea>
			<div>
				<button onClick={onClick}>Submit</button>
			</div>
			<pre>{code}</pre>
		</div>
	);
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
