import { Icon } from '@launchpad-ui/icons';
import { useState } from 'react';
import './App.css';

export function App() {
	const [count, setCount] = useState(0);
	const [showAlert, setShowAlert] = useState(false);

	return (
		<div className="app">
			{showAlert && (
				<div className="alert" role="alert">
					<Icon name="check" size="small" />
					<div className="alert-content">Hello from LaunchPad UI!</div>
					<button type="button" className="alert-close" onClick={() => setShowAlert(false)}>
						×
					</button>
				</div>
			)}

			<div className="card">
				<h1>LaunchPad UI Demo</h1>
				<p>
					A simple Hello World demo showcasing LaunchDarkly's design system components with their
					signature look and feel
				</p>

				<div className="button-group">
					<button
						type="button"
						className="button button-primary"
						onClick={() => setShowAlert(true)}
					>
						Show Alert
					</button>

					<button
						type="button"
						className="button button-secondary"
						onClick={() => setCount((count) => count + 1)}
					>
						Count: {count}
					</button>
				</div>

				<div className="info-section">
					<div className="info-item">
						<Icon name="info-circle" size="small" />
						<span>Information</span>
					</div>
					<div className="info-item">
						<Icon name="flag" size="small" />
						<span>Features</span>
					</div>
				</div>
			</div>

			<div className="footer">
				<span>Powered by</span>
				<span>LaunchPad UI</span>
				<Icon name="pulse" size="small" />
			</div>
		</div>
	);
}
