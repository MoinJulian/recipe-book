import { register_user } from "$lib/server/register";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const email = (data.get("email") as string)?.toLowerCase()?.trim();
    const password = data.get("password") as string;
    const verified_password = data.get("password_verify") as string;
    const name = (data.get("name") as string)?.trim();

    const user = { email, name };

    const { error } = await register_user(
      email,
      password,
      verified_password,
      name
    );

    if (error) {
      return fail(400, { error, user });
    } else {
      const message = "Registration successful! You can now login.";
      throw redirect(308, "/login");
    }
  },
};
