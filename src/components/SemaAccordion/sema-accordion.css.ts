import { css } from "lit"

export const SemaAccordionStyles = css`
  :host {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
  }

  .accordion {
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    background: var(--isOpenBackground);
    overflow: hidden;
  }

  .__btn {
    padding: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    background: var(--color-btn);
    transition: background 0.2s ease, color 0.2s ease;
    max-height: 200px; 
  }

  .__title {
    margin: 0;
    color: var(--color-title);
  }
  
  svg {
    width: 16px;
    height: 16px;
    fill: var(--color-svg);
    transform: var(--isOpenRotate);
    transition: transform 0.3s;
  }

  .__dropdown {
    padding: var(--isOpenPadding);
    max-height: var(--isOpenHeight);
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: var(--isOpenOpacity);
    border-top: var(--isOpenBorderTop);
  }

  .__text {
    color: #444547;
    margin: 0;
  }

	@media (prefers-color-scheme: dark) {
		h3 {
      color: #fff;
    }
      
    svg {
      fill: var(--firstCutomColor);
    }

    .__text {
      color: #dbdbdd;
    }

	}
`
