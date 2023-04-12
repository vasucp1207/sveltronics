# useCloned

Cloned an object value.

## Usage

```js
<script>
  import { useCloned } from "sveltronics";

  let user = {
    name: 'Mark',
    address: {
      country: 'US', 
    }
  }

  let cloneObj = useCloned(user);
</script>

<div>
  {JSON.stringify(cloneObj)}
</div>
```