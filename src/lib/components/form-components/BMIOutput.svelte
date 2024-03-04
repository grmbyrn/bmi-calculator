<script lang="ts">
	import { roundToNthDecimal } from '../../utils/utils';

	export let kilograms: number = 0;
	export let centimetres: number = 0;

	const classifications = [
		{
			lowerBound: 0,
			upperBound: 18.49,
			name: 'underweight'
		},
		{
			lowerBound: 18.5,
			upperBound: 24.99,
			name: 'a healthy weight'
		},
		{
			lowerBound: 25,
			upperBound: 29.99,
			name: 'overweight'
		},
		{
			lowerBound: 30,
			name: 'obese'
		}
	];

	$: lowerHealthyWeight = roundToNthDecimal(18.5 * Math.pow(centimetres / 100, 2));
	$: upperHealthyWeight = roundToNthDecimal(24.9 * Math.pow(centimetres / 100, 2));
	$: BMI = roundToNthDecimal(kilograms / Math.pow(centimetres / 100, 2));
	$: classification = classifications
		.filter(
			(range) => BMI >= range.lowerBound && BMI <= (range.upperBound || Number.MAX_SAFE_INTEGER)
		)
		.at(0);
</script>

<output>
	{#if kilograms === 0 || centimetres === 0}
		<div class="heading">
			<h2 class="heading-kicker">Welcome!</h2>
			<p class="heading-para">Enter your height and weight and you'll see your BMI result here</p>
		</div>
	{:else}
		<div class="even-columns-fluid">
			<div class="even-columns-fluid-item">
				<p class="bmi-kicker">Your BMI is...</p>
				<p class="bmi-result">{BMI}</p>
			</div>
			<div class="even-columns-fluid-item">
				<p class="bmi-para">
					Your BMI suggests you're {classification?.name}. Your ideal weight is between
					<strong>{lowerHealthyWeight}kgs - {upperHealthyWeight}kgs</strong>
				</p>
			</div>
		</div>
	{/if}
</output>

<style>
	.heading,
	.even-columns-fluid {
		background-image: linear-gradient(#345ff6, #587dff);
		color: #ffffff;
		padding-inline: 2rem;
		border-radius: 1rem;
	}

	.heading-kicker,
	.bmi-kicker {
		font-weight: bold;
		padding-top: 2rem;
	}

	.bmi-result {
		font-size: 3rem;
		margin-top: 0.5rem;
	}

	.heading-para,
	.bmi-para {
		font-size: 0.875rem;
		padding-bottom: 2rem;
	}

	@media screen and (min-width: 768px) {
		.even-columns-fluid {
			display: flex;
			align-items: center;
			padding: 2rem;
			border-radius: 1rem 12rem 12rem 1rem;
			margin-top: 2rem;
		}

		.even-columns-fluid-item {
			flex: 1;
		}

		.bmi-kicker {
			padding-top: 0;
		}

		.bmi-para {
			padding-bottom: 0;
		}
	}
</style>
