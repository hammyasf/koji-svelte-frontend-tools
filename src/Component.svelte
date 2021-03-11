<script>
  export let name;
  export let buttonText = "Button";

  function handleClick() {
    buttonText += " Clicked";
  }
</script>

<h1>Hello {name}!</h1>

<button on:click={handleClick}>{buttonText}</button>
