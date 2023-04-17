<script>
  import { keyStroke } from "./index";

</script>

<div class="m-5">Use keys to move this ball</div>
<div class="relative m-32 w-80 h-60 border-2">
  <div use:keyStroke={50} class="m-10 text-white h-10 w-10 bg-[#ff3e00] border-2 rounded-[100%]">
</div>
</div>