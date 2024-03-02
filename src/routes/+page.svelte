<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<div class="container">
	<Hero />

	<img src="./assets/images/image-man-eating.webp" alt="man eating" />
	<h2>What your BMI result means</h2>
	<p>
		A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may
		lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes.
		Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and
		vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily
		for five days a week.
	</p>
	<img src="./assets/images/icon-eating.svg" alt="eating" />
	<h3>Healthy eating</h3>
	<p>
		Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental
		clarity, and mood.
	</p>
	<img src="./assets/images/icon-exercise.svg" alt="exercise" />
	<h3>Regular exercise</h3>
	<p>
		Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk,
		fostering wellness and longevity.
	</p>
	<img src="./assets/images/icon-sleep.svg" alt="sleep" />
	<h3>Adequate sleep</h3>
	<p>
		Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall
		restoration and rejuvenation.
	</p>

	<h2>Limitations of BMI</h2>
	<p>
		Although BMI is often a practical indicator of healthy weight, it is not suited for every
		person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the
		measurement may not be beneficial to use.
	</p>
	<div>
		<img src="./assets/images/icon-gender.svg" alt="gender" />
		<h3>Gender</h3>
		<div>
			The development and body fat composition of girls and boys vary with age. Consequently, a
			child's age and gender are considered when evaluating their BMI.
		</div>
	</div>
	<div>
		<img src="./assets/images/icon-age.svg" alt="age" />
		<h3>Age</h3>
		<div>
			In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body
			fat content.
		</div>
	</div>
	<div>
		<img src="./assets/images/icon-muscle.svg" alt="muscle" />
		<h3>Muscle</h3>
		<div>
			BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate
			muscle from fat.
		</div>
	</div>
	<div>
		<img src="./assets/images/icon-pregnancy.svg" alt="pregnancy" />
		<h3>Pregnancy</h3>
		<div>
			Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy
			pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
		</div>
	</div>
	<div>
		<img src="./assets/images/icon-race.svg" alt="race" />
		<h3>Race</h3>
		<div>
			Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs
			than others. To learn more, it is advised to discuss this with your GP or practice nurse.
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
	}
</style>
