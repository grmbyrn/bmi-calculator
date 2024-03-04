<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { cubicOut } from 'svelte/easing';
	import { blur } from 'svelte/transition';

	export let label: string;
	export let value: number;
	export let name: string;
	export let id: string;
	export let step: number = 1;
	export let min: number = 0;
	export let max: number;

	export let unitShortcut: string;

	const dispatch = createEventDispatcher();

	function handleInput() {
		dispatch('input', { value });
	}
</script>

<div class="input-container">
	<input
		aria-label={label}
		type="number"
		{name}
		{id}
		bind:value
		{step}
		{min}
		{max}
		placeholder="0"
		in:blur={{ duration: 750, easing: cubicOut, amount: '1rem' }}
		on:input={handleInput}
	/>
	<span>{unitShortcut}</span>
</div>

<style>
	.input-container {
		display: flex;
		border: 1px solid #d8e2e7;
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		font-size: 1.5rem;
		width: 100%;
	}

	input {
		border: none;
	}

	span {
		color: #345ff6;
	}
</style>
