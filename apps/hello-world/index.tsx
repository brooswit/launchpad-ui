import { Button } from '@launchpad-ui/components';
import { createRoot } from 'react-dom/client';

// Import LaunchPad UI tokens CSS
import '@launchpad-ui/tokens/dist/index.css';
import '@launchpad-ui/tokens/dist/themes.css';

// Simple app component
function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				fontFamily: 'var(--lp-font-family-base)',
			}}
		>
			<h1>LaunchPad UI Button</h1>

			<div style={{ display: 'flex', gap: '16px' }}>
				<Button variant="default">Default</Button>
				<Button variant="primary">Primary</Button>
				<Button variant="destructive">Destructive</Button>
			</div>
		</div>
	);
}

// Initialize the app
const root = document.getElementById('root');
if (root) {
	createRoot(root).render(<App />);
}
