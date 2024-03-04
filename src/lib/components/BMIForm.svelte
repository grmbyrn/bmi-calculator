<script lang="ts">
	import type { Unit } from '../utils/types.ts';
	import { roundToNthDecimal } from '../utils/utils';
	import BmiOutput from './form-components/BMIOutput.svelte';
	import NumericInput from './form-components/NumericInput.svelte';
	import RadioButton from './form-components/RadioButton.svelte';

	const STONE: number = 6.35029318;
	const POUNDS_IN_STONE: number = 14;

	const FOOT: number = 30.48;
	const INCHES_IN_FEET: number = 12;

	let unit: Unit = 'metric';
	let centimetres: number = 0;
	let kilograms: number = 0;

	let feet: number = 0;
	let inches: number = 0;
	let stones: number = 0;
	let pounds: number = 0;

	function convertCentimetres() {
		const cmToFeet: number = roundToNthDecimal(centimetres / FOOT);
		feet = Math.floor(cmToFeet);
		inches = Math.round((cmToFeet - feet) * INCHES_IN_FEET);
	}

	function convertKilograms() {
		const kgToStones: number = roundToNthDecimal(kilograms / STONE);
		stones = Math.floor(kgToStones);
		pounds = Math.round((kgToStones - stones) * POUNDS_IN_STONE);
	}

	function convertFeetAndInches() {
		const inchesToFeet: number = roundToNthDecimal(inches / POUNDS_IN_STONE);
		centimetres = Math.round((feet + inchesToFeet) * FOOT);
	}

	function convertStonesAndPounds() {
		const poundsToStone: number = roundToNthDecimal(pounds / POUNDS_IN_STONE);
		kilograms = Math.round((stones + poundsToStone) * STONE);
	}
</script>

<form>
	<p class="form-heading">Enter your details below</p>

	<fieldset class="even-columns">
		<RadioButton
			name="measurement-unit"
			id="metric"
			value="metric"
			checked={unit === 'metric'}
			label="Metric"
			bind:selectedValue={unit}
		/>
		<RadioButton
			name="measurement-unit"
			id="imperial"
			value="imperial"
			checked={unit === 'imperial'}
			label="Imperial"
			bind:selectedValue={unit}
		/>
	</fieldset>

	<div
		class="even-columns-fluid"
		style={unit === 'metric' ? '--fluid-size: 12.5rem' : '--fluid-size: 1fr'}
	>
		<fieldset
			class="even-columns-fluid"
			style={unit === 'metric' ? '--fluid-size: 12.5rem' : '--fluid-size: 1fr;'}
		>
			<legend>Height</legend>
			<div class={unit === 'metric' ? '' : 'even-columns'}>
				{#if unit === 'metric'}
					<NumericInput
						label="Centimetres"
						id="height-cm"
						name="height-cm"
						max={300}
						bind:value={centimetres}
						unitShortcut="cm"
						on:input={convertCentimetres}
					/>
				{:else}
					<NumericInput
						label="Feet"
						id="height-ft"
						name="height-ft"
						max={10}
						bind:value={feet}
						unitShortcut="ft"
						on:input={convertFeetAndInches}
					/>
					<NumericInput
						label="Inches"
						id="height-in"
						name="height-in"
						max={11}
						bind:value={inches}
						unitShortcut="in"
						on:input={convertFeetAndInches}
					/>
				{/if}
			</div>
		</fieldset>
		<fieldset>
			<legend>Weight</legend>
			<div class={unit === 'metric' ? '' : 'even-columns'}>
				{#if unit === 'metric'}
					<NumericInput
						label="Kilograms"
						id="weight-kg"
						name="weight-kg"
						max={1000}
						bind:value={kilograms}
						unitShortcut="kg"
						on:input={convertKilograms}
					/>
				{:else}
					<NumericInput
						label="Stones"
						id="weight-st"
						name="weight-in"
						max={150}
						bind:value={stones}
						unitShortcut="st"
						on:input={convertStonesAndPounds}
					/>
					<NumericInput
						label="Pounds"
						id="weight-lbs"
						name="weight-in"
						max={13}
						bind:value={pounds}
						unitShortcut="lbs"
						on:input={convertStonesAndPounds}
					/>
				{/if}
			</div>
		</fieldset>
	</div>

	<BmiOutput kilograms={kilograms || 0} centimetres={centimetres || 0} />
</form>

<style>
	form {
		padding-inline: 1.5rem;
	}

	.form-heading {
		font-size: 1.5rem;
		padding-top: 1.5rem;
	}

	.even-columns {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1.5rem;
		padding-left: 0;
	}

	fieldset {
		border: none;
		display: flex;
	}
</style>
