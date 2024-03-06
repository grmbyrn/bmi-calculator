<div class="results-info">
	<div>
		<img src="./assets/images/image-man-eating.webp" alt="man eating" />
	</div>
	<div>
		<div class="line">
			<img src="./assets/images/pattern-curved-line-left.svg" alt="line" />
		</div>
		<h2>What your BMI result means</h2>
		<p>
			A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may
			lower your chances of experiencing health issues later on, such as obesity and type 2
			diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample
			fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30
			minutes daily for five days a week.
		</p>
	</div>
</div>

<style>
	.line {
		display: none;
	}

	.results-info {
		padding-inline: 1.5rem;
	}

	.results-info h2 {
		margin-top: 3rem;
		font-size: 2rem;
	}

	.results-info p {
		color: #5e6e85;
		margin-top: 2rem;
	}

	@media screen and (min-width: 768px) {
		.results-info {
			display: flex;
			align-items: center;
			overflow: hidden;
		}

		.results-info div {
			flex: 1;
		}

		.results-info img {
			margin-left: -20%;
		}
	}

	@media screen and (min-width: 1276px) {
		.results-info {
			padding-inline: 8.75rem;
		}

		.line {
			display: flex;
			justify-content: flex-end;
			padding-right: rem;
		}

		.results-info {
			gap: 8.1875rem;
			margin-top: 4.0625rem;
		}

		.results-info h2 {
			font-size: 3rem;
		}

		.results-info img {
			margin-left: 0%;
		}
	}
</style>
