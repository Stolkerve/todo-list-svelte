<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import type ITodo from "./ITodo";
    import { todoListStore } from "./store";

    export let todo: ITodo;
    export let index: number;

    function deleteTodo() {
        $todoListStore = $todoListStore.filter((t) => t.id != todo.id);
    }

    function updateCheck() {
        $todoListStore[index].done = !$todoListStore[index].done;
        $todoListStore[index] = $todoListStore[index];
    }
</script>

<li class="border-b-2 rounded-lg relative" transition:fly|local={{ y: 200 }}>
    {#if todo.done}
        <div
            class="absolute w-full h-full bg-blue-500 -z-10 rounded-lg"
            transition:fade
        />
    {/if}

    <div class="px-2 py-1 flex justify-between items-center space-x-4">
        <div class="flex items-center space-x-1">
            <input
                value={todo.done}
                checked={todo.done}
                type="checkbox"
                on:click={updateCheck}
            />
            <div>
                <p class="text-lg">{todo.name}</p>
            </div>
        </div>
        <button
            class="border-2 text-sm bg-red-500 h-min"
            on:click={() => deleteTodo()}
        >
            <!-- svelte-ignore a11y-distracting-elements -->
            <marquee>Eliminar</marquee>
        </button>
    </div>
</li>
