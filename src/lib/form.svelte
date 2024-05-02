<script lang="ts">
    import { todoListStore } from './store';

    let todoName = "";

    function handleSubmit() {
        $todoListStore = [
            ...$todoListStore,
            {
                id: (Math.random() + 1).toString(36).substring(7),
                name: todoName,
                done: false,
            },
        ];
        todoName = "";
    }
</script>

<form class="space-x-3" on:submit|preventDefault={handleSubmit}>
    <input bind:value={todoName} class="px-2 py-1 bg-slate-700" />
    <button type="submit" class="border-2 p-1">
        <!-- svelte-ignore a11y-distracting-elements -->
        <marquee>crear</marquee>
    </button>
</form>
