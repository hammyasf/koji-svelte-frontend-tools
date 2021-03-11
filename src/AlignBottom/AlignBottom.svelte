<script>
export let isFullHeight = false;
export let isRemixing = false;
</script>

<div class="wrapper {isFullHeight ? 'is-full-height' : ''} {isRemixing ? 'is-remixing' : ''}">
	<slot></slot>
</div>

<style>
.wrapper {
	align-items: stretch;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	left: 0;
	transition: 0.3s ease all;
	position: absolute;
	right: 0;
	max-height: 100%;
}

.wrapper.is-full-height {
	height: 100%;
}

.wrapper.is-remixing {
	margin-bottom: 60px;
	max-height: calc(100% - 60px);
}
</style>