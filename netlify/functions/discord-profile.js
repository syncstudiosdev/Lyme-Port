const DISCORD_USER_ID = "1270007167541575854";

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers: { Allow: "GET", "Cache-Control": "no-store" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const token = process.env.DISCORD_API_TOKEN;
  if (!token) {
    console.error("Missing DISCORD_API_TOKEN environment variable.");
    return {
      statusCode: 500,
      headers: { "Cache-Control": "no-store" },
      body: JSON.stringify({ error: "Discord profile service is not configured" }),
    };
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${DISCORD_USER_ID}`, {
      headers: {
        Authorization: `Bot ${token}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Discord API request failed (${response.status}).`);
      return {
        statusCode: 502,
        headers: { "Cache-Control": "no-store" },
        body: JSON.stringify({ error: "Discord profile could not be loaded" }),
      };
    }

    const profile = await response.json();
    return {
      statusCode: 200,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: profile.id,
        username: profile.username,
        global_name: profile.global_name,
        avatar: profile.avatar,
        banner: profile.banner,
        avatar_decoration_data: profile.avatar_decoration_data,
      }),
    };
  } catch (error) {
    console.error("Discord profile request failed.", error);
    return {
      statusCode: 502,
      headers: { "Cache-Control": "no-store" },
      body: JSON.stringify({ error: "Discord profile could not be loaded" }),
    };
  }
};
