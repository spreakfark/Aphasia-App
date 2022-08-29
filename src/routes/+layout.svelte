<slot />

<style>
	@font-face {
		font-family: 'Poppins';
		src: url('/fonts/poppins/Poppins-Bold.woff2') format('woff2'), url('/fonts/poppins/Poppins-Bold.woff') format('woff');
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
    }
</style>
