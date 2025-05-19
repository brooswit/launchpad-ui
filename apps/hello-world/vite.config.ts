import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	server: {
		open: true,
	},
	resolve: {
		alias: {
			'@launchpad-ui/components': resolve(__dirname, '../../packages/components/src'),
			'@launchpad-ui/icons': resolve(__dirname, '../../packages/icons/src'),
			'@launchpad-ui/tokens': resolve(__dirname, '../../packages/tokens/src'),
		},
	},
});
