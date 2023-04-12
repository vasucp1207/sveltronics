<script>
  import { draggable, useLocalStorage, setDrag } from 'svelte-use-helpers';

  let like = useLocalStorage('like', 0);

</script>

<div class="relative flex items-center flex-col h-[100vh] mt-10">
  <div class="absolute -top-5 left-3 flex items-center text-xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="#f0f"
      class="bi bi-lightning"
      viewBox="0 0 16 16"
    >
      <path
        d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"
      />
    </svg>
    Sveltronics
  </div>

  <div
    class="flex gap-2 items-center absolute -top-7 right-5 w-16 h-12 cursor-pointer"
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <svg
      on:click={() => like.update(val => val + 1)}
      xmlns="http://www.w3.org/2000/svg"
      fill="#f093fb"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
    <div class="text-xl">{$like}</div>
  </div>

  <div class="name mt-10 text-7xl font-semibold">Sveltronics</div>
  <div class="text-2xl text-[#2c3d50]">
    Svelte utility functions for your project.
  </div>

  <div
    use:setDrag
    class="glowing-circle w-[200px] h-[200px] mt-12 mb-12 text-3xl flex justify-center
     cursor-pointer items-center rounded-[15px] text-[#f0f]"
  >
    Drag Me
  </div>

  <div class="flex gap-3">
    <button
      class="border-2 text-xl border-[#2c3d50] hover:border-[#ff3e00] rounded w-44 h-12"
      >Getting Started</button
    >
    <button
      class="border-2 text-xl border-[#2c3d50] hover:border-[#ff3e00] rounded w-44 h-12"
      >Github</button
    >
  </div>
</div>

<!-- Todo: add return types to the functions later on -->
<!-- onMount is very important === internal server error -->
<!-- #ff3e00 -->

<style lang="postcss">
  .name {
    background: -webkit-radial-gradient(#f093fb, #ff3e00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .glowing-circle {
    box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
      inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
      0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
  }
  button {
    background: -webkit-radial-gradient(#f093fb, #ff3e00);
    color: white;
  }
  div {
    /* height: 200vh; */
    /* width: 200vw; */
  }
</style>
