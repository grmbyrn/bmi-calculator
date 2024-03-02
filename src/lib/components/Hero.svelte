<script lang="ts">
	import BmiForm from './BMIForm.svelte';
</script>

<div class="hero">
	<div class="hero-img-container">
		<img src="./assets/images/logo.svg" class="hero-img" alt="logo" />
	</div>
	<div class="hero-container">
		<h1 class="hero-heading">Body Mass Index Calculator</h1>
		<p class="hero-para">
			Better understand your weight in relation to your height using our body mass index (BM)
			calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable
			starting point to evaluate your overall health and well-being.
		</p>
	</div>
</div>
<div class="bmi-container">
	<BmiForm />
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		padding: 0 1.5rem;
		background-image: linear-gradient(to bottom right, #d6e6fe, #d6fcfe);
	}

	.hero-img-container {
		display: flex;
		margin: 0 auto;
		padding-top: 2rem;
	}

	.hero-container {
		text-align: center;
	}

	.hero-heading {
		font-size: 48px;
		color: #253347;
	}

	.hero-para {
		color: #5e6e85;
		padding-bottom: 217px;
	}

	.bmi-container {
		margin-top: -40%;
		background-color: #ffffff;
		z-index: 1;
		margin-inline: 1.5rem;
		border-radius: 1rem;
	}
</style>
