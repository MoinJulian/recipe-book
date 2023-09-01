import { login_user } from "$lib/server/login";
import { fail, type Actions, redirect } from "@sveltejs/kit";
import { cookie_options } from "$lib/server/utils";

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const email = (data.get("email") as string)?.toLowerCase()?.trim();
    const password = data.get("password") as string;

    const user_data = await login_user(email, password);

    if ("error" in user_data) {
      return fail(400, { email, error: user_data.error });
    } else {
      const { token, user } = user_data;

      event.cookies.set("auth-token", token, cookie_options);
      event.cookies.set("email", user.email, cookie_options);
      event.cookies.set("name", user.name, cookie_options);

      throw redirect(308, "/dashboard");
      return { email, user };
    }
  },
};
