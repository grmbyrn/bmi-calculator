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

<style>
	.hero {
		display: flex;
		flex-direction: column;
		padding: 0 1.5rem;
		background-image: linear-gradient(to bottom right, #d6e6fe, #d6fcfe);
		border-radius: 0px 0px 2rem 2rem;
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
		margin-top: 1.5rem;
	}

	.hero-para {
		color: #5e6e85;
		padding-bottom: 217px;
	}

	@media screen and (min-width: 768px) {
		.hero {
			padding-inline: 3rem;
			height: 640px;
		}

		.hero-heading {
			margin-top: 2.5rem;
			padding-inline: 2.6875rem;
		}
	}

	@media screen and (min-width: 1276px) {
		.hero-heading {
			font-size: 4rem;
			color: #253347;
			margin-top: 1.5rem;
		}
	}
</style>
