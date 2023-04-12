# infiniteScroll

Infinite scrolling of the element.

## Usage

```js
<script>
  import { infiniteScroll } from "sveltronics";

  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const loadMore = () => {
    items = [...items, ...Array.from({ length: 5 }).map((_, i) => items.length + i + 1)];
  }
</script>

<div use:infiniteScroll={loadMore}>
  {#each items as item}
    <div>{item}</div>
  {/each}
</div>
```