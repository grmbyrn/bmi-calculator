<script lang="ts">
	export let icon: string;
	export let title: string = '';
	export let text: string = '';
</script>

<article>
	<h3>
		<img src={icon} alt="icon" />
		<span>{title}</span>
	</h3>
	<p>{text}</p>
</article>

<style>
	article {
		box-shadow: 0px 10px 30px 10px rgba(143, 174, 207, 0.25);
		border-radius: 1rem;
		padding: 1.5rem;
		margin-bottom: 1rem;
		width: 20.4375rem;
		height: 10.5;
	}

	h3 {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	p {
		color: #5e6e85;
	}

	@media screen and (min-width: 768px) {
		article {
			width: 20.96875rem;
			height: 16rem;
		}
	}
</style>
