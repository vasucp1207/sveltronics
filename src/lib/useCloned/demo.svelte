<script>
  import { useCloned } from "./index";

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