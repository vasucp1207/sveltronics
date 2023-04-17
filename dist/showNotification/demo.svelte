<script>
  import { showNotification } from "./index";

  let title = "Sveltronics";
  let body = "Easy to use utilities";
</script>

<button
  on:click={() => showNotification(title, body)}
  class="m-5 bg-[#ff3e00] p-1 text-white rounded border-2 w-20 h-10"
>
  notified
</button>
