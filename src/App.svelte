<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import List from './lib/List.svelte';
    import Form from './lib/form.svelte';
  
</script>

<main class="flex flex-col items-center min-h-screen space-y-4">
  <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  <Form/>
  <List/>
</main>

<style>
  .logo {
    height: 8em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
