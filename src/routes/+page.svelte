<script lang="ts">
	import BmiForm from '$lib/components/BMIForm.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ResultsMean from '$lib/components/ResultsMean.svelte';
	import AdviceCard from '$lib/components/cards/AdviceCard.svelte';
	import LimitationCard from '$lib/components/cards/LimitationCard.svelte';
</script>

<div class="container">
	<Hero />
	<div class="bmi-container">
		<BmiForm />
	</div>

	<div>
		<ResultsMean />

		<div class="advice-container">
			<AdviceCard
				icon="./assets/images/icon-eating.svg"
				title="Healthy eating"
				text="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental
                clarity, and mood."
			/>
			<AdviceCard
				icon="./assets/images/icon-exercise.svg"
				title="Regular exercise"
				text="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.."
			/>
			<AdviceCard
				icon="./assets/images/icon-sleep.svg"
				title="Adequate sleep"
				text="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
			/>
		</div>

		<div class="limitation-container">
			<h2>Limitations of BMI</h2>
			<p>
				Although BMI is often a practical indicator of healthy weight, it is not suited for every
				person. Specific groups should carefully consider their BMI outcomes, and in certain cases,
				the measurement may not be beneficial to use.
			</p>
			<div class="limitation-container-cards">
				<div class="limitation-container-cards-1">
					<div>
						<LimitationCard
							icon="./assets/images/icon-gender.svg"
							title="Gender"
							text="The development and body fat composition of girls and boys vary with age. Consequently, a
                            child's age and gender are considered when evaluating their BMI."
						/>
					</div>
					<div>
						<LimitationCard
							icon="./assets/images/icon-age.svg"
							title="Age"
							text="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate
                            body fat content."
						/>
					</div>
				</div>
				<div class="limitation-container-cards-2">
					<div>
						<LimitationCard
							icon="./assets/images/icon-muscle.svg"
							title="Muscle"
							text="BMI may misclassify muscular individuals as overweight or obese, as it doesn't
                            differentiate muscle from fat."
						/>
					</div>
					<div>
						<LimitationCard
							icon="./assets/images/icon-pregnancy.svg"
							title="Pregnancy"
							text="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy
                            pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
						/>
					</div>
				</div>
				<div class="limitation-container-cards-3">
					<LimitationCard
						icon="./assets/images/icon-race.svg"
						title="Race"
						text="Certain health concerns may affect individuals of some Black and Asian origins at lower
                        BMIs than others. To learn more, it is advised to discuss this with your GP or practice
                        nurse."
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		width: 23.438rem;
		background-color: #ffffff;
		display: block;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 6rem;
	}

	.bmi-container {
		margin-top: -50%;
		background-color: #ffffff;
		z-index: 1;
		margin-inline: 1.5rem;
		border-radius: 1rem;
	}

	.advice-container {
		padding-inline: 1.1875rem;
		margin-top: 4.43rem;
		background-image: linear-gradient(to right, rgba(214, 230, 254, 100), rgba(214, 252, 254, 0));
		padding-block: 1.5rem 4rem;
	}

	.limitation-container {
		margin-top: 4.5rem;
		padding-inline: 1.1875rem;
	}

	.limitation-container h2 {
		text-align: center;
		color: #253347;
		font-size: 2rem;
	}

	.limitation-container p {
		text-align: center;
		margin-top: 2rem;
		color: #5e6e85;
	}

	.limitation-container-cards {
		margin-top: 3.5rem;
	}

	@media screen and (min-width: 768px) {
		.container {
			width: 768px;
		}

		.bmi-container {
			margin-top: -40%;
		}

		.advice-container {
			padding: 3.75rem 2.5rem;
		}

		.limitation-container {
			margin-top: 6rem;
		}

		.limitation-container-cards {
			padding-inline: 2.4375;
		}

		.limitation-container-cards-1,
		.limitation-container-cards-2 {
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			padding: 2rem;
			gap: 1rem;
		}

		.limitation-container-cards-3 {
			display: flex;
			justify-content: center;
		}
	}
</style>
