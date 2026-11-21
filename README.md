# LyMe - Portfolio

A responsive, dependency-free portfolio site built with plain HTML, CSS, and JavaScript. It is designed to be hosted as a static site; no build step or private API credentials are required.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. Local media works when served over localhost; publish all project media files alongside the site.

Page loads and navigation between pages use a short transition featuring the profile picture; it is disabled when reduced motion is enabled in the visitor's system settings.

The home page is arranged as **Home**, **About me**, **What I do**, **Work**, and **Contact**. The Discord banner is used for the home hero when available; the `--hero-banner-image` URL near the top of `styles.css` is its fallback. The dark overlay keeps the text readable.

The warm gold accents (`#f4c462` and `#fdedb0`) and dark background are controlled by the color variables near the top of `styles.css`.

## Add work cards

Open `portfolio.js` and find `portfolioConfig.projects`. Copy a project object in the array, paste it as a new entry, and replace its values. Separate project objects with commas, save, then refresh.

Projects are grouped into **Games**, **Studios & Discords**, and **Other**. Cards show their **Management**, **Producer**, or **Ownership** category. The home page shows the featured projects, while `work.html` lists every project. Video showcases can play muted in a larger banner preview, with a Watch button over it.

- `displayGroup` - `"game"` for a game card, `"studio"` for a Studios & Discords card, or `"other"` for a website or community that doesn't fit those groups. Other cards omit game metrics.
- `category` - `"management"` for projects you helped manage, `"producer"` for projects you produce, or `"ownership"` for games or studios you own. The matching category appears on each card; studio entries may omit it.
- `featured` - set to `true` to show the project on the home page.
- `featuredOrder` - optional number to set the order of featured projects on the home page.
- `tags` - optional array of extra labels to show on the card, e.g. `["Studio", "Discord"]`.
- Projects on `work.html` are randomized on each page load; featured projects keep their configured order.
- `title` - game, group, or studio name.
- `role` - your role on the project, such as `"Manager"` or `"Scripter"`.
- `status` - optional lifecycle status: `"active"` or `"retired"`. This is shown in its own badge.
- `releaseStatus` - optional release stage: `"in-dev"` or `"released"`. This is shown beside the lifecycle status. `"in-development"` is accepted as an alias for `"in-dev"`.
- `banner` - optional wide game-card image. If omitted, `image` is used as a backwards-compatible banner; if neither exists, the abstract artwork fallback is shown.
- `pfp` - optional square studio icon displayed over the banner. If omitted or unavailable, the card shows initials.
- `peakCcu`, `totalVisits` - optional values. Use accurate numbers (the card formats numeric values compactly, e.g. `12500` as `12.5K`); empty values display **In Dev**. These values are entered manually and are not fetched live.
- `link` - optional public game or project link. Roblox game links are labeled **Play on Roblox**, studio websites **Visit website**, and YouTube links **View channel**.
- `discordLink` - optional Discord invite link.
- `discordLabel` - optional non-clickable label shown instead of a Discord invite button when `discordLink` is empty.
- `video` - optional YouTube URL, direct video URL, or local video path; adds a video button to the banner.
- `videoShowcase` - set to `true` to use the video as the banner preview and show the larger showcase layout.
- `image` - optional existing project image, used as a banner when `banner` is not set.

For example, add a video showcase like this and replace the paths and URL with your own:

```js
{
  displayGroup: "game",
  category: "producer",
  title: "Custom UI System",
  role: "Creator",
  banner: "assets/ui-system-banner.png",
  video: "https://youtu.be/your-video-id",
  videoShowcase: true
}
```

Add a `video` URL or local video path to show a Watch button. The same video field works for other categories if needed.

The home page shows no more than two featured studio cards; all studio and Discord cards appear on `work.html`. The **View all work** link opens `work.html` with every project.

Put local images in an `images` folder beside `portfolio.js`, or use an image path that matches where the file is stored. Only include statuses and metrics you can verify. The existing Oathbound entry keeps its name, Manager role, supplied image, and configured status; unknown player counts are not filled in.

## Add a studio or Discord

In `portfolio.js`, add an object to `portfolioConfig.projects` for each studio or Discord. Copy one of the `displayGroup: "studio"` entries (such as SDS or SNC) and set its details:

```js
{
  displayGroup: "studio",
  featured: true,
  featuredOrder: 4,
  title: "Studio name",
  banner: "studio-banner.png",
  pfp: "studio-logo.png",
  tags: ["Studio", "Discord"],
  link: "https://example.com",
  discordLink: "https://discord.gg/example",
},
```

`title` is required. `banner` is the wide card image; `pfp` is the square logo. `tags`, `link`, and `discordLink` are optional. Set `featured: true` and a `featuredOrder` to make it eligible for Home; only the first two featured studio cards are shown there. All studio cards remain on the Work page. Put image files beside `portfolio.js` or use the correct relative path, and separate entries with commas.

## Profile images and links

The avatar and banner are fetched through the Netlify Discord profile function. Set `DISCORD_API_TOKEN` in Netlify's environment variables, and keep `discordUserId` set in `portfolio.js`. The API token is never sent to the browser. The Discord avatar is used in the navigation, contact profile, and page transition animation, with `pfp.jpg` as a fallback. Discord's banner is also used as the home hero background when available. The site samples one accent color from the avatar and two from the banner, then harmonizes them for the site's color theme.

Set `discordUserId` in `portfolio.js` to link the navigation profile and contact button to your Discord profile and fetch its avatar and banner through Netlify.

## Customize

The page content and responsive layout live in `index.html` and `styles.css`; no framework or package install is needed. Add only social/contact links that you want to publish and can verify.
