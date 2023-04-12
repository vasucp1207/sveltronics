# useSessionStorage

Reactive `SessionStorage` it provides an easy way to store and retrieve data from the browser's session storage.

## Usage

```js
<script>
  import { useSessionStorage } from "./index";

  const count = useSessionStorage('count', 0);

</script>

<div >
  <p>{$count}</p>
  <button
    on:click={() => count.update(val => val + 1)}
  >
    Increase
  </button>
  <button
    on:click={() => count.set(0)}
  >
    Reset
  </button>
</div>
```