import { v4 as uuidv4 } from 'uuid';
import { User_Model } from '$lib/server/models';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		const email = event.cookies.get('email');
		const data = await event.request.formData();
		const title = data.get('title') as string;
		const describtion = data.get('describtion') as string;

		try {
			// Find the user
			const user = await User_Model.findOne({ 'user.email': email });

			if (!user) {
				return {
					status: 404,
					body: JSON.stringify({ error: 'User not found' })
				};
			}

			console.log('describtion:', describtion);

			const recipeID = uuidv4();

			const today = new Date();
			const formattedDate = today.toISOString(); // Use ISO format for date

			user.recipe.push({
				title: title,
				describtion: describtion,
				createdAt: formattedDate,
				publishedAt: formattedDate,
				updatedAt: formattedDate,
				id: recipeID
			});

			// Save the updated user
			await user.save();

			return {
				status: 200,
				body: JSON.stringify({ message: 'Recipe saved successfully' })
			};
		} catch (error) {
			console.error(error);
			return {
				status: 500,
				body: JSON.stringify({ error: 'Error saving recipe' })
			};
		}
	}
};
