import { Alert } from '@launchpad-ui/alert';
import { Button } from '@launchpad-ui/button';
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
				padding: '32px',
				maxWidth: '800px',
				margin: '0 auto',
				fontFamily: 'var(--lp-font-family-base)',
			}}
		>
			<h1>LaunchPad UI Components</h1>
			<p>A minimal example of LaunchPad UI components</p>

			<div style={{ width: '100%', marginTop: '24px' }}>
				<h2>Buttons</h2>
				<div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
					<Button kind="default">Default</Button>
					<Button kind="primary">Primary</Button>
					<Button kind="destructive">Destructive</Button>
					<Button kind="minimal">Minimal</Button>
				</div>

				<h2 style={{ marginTop: '32px' }}>Alerts</h2>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
					<Alert kind="info">This is an info alert</Alert>
					<Alert kind="success">This is a success alert</Alert>
					<Alert kind="warning">This is a warning alert</Alert>
					<Alert kind="error">This is an error alert</Alert>
				</div>
			</div>
		</div>
	);
}

// Initialize the app
const root = document.getElementById('root');
if (root) {
	createRoot(root).render(<App />);
}
