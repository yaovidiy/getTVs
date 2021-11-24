<script>
	import { slide } from 'svelte/transition'
	export let data;
	let showMore = false;
	const keyNames = {
		inch: 'Діагональ екрана',
		resolution: 'Роздільна здатність',
		size: 'Розміри без підставки',
		features: 'Функції',
		ports: `Роз'єми (порти)`,
		complectation: 'Комплект постачання',
	}
</script>

<div class="accordion">
	<div class="accordion-head">
		<div class="accordion-head_title">
			<h1><a href={data.url} target="_blank">{data.name} | {data.price}</a></h1>
		</div>
		<div class="accordion-head_img">
			<img src={data.image} alt={data.name} width="100%" />
		</div>
		<div class="accordion-head_more" on:click={() => showMore = !showMore}>
			<button>
				Показати всю інформацію
			</button> 
		</div>
	</div>
	{#if showMore}
	<div transition:slide="{{duration: 500}}" class="accordion-body">
		{#each Object.entries(data) as [key, value]}
			{#if keyNames[key]}
			<div class="accordion-body_group">
				<div class="accordion-body_label">
					{keyNames[key]}
				</div>
				<div class="accordion-body_value">
					{#if typeof value === 'object'}
						{#each value as val}
							<p>
								{val}	
							</p>	
						{/each}
					{:else}
						{value}
					{/if}
					
				</div>
			</div>
			{/if}
		{/each}
	</div>
	{/if}
</div>

<style>
	.accordion {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 90%;
		margin: 20px 0;
		border-bottom: 1px solid black;
		margin: 0 auto;
	}
	
	.accordion-head {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items:center;
		width: 100%;
	}
	
	.accordion-head_more {
		margin: 20px 0;
	}
	
	.accordion-head_more button {
		cursor: pointer;
	}
	
	.accordion-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	
	.accordion-body_group {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 10px;
		border-bottom: 1px solid black;
	}
	.accordion-body_label {
		width: 30%;
		border-right: 1px solid black;
	}
	.accordion-body_value {
		width: 70%;
		padding-left: 10px;
	}
	
	.accordion-body_group:last-child {
		border: none;
	}
</style>