<script>
export let text = "Callout Text";
export let isVisible = false;
export let isPointingLeft = false;
</script>

<div class="wrapper {isVisible ? 'is-visible' : ''}  {isPointingLeft ? 'is-pointing-left' : ''}">{text}</div>

<style>
.wrapper {
	animation: 1.4s ease 0s infinite normal none running bounce;
    background-color: rgb(0, 122, 255);
    border-radius: 8px;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    opacity: 0;
    padding: 6px 12px;
    position: absolute;
    transition: all 0.4s ease;
    user-select: none;
    white-space: nowrap;
    will-change: transform, opacity;
    z-index: 1000;
}

.wrapper.is-visible {
	opacity: 1;
}

.wrapper.is-pointing-left:after {
	border-color: transparent rgb(0, 122, 255) transparent transparent;  
    border-width: 8px 10px 8px 0px;
    left: -7px;
    right: auto;
}

.wrapper:after {
	-webkit-box-align: center;
    align-items: center;
    border-color: transparent transparent transparent rgb(0, 122, 255);
    border-style: solid;
    border-width: 8px 0px 8px 10px;
    content: "";
    display: flex;
    height: 0px;
    position: absolute;
    right: -7px;
    top: calc(50% - 8px);
    width: 0px;
}

@keyframes bounce { 
    0% { 
      transform: translate(3px, -50%);
    }
	50% { 
		transform: translate(-3px, -50%);
	}
	100% { 
		transform: translate(3px, -50%);
	}
}
</style>