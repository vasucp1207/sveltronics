# useMouse

Reactive mouse position.

## Usage

```js
<script>
  import { useMouse } from "sveltronics";

  let { x, y } = useMouse();
</script>

<p>pos: {$x}, {$y}</p>
```