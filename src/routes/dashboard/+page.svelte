<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Dashboard</h1>

<h2>Welcome {data.name}</h2>

<p>This is the site with all your recipies</p>
<p>You can create a new recipe here: <a href="/dashboard/create">Create</a></p>
