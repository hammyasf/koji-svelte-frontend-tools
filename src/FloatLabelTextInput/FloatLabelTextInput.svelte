<script>
	export let placeholder = "Input Here...";
	export let value;
</script>

<input {placeholder} bind:value={value} />