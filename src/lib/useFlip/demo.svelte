<script>
  import { flip } from "./index";
  
</script>

<div
  use:flip
  class="flip m-32 rounded h-80 w-60 border-2 text-white flex justify-center items-center"
>
  <div class="content">
    <div class="front">
      <img
        class="h-[100%] object-cover"
        src="https://tse1.mm.bing.net/th?id=OIP.VRFtOMu9MHIS-41nstIxJgHaE8&pid=Api&P=0"
        alt="img"
      />
    </div>
    <div class="back flex justify-center p-2">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat ex
        officia illum aspernatur id impedit labore quos vitae. Cumque ea fugit
        harum, aliquid dolores voluptatem pariatur odit obcaecati non!
      </div>
    </div>
  </div>
</div>
