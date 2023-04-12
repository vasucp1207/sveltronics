# showNotification

The Web Notification interface that display desktop notifications to the user.

## Usage

```js
<script>
  import { showNotification } from "sveltronics";

  let title = "Svelte-use";
  let body = "Learn by doing";
</script>

<button
  on:click={() => showNotification(title, body)}
>
  notified
</button>
```