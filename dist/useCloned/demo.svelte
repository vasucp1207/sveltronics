<script>
  import { cloned } from "./index";

  let user = {
    name: 'Mark',
    address: {
      country: 'US', 
    }
  }

  let cloneObj = cloned(user);
</script>

<div>
  {cloneObj}
</div>