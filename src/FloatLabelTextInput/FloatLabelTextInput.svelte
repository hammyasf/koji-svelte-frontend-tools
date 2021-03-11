<script>
	export let placeholder = "Input Here...";
	export let value;
</script>

<div class="wrapper">
	<input id="input" {placeholder} bind:value={value} />
	<label for="input">{placeholder}</label>
</div>

<style>
.wrapper {
	align-items: center;
    background: white;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    line-height: 25px;
    letter-spacing: 0.02em;
    height: 50px;
    margin-left: -2px;
    margin-right: -2px;
    outline: none;
    pointer-events: auto;
    position: relative;
    user-select: auto;
    width: calc(100% + 4px);
    transition: 0.2s ease border-color,0.2s ease background;
}

input {
	appearance: none;
    background: transparent;
    border: none;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.02em;
    margin-left: 12px;
    margin-right: 5px;
    outline: none;
    transition: 0.1s ease-out transform;
    user-select: auto;
    padding: 0;
    width: 100%;
    -webkit-user-select: auto;
    -webkit-tap-highlight-color: transparent;
}

label {
	color: #0000004C;
    position: absolute;
    left: 12px;
    top: 4px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    pointer-events: none;
    transition: 0.2s ease color,0.1s ease opacity,0.1s ease transform;
    transform: translateY(9px);
    opacity: 0;
}
</style>