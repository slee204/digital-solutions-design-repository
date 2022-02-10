<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "../icon/Icon.svelte";
  export let primary = false;
  export let hasIcon = false;
  export let label = "UPLOAD";

  const dispatch = createEventDispatcher();
  /**
   * Button click handler
   */
  function onClick(event) {
    dispatch("click", event);
  }
</script>

<button
  type="button"
  class={["base", `${primary ? "primary" : "secondary"}`].join(" ")}
  on:click={onClick}
>
  <div class="label-container">
    {#if hasIcon}
      <Icon
        class={["icon", `${primary ? "icon-primary" : "icon-secondary"}`].join(
          " "
        )}
        name="arrow-circle-up"
      />
    {/if}
    <span
      class={["label", `${primary ? "label-primary" : "label-secondary"}`].join(
        " "
      )}
    >
      {label}
    </span>
  </div>
</button>

<style>
  .base {
    @apply rounded-md w-44 h-14;
  }

  .primary {
    @apply bg-teal-900 shadow-lg border-0;
  }

  .secondary {
    @apply bg-transparent shadow-none border;
  }

  .label-container {
    @apply flex justify-evenly flex-row align-middle m-2;
  }

  .label {
    @apply font-normal text-2xl tracking-wide;
  }

  .label-primary {
    @apply text-white;
  }

  .label-secondary {
    @apply text-teal-900;
  }
</style>
