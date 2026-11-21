exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=60, s-maxage=60",
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
    const discordImageUrl = (asset, hash, size) => {
      if (!hash) return null;
      const animated = hash.startsWith("a_");
      const format = animated ? "webp" : "png";
      const animationParameter = animated ? "&animated=true" : "";
      return `https://cdn.discordapp.com/${asset}/${user.id}/${hash}.${format}?size=${size}${animationParameter}`;
    };
    const avatarUrl = discordImageUrl("avatars", user.avatar, 256);
    const bannerUrl = discordImageUrl("banners", user.banner, 1024);

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
