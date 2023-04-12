# scrollToBottom

`scrollToBottom` is a custom Svelte function that helps to scroll to the bottom of a container element.

## Usage

```js
<script>
  import { scrollToBottom } from "sveltronics";


  let id = 0;
  let todos = [
    { id: id++, text: "svelte is love 1" },
    { id: id++, text: "svelte is love 2" },
    { id: id++, text: "svelte is love 3" },
    { id: id++, text: "svelte is love 4" },
    { id: id++, text: "svelte is love 5" },
    { id: id++, text: "svelte is love 6" },
    { id: id++, text: "svelte is love 7" },
  ];
  let text = "";

  function addTodo() {
    todos.push({ id: id++, text: text });
    todos = todos;
    text = "";
  }
</script>

<div>
  <div>
    <div>
      <input bind:value={text} />
      <button on:click={addTodo}>Add Todo</button>
    </div>

    <div use:scrollToBottom>
      {#each todos as todo (todo.id)}
        <div>{todo.text}</div>
      {/each}
    </div>
  </div>
</div>

```