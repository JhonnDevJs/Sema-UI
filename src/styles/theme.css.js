import { css } from "lit";

export const themeStyles = css`
	:host {
		--color-primary-surface: #fef2f2;
		--color-primary-light: #fecaca;
		--color-primary: #dc2626;
		--color-primary-hover: #ef4444;
		--color-primary-active: #991b1b;
		--color-secondary-surface: #f3f4f6;
		--color-secondary-hover: #e5e7eb;
		--color-secondary-active: #d1d5db;
		--color-bg: #ffffff;
		--color-surface: #ffffff;
		--color-surface-hover: #f9fafb;
		--color-text: #111827;
		--color-text-muted: #6b7280;
		--color-text-light: #9ca3af;
		--color-border: #e5e7eb;
		--color-border-hover: #d1d5db;
		--focus-ring: 0 0 0 3px rgba(220, 38, 38, 0.25);
		--radius-sm: 4px;
		--radius-md: 8px;
		--radius-full: 9999px;
		--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		--shadow-md:
			0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
		font-family:
			"Inter",
			system-ui,
			-apple-system,
			sans-serif;
	}
`;
