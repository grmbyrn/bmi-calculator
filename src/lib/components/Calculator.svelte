<script lang="ts">
	let height: number = 0;
	let weight: number = 0;

	$: bmi = calculateBMI();

	const calculateBMI = (): number | null => {
		if (height && weight) {
			const heightInMetres: number = height / 100;
			return +(weight / (heightInMetres * heightInMetres)).toFixed(2);
		} else {
			return null;
		}
	};
</script>

<div class="container">
	<div class="bmi-buttons">
		<label>
			<input type="radio" name="unit" id="metricRadio" checked />
			<span class="checkmark">Metric</span>
		</label>
		<label>
			<input type="radio" name="unit" id="imperialRadio" />
			<span class="checkmark">Imperial</span>
		</label>
	</div>
	<div class="bmi-inputs">
		<div>
			<p>Height</p>
			<div>
				<input type="number" bind:value={height} />
				cm
			</div>
		</div>
		<div>
			<p>Weight</p>
			<div>
				<input type="number" bind:value={weight} />
				kg
			</div>
		</div>
	</div>
	<div class="bmi-results">
		<div class="bmi-results-score">
			<p>Your BMI is...</p>

			<h2>{bmi}</h2>
		</div>
		<div class="bmi-results-para">
			<p>
				Your BMI suggests you're <!-- add classification -->. Your ideal weight is between <!-- add range -->.
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		padding-inline: 1.5rem;
	}

	.bmi-buttons {
		display: flex;
		justify-content: space-between;
	}

	.bmi-results {
		background-image: linear-gradient(#345ff6, #345ff6);
		border-radius: 1rem;
		padding: 2rem;
		margin-top: 1.5rem;
		color: #ffffff;
	}

	.bmi-results-score p {
		font-weight: bold;
		font-size: 1rem;
	}

	.bmi-results-score h2 {
		font-size: 3rem;
		margin-top: 0.5rem;
		font-weight: 600;
	}

	.bmi-results-para {
		margin-top: 1.5rem;
	}

	.bmi-results-para p {
		font-size: 0.875rem;
	}
</style>
