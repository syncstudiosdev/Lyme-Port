# LyMe — Portfolio

A responsive, dependency-free portfolio site built with plain HTML, CSS, and JavaScript. It is designed to be hosted as a static site; no build step or private API credentials are required.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. Local media works when served over localhost; publish all project media files alongside the site.

## Add work cards

Open `portfolio.js` and find `portfolioConfig.projects`. Copy a project object in the array, paste it as a new entry, and replace its values. Separate project objects with commas, save, then refresh.

Development and Management use matching game cards with a wide banner and optional profile picture. Assets are video showcases: the video plays muted in a larger banner preview, with the project title and a larger Watch button over it. Asset cards do not use banner images or profile pictures.

- `category` — `"development"` for games you contributed to as a developer, `"management"` for games you helped manage, `"own"` for games or studios you own, or `"development-assets"` for videos showcasing assets or development work. These appear as **Development**, **Management**, **Own**, and **Assets** on the page.
- Projects are randomized on each page load; category filters keep that randomized order.
- `title` — game, group, or studio name.
- `role` — your role on the project, such as `"Manager"` or `"Scripter"`.
- `status` — optional lifecycle status: `"active"` or `"retired"`. This is shown in its own badge.
- `releaseStatus` — optional release stage: `"in-dev"`, `"released"`, or `"unreleased"`. This is shown beside the lifecycle status. `"in-development"` is accepted as an alias for `"in-dev"`.
- `banner` — optional wide game-card image. If omitted, `image` is used as a backwards-compatible banner; if neither exists, the abstract artwork fallback is shown. Assets cards use their video as the banner instead.
- `pfp` — optional square game or studio icon displayed over the banner. If omitted or unavailable on game cards, the card shows initials. Assets cards do not display a profile picture.
- `technology` — optional category label, for example `"Roblox · Luau"`. If omitted, the card displays its Development, Management, or Own category.
- `peakCcu`, `discordMembers`, `currentCcu`, `totalVisits` — optional values. Use accurate numbers (the card formats numeric values compactly, e.g. `12500` as `12.5K`), or leave empty to hide a metric. These values are entered manually and are not fetched live.
- `link` — optional public game or project link.
- `discordLink` — optional Discord invite link.
- `video` — optional YouTube URL, direct video URL, or local video path; adds a video button to the banner.
- `image` — optional existing project image, used as a banner when `banner` is not set.

For example, add an asset entry like this and replace the paths and URL with your own:

```js
{
  category: "development-assets",
  title: "Custom UI System",
  role: "Creator",
  banner: "assets/ui-system-banner.png",
  video: "https://youtu.be/your-video-id"
}
```

Add a `video` URL or local video path to each asset entry to show its Watch button. The same video field works for other categories if needed.

The Everything filter shows two projects initially. Visitors can use **Show all projects** to expand the list or **Show fewer projects** to collapse it again. Each category filter, including Assets, shows all projects in that category. Project order is randomized on each page load. The included `vfx1.mp4` is configured as an Assets demo.

Put local images in an `images` folder beside `portfolio.js`, or use an image path that matches where the file is stored. Only include statuses and metrics you can verify. The existing Oathbound entry keeps its name, Manager role, supplied image, and configured status; unknown player counts are not filled in.

## Show current collaborations

In `portfolio.js`, `portfolioConfig.collaborations` is prefilled with Tidebound and its `tidebound.png` logo. Copy the Tidebound entry and change its name and logo path to add another studio:

```js
{ name: "Tidebound", logo: "tidebound.png" },
{ name: "Another studio", logo: "another-studio.png", link: "https://example.com" },
```

`name` is required; `logo` and `link` are optional. Put logo files beside `portfolio.js` or use the correct relative path, and separate entries with commas. Only list current collaborations you have permission to share.

## Profile images and Discord links

The profile card uses static local images configured with `profileAvatarImage` and `profileBannerImage` in `portfolio.js`. Keep those image files beside `portfolio.js` or update the values to their relative paths.

Set `discordUserId` to the numeric Discord user ID to link the navigation profile and contact button to that Discord profile. The site does not fetch Discord profile data.

## Customize

The page content and responsive layout live in `index.html` and `styles.css`; no framework or package install is needed. Add only social/contact links that you want to publish and can verify.
