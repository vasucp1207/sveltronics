<script>
  import { onMount } from 'svelte';
  import { asyncState } from './index';
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
