<script>
  import Button from "./lib/components/button/Button.svelte";
</script>

<main>
  <div class="canvas">
    <h1 class="header">Digital Solutions -Design Repository</h1>
    <p>These components have been imported from the src folder</p>
    <div class="component-container">
      <Button primary={true} hasIcon={true} text="UPLOAD" />
      <Button hasIcon={true} text="UPLOAD" />
    </div>
    <div class="component-container">
      <Button primary={false} hasIcon={false} text="UPLOAD" />
      <Button primary={true} hasIcon={false} text="UPLOAD" />
    </div>
  </div>
</main>

<style>
  .canvas {
    @apply m-12 flex-1 justify-center;
  }

  .header {
    @apply font-normal text-2xl tracking-wide;
  }

  .component-container {
    @apply m-12;
  }
</style>
