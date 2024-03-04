<script lang="ts">
	export let name: string;
	export let value: string;
	export let id: string;
	export let checked: boolean = false;
	export let label: string;

	export let selectedValue: string;
</script>

<div>
	<input type="radio" {name} {value} {id} {checked} bind:group={selectedValue} />
	<label for={id}>
		<span>{label}</span>
	</label>
</div>

<style>
	label {
		font-weight: bold;
		color: #253347;
	}

	input[type='radio'] {
		width: 30px;
		border-width: 1px;
	}
</style>
