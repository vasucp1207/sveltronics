<script>
  import { pinch } from "./index";

</script>

<div class="flex flex-col items-center justify-center h-96">
  <div 
    use:pinch
    class="h-[100px] w-[100px] bg-[#ff3e00] border-2 rounded text-white flex 
    justify-center items-center cursor-grab"
  >
    Pinch Me
  </div>
</div>
