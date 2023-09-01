export const email_regexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

export const one_day = 60 * 60 * 24;

export const cookie_options = {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
  path: "/",
  maxAge: one_day,
} as const;
