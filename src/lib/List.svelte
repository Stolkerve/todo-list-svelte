<script lang="ts">
  import Todo from "./Todo.svelte";
  import { todoListStore } from "./store";

  let search = "";

  $: list = $todoListStore.filter(t => t.name.match(search))
</script>

<div>
  <h1>Buscar</h1>
  <input bind:value={search} class="px-2 py-1 bg-slate-700" />
</div>

<ul class="p-2 space-y-2">
  {#each list as todo, index}
    <Todo {todo} {index}/>
  {/each}
</ul>
