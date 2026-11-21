exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=300, s-maxage=300",
  };

  const userId = event.queryStringParameters?.id;
  if (!/^\d{17,20}$/.test(userId || "")) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid Discord user ID" }) };
  }

  const token = process.env.DISCORD_API_TOKEN;
  if (!token) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Discord API token is not configured" }) };
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${encodeURIComponent(userId)}`, {
      headers: {
        Authorization: `Bot ${token}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: "Unable to fetch Discord profile" }),
      };
    }

    const user = await response.json();
    const avatarUrl = user.avatar
      ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith("a_") ? "gif" : "png"}?size=256`
      : null;
    const bannerUrl = user.banner
      ? `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.${user.banner.startsWith("a_") ? "gif" : "png"}?size=1024`
      : null;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        username: user.username,
        displayName: user.global_name || user.username,
        avatarUrl,
        bannerUrl,
      }),
    };
  } catch (error) {
    return { statusCode: 502, headers, body: JSON.stringify({ error: "Discord API request failed" }) };
  }
};
