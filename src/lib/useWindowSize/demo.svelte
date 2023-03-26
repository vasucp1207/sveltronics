<script>
  import { usedWindowSize } from "./index";

  let { width, height } = usedWindowSize();
</script>

<div class="m-5">
  <p>Window width: {$width}</p>
  <p>Window height: {$height}</p>
</div>