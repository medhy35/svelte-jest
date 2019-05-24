<script>
	import fibonacci from './fibonacci.js';
	export let nbr = 1;

</script>

<style>
	h1 {
		color: purple;
	}
</style>

<input type="number" bind:value={nbr} min=0 max=13>
<input type="range" bind:value={nbr} placeholder="Enter nombre" min=0 max=13/>

<h1> le fibonacci de {nbr} est :{fibonacci(nbr)}</h1>
