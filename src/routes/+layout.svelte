<slot />

<style>
	@font-face {
		font-family: 'Poppins';
		font-weight: 700;
		src: url('/fonts/poppins/Poppins-Bold.woff2') format('woff2'), url('/fonts/poppins/Poppins-Bold.woff') format('woff');
	}

	@font-face {
		font-family: 'Poppins';
		font-weight: 500;
		src: url('/fonts/poppins/Poppins-Medium.woff2') format('woff2'), url('/fonts/poppins/Poppins-Medium.woff') format('woff');
	}

    :global(body) {
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-style: normal;

        margin: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
    }

    :global(.grid) {
        margin-top: -1px;
        margin-left: -1px;
		display: grid;
		height: calc(100vh + 1px);
		width: calc(100vw + 1px);
		overflow: hidden;
		overscroll-behavior: none;
		grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 1fr
	}

    @media (min-width: 600px) {
		:global(.grid) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 1200px) {
		:global(.grid) {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
