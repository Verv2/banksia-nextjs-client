import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { code } = req.body;

  const form = new URLSearchParams();
  form.append("grant_type", "authorization_code");
  form.append("code", code);
  form.append(
    "client_id",
    "b0a7141b1575398935acd1cbfea08addafb317bf7ca114343358f1b235c0d720"
  );
  form.append(
    "client_secret",
    "e69068797e8b51194e213a9958ff0cefa7ed11461512192f36bcd84b8dc16797"
  );
  form.append("redirect_uri", "https://banksialondon.com");
  form.append("state", "random_state_string");

  try {
    const response = await fetch(
      "https://auth.arthuronline.co.uk/oauth/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: form,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    // Save token in cookie
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("arthur_token", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 3600,
      })
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
