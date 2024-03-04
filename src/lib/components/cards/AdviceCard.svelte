<script lang="ts">
	export let icon: string;
	export let title: string = '';
	export let text: string = '';
</script>

<article>
	<img src={icon} alt="card icon" />
	<div class="card-body">
		<h3>{title}</h3>
		<p>{text}</p>
	</div>
</article>

<style>
	img {
		margin-top: 2.5rem;
	}

	h3 {
		margin-top: 2rem;
	}
</style>
