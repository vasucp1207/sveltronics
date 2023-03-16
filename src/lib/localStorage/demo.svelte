<script>
  import { useLocalStorage } from "./index";

  const count = useLocalStorage('count', 0);

</script>

<p>{count}</p>
<button>Increase</button>