<button>
    <slot></slot>
</button>

<style>
    button {
        background-color: #ffffff;
        color: #000000;
        border: 1px #000000 solid;
        border-radius: 0;
        margin: -1px;
        padding: 2rem;
        transition: 0s;
        transition-delay: 3s;
        transition-duration: 0.5s;
    }

    button:active {
        transition-delay: -1s;
        background-color: #000000;
        color: #ffffff;
    }
</style>