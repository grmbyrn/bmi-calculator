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
	}

	h3 {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	p {
		color: #5e6e85;
	}
</style>
