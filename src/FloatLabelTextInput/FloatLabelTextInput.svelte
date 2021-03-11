<script>
export let placeholder = "Input Here...";
export let value = "";
export let persistentLabel = null;
export let supportLabel = null;
export let errorLabel = null;
export let isError = false;

$: hasValue = value != "";
</script>

<div class="wrapper {isError ? 'is-invalid' : ''}">
	<input type="decimal" id="input" {placeholder} bind:value={value} class="{persistentLabel && hasValue ? 'has-value' : ''}" />
	{#if persistentLabel}
		<label for="input" class="{hasValue ? 'has-value' : ''}">{persistentLabel}</label>
	{/if}
</div>

{#if !isError}
	{#if supportLabel}
		<div class="note is-visible">{supportLabel}</div>
	{/if}
{/if}

{#if isError}
	{#if errorLabel}
		<div class="note is-visible is-invalid">{errorLabel}</div>
	{/if}
{/if}

<style>
.wrapper {
	align-items: center;
	background: #fff;
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
	transition: 0.2s ease border-color, 0.2s ease background;
}

.wrapper:focus-within {
	border-color: #007AFF;
}

.wrapper:focus-within label {
	color: #007AFF;
}

.wrapper.is-invalid {
	background-color: rgba(235, 87, 87, 0.2);
	border-color: #d64d43a8;
}

.wrapper.is-invalid:focus-within label {
	color: #d64d43;
}

.wrapper.is-invalid::placeholder {
	color: #af6e6a66;
}

label {
	color: #0000004C;
	position: absolute;
	left: 12px;
	top: 4px;
	font-family: "Source Sans Pro", sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 0.02em;
	pointer-events: none;
	transition: 0.2s ease color, 0.1s ease opacity, 0.1 ease transform;
	transform: translateY(9px);
	opacity: 0;
}

label.has-value {
	transform: translateY(0);
	opacity: 1;
}

input {
	appearance: none;
	background: transparent;
	border: none;
	font-family: "Source Sans Pro", sans-serif;
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

input::placeholder {
	color: #0000004C;
}

input.has-value {
	transform: translateY(7px);
}

.note {
	color: #0000004C;
	display: none;
	font-size: 14px;
	font-family: "Source Sans Pro", sans-serif;
	font-weight: 400;
	padding: 5px 1px 0 1px;
	transition: 0.2s ease color;
}

.note.is-visible {
	display: block;
}

.note.is-invalid {
	color: #d64d43;
}
</style>