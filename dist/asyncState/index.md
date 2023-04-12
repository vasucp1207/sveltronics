# asyncState

The `asyncState` function is used to simplify the process of handling asynchronous state. It returns an object containing the current state of the async operation, which includes a `state` string that can be `"idle"`, `"resolved"` or `"rejected"` a value property that contains the response data if the request succeeded, and a isLoading property that is true while the request is in progress.

## Usage
```js
<script>
  import { onMount } from 'svelte';
  import { asyncState } from 'sveltronics';
  import { writable } from 'svelte/store';

  let state, value;
  let isLoading = writable(true);

  onMount(async () => {
    ({ state, value, isLoading } = await asyncState(
      fetch('https://jsonplaceholder.typicode.com/todos/1')
    ))
  })
 
</script>

<div>
  {#if $isLoading}
    <div>Loding...</div>
  {:else}
    <div>{$value}</div>
  {/if}
</div>
```