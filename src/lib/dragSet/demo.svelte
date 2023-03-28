<script>
  import { setDrag } from './index';

</script>

<div class="h-[100vh] w-[100vw] flex justify-center items-center">
  <div use:setDrag class="m-5 h-[100px] w-[100px] bg-[#ff3e00] border-2 border-black 
    rounded text-white flex justify-center items-center cursor-grab"
  >
    Drag Me
  </div>
</div>
