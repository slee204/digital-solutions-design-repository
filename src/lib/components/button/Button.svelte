<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "svelte-awesome/components/Icon";
  import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

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
      <div
        class={["icon", `${primary ? "icon-primary" : "label-secondary"}`].join(
          " "
        )}
      >
        <Icon data={faArrowAltCircleUp} scale="2" />
      </div>
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

  .icon {
    @apply text-lg mr-2;
  }

  .icon-primary {
    @apply text-white;
  }

  .icon-secondary {
    @apply text-teal-900;
  }
</style>
