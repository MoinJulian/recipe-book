<h1>Create a new Recipe</h1>

<form action="" method="POST" autocomplete="true">
	<label for="title">Please enter the title of your Recipe:</label>
	<input type="text" name="title" id="title" />
	<label for="describtion"
		>Please add a describition for example the ingrediens or the steps you need to do:</label
	>
	<textarea name="describtion" id="describtion" cols="30" rows="10" />
	<br />
	<button>Add to recipe book</button>
</form>

<style>
	textarea {
		background: none;
		color: var(--font-color);
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
</style>
