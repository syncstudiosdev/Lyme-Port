const portfolioConfig = {
  // Used to link directly to the Discord profile.
  discordUserId: "1270007167541575854",
  // Optional: add a Discord bot token to fetch live profile data.
  // For a static site, set this in the hosting environment or via window.DISCORD_API_TOKEN.
  discordApiToken: (typeof window !== "undefined" && (window.DISCORD_API_TOKEN || window.discordApiToken || window.__DISCORD_API_TOKEN__)) || "",
  profileAvatarImage: "",
  profileBannerImage: "",
  collaborations: [
    // Copy this entry for each additional studio; logo and link are optional.
    { name: "SDS", logo: "SDS.png", link: "https://sushideluxe.gg/" },
    { name: "ACT2", logo: "act2.png", link: "https://www.act2studios.co/" },
    { name: "Aquartz", logo: "Aquartz.png", link: "" },
  ],
  projects: [
    // DEVELOPMENT TEMPLATE: copy this object, then replace the example values.
    
    {
      category: "own",
      title: "Ryft Entertainment",
      role: "Chief Executive Officer + Founder",
      status: "Active", // optional lifecycle status: "active" or "retired"
      releaseStatus: "", // optional release stage: "in-dev", "released", or "unreleased"
      banner: "ryftbanner.png",
      pfp: "ryft.png",
      technology: "",
      tags: ["Game Production", "Creative Direction", "Development"],
      description: "Building a creative studio identity around player-first experiences, polished execution, and long-term vision.",
      attribution: "Founder-led studio",
      peakCcu: "",
      discordMembers: "300+",
      currentCcu: "",
      totalVisits: "",
      link: "https://ryftentertainment.netlify.app/",
      discordLink: "https://discord.gg/MWZu7gMrg7",
    },

        {
      category: "own",
      title: "Slime : Origin",
      role: "Owner",
      status: "Active", // optional lifecycle status: "active" or "retired"
      releaseStatus: "In Dev", // optional release stage: "in-dev", "released", or "unreleased"
      banner: "slime.png",
      pfp: "slime.png",
      technology: "",
      tags: ["Project Management", "Creative Direction", "Community Management"],
      description: "A self-directed project focused on building community, gameplay direction, and a coherent player experience from the ground up.",
      attribution: "Independent project",
      peakCcu: "",
      discordMembers: "200+",
      currentCcu: "",
      totalVisits: "",
      link: "",
      discordLink: "https://discord.gg/KYDerHx588",

    },
    
    {
      category: "management",
      title: "Oathbound",
      role: "Manager",
      status: "Active",
      releaseStatus: "In Dev",
      banner: "oathboundbanner.png",
      pfp: "oathboundpfp.png",
      peakCcu: "",
      discordMembers: "150+",
      currentCcu: "",
      totalVisits: "",
      link: "",
      discordLink: "https://discord.gg/u4BpEerU6H"
    },

    {
      category: "management",
      title: "Wizardry",
      role: "Community Manager",
      status: "Active",
      releaseStatus: "In Dev",
      banner: "Wizardrybanner.jpg",
      pfp: "Wizardry.webp",
      peakCcu: "",
      discordMembers: "200+",
      currentCcu: "",
      totalVisits: "",
      link: "",
      discordLink: "https://discord.gg/qnJD8cjkE5"
    },

        {
      category: "management",
      title: "+1 Cut Grass Adventure",
      role: "Content Creator Collector",
      status: "Active",
      releaseStatus: "Released",
      banner: "+1cut.png",
      pfp: "+1cut.png",
      peakCcu: "13k+",
      discordMembers: "3k+",
      currentCcu: "4k+",
      totalVisits: "75m+",
      link: "https://www.roblox.com/games/90086669327265/1-Cut-Grass-Adventure",
      discordLink: "https://discord.gg/nN9aPzXcau"
    },

    {
      category: "management",
      title: "Veridian Sea",
      role: "Content Creator Manager",
      status: "Active",
      releaseStatus: "In Dev",
      banner: "vsbanner.png",
      pfp: "vspfp.png",
      peakCcu: "",
      discordMembers: "500+",
      currentCcu: "",
      totalVisits: "",
      link: "",
      discordLink: "https://discord.gg/nFXRUDYcKf"
    },

    {
      category: "management",
      title: "Masked.bio",
      role: "Platform Coordinator",
      status: "Active",
      releaseStatus: "In Dev",
      banner: "maskedbiobanner.gif",
      pfp: "maskedbio.webp",
      discordMembers: "150+",
      link: "https://masked.bio/",
      discordLink: "https://discord.gg/A2hSqQhj28"
    },

    {
      category: "management",
      title: "EX Gang",
      role: "Server Manager",
      status: "Active",
      banner: "exgangbanner.png",
      pfp: "exgangpfp.png",
      discordMembers: "40k+",
      link: "https://www.youtube.com/channel/UCLLnijhbtcfSDWgI_IQx5tw",
      discordLink: "https://discord.gg/k29qYq662w"
    },

    {
      category: "management",
      title: "Ikari No Shisha",
      role: "Operator",
      status: "Active",
      banner: "ikaribanner.png",
      pfp: "ikari.gif",
      discordMembers: "25k+",
      link: "https://aotrcarry.com/",
      discordLink: "https://discord.gg/JM8d2ghhWs"
    },

    {
      category: "management",
      title: "Anime Imperial",
      role: "Assistant Manager",
      status: "Active",
      releaseStatus: "In Dev",
      banner: "aimpbanner.png",
      pfp: "aimppfp.png",
      peakCcu: "",
      discordMembers: "2.7k+",
      currentCcu: "",
      totalVisits: "",
      link: "",
      discordLink: "https://discord.gg/fuqUrvSFfA"
    },

    {
      category: "development-assets",
      title: "Basic VFX Pack",
      tags: ["VFX", "Development", "Creative Direction"],
      description: "A concise showcase of visual effects work and stylised motion design suited to Roblox and game-focused creative pipelines.",
      banner: "ryftbanner.png",
      video: "vfx1.mp4"
    },

  ],
};

const projectStatusLabels = {
  active: "Active",
  retired: "Retired",
};

const projectReleaseLabels = {
  "in-dev": "In Dev",
  "in-development": "In Dev",
  released: "Released",
  unreleased: "Unreleased",
};

const projectCategories = {
  development: "Development",
  management: "Management",
  "development-assets": "Assets",
  own: "Own",
};

const randomizedProjects = [...portfolioConfig.projects];
for (let index = randomizedProjects.length - 1; index > 0; index -= 1) {
  const swapIndex = Math.floor(Math.random() * (index + 1));
  [randomizedProjects[index], randomizedProjects[swapIndex]] = [randomizedProjects[swapIndex], randomizedProjects[index]];
}

const projectGrid = document.querySelector("#project-grid");
const emptyWork = document.querySelector("#empty-work");
const projectListToggle = document.querySelector("#project-list-toggle");
const categoryButtons = [...document.querySelectorAll(".filter-button")];
const navLink = document.querySelector("#nav-discord-link");
const contactLink = document.querySelector("#contact-discord-link");
const videoModal = document.querySelector("#video-modal");
const videoFrame = document.querySelector("#video-frame");

function safeExternalLink(element, url) {
  if (!url) return;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return;
    element.href = parsed.href;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    element.hidden = false;
  } catch {
    return;
  }
}

function renderCollaborations() {
  const list = document.querySelector("#collaborator-list");
  const emptyState = document.querySelector("#collaborations-empty");
  const collaborators = Array.isArray(portfolioConfig.collaborations)
    ? portfolioConfig.collaborations.filter((item) => item && item.name)
    : [];

  list.replaceChildren();
  emptyState.hidden = collaborators.length > 0;

  for (const collaborator of collaborators) {
    const item = document.createElement("span");
    item.className = "collaborator";

    if (collaborator.logo) {
      const image = document.createElement("img");
      image.src = collaborator.logo;
      image.alt = "";
      image.loading = "lazy";
      image.addEventListener("error", () => image.remove(), { once: true });
      item.append(image);
    }

    const name = document.createElement("span");
    name.textContent = collaborator.name;
    item.append(name);

    const link = collaborator.link ? document.createElement("a") : null;
    if (link) {
      link.className = "collaborator-link";
      link.setAttribute("aria-label", `${collaborator.name} (external link)`);
      safeExternalLink(link, collaborator.link);
      if (link.hasAttribute("href")) {
        link.append(item);
        list.append(link);
        continue;
      }
    }
    list.append(item);
  }
}

function setCount(id, count) {
  document.querySelector(id).textContent = String(count).padStart(2, "0");
}

function updatePortfolio(filter = "all", showAll = false) {
  projectGrid.replaceChildren();
  const validProjects = randomizedProjects.filter((project) =>
    Object.prototype.hasOwnProperty.call(projectCategories, project.category));
  const projects = validProjects
    .filter((project) => filter === "all" || project.category === filter);
  const visibleProjects = filter === "all" && !showAll ? projects.slice(0, 2) : projects;

  for (const project of visibleProjects) {
    const card = document.querySelector("#project-card-template").content.firstElementChild.cloneNode(true);
    card.classList.add(`project-card--${project.category}`);
    const isAsset = project.category === "development-assets";
    card.querySelector(".project-title").textContent = project.title || "Untitled project";

    const tagList = card.querySelector(".project-tag-list");
    const tags = [];
    const rawTags = Array.isArray(project.tags) ? project.tags : [];
    for (const tag of rawTags) {
      const label = String(tag || "").trim();
      if (label && !tags.includes(label)) tags.push(label);
    }
    const categoryTag = project.technology || projectCategories[project.category];
    if (categoryTag && !tags.includes(categoryTag)) tags.unshift(categoryTag);
    if (tags.length === 0) {
      tagList.hidden = true;
    } else {
      tagList.replaceChildren();
      for (const tag of tags) {
        const tagChip = document.createElement("span");
        tagChip.className = "project-tag";
        tagChip.textContent = tag;
        tagList.append(tagChip);
      }
    }

    const lifecycleStatus = String(project.status || "").trim().toLowerCase();
    if (projectStatusLabels[lifecycleStatus]) {
      const status = card.querySelector(".project-status");
      status.textContent = projectStatusLabels[lifecycleStatus];
      status.classList.add(`project-status--${lifecycleStatus}`);
      status.hidden = false;
    }

    const releaseStatusKey = String(project.releaseStatus || "").trim().toLowerCase().replace(/\s+/g, "-");
    if (projectReleaseLabels[releaseStatusKey]) {
      const releaseStatus = card.querySelector(".project-release-status");
      releaseStatus.textContent = projectReleaseLabels[releaseStatusKey];
      releaseStatus.classList.add(`project-release-status--${releaseStatusKey}`);
      releaseStatus.hidden = false;
    }

    const banner = card.querySelector(".banner-image");
    const bannerUrl = project.banner || project.image;
    if (bannerUrl && !isAsset) {
      banner.src = bannerUrl;
      banner.alt = `${project.title || "Project"} banner`;
      banner.hidden = false;
      card.querySelector(".banner-placeholder").hidden = true;
      banner.addEventListener("error", () => {
        banner.hidden = true;
        card.querySelector(".banner-placeholder").hidden = false;
      }, { once: true });
    }

    const pfp = card.querySelector(".project-pfp");
    if (project.pfp && !isAsset) {
      pfp.src = project.pfp;
      pfp.alt = `${project.title || "Project"} profile picture`;
      pfp.hidden = false;
      card.querySelector(".project-monogram").hidden = true;
      pfp.addEventListener("error", () => {
        pfp.hidden = true;
        card.querySelector(".project-monogram").hidden = false;
      }, { once: true });
    }
    card.querySelector(".project-monogram").textContent = (project.title || "Ly").slice(0, 2).toUpperCase();
    if (isAsset) {
      pfp.hidden = true;
      card.querySelector(".project-monogram").hidden = true;
      if (project.video) {
        const previewUrl = new URL(project.video, window.location.href);
        const youtubeId = previewUrl.hostname.endsWith("youtube.com")
          ? previewUrl.searchParams.get("v")
          : previewUrl.hostname === "youtu.be" ? previewUrl.pathname.slice(1) : null;
        if (youtubeId) {
          const preview = card.querySelector(".asset-video-embed");
          preview.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${encodeURIComponent(youtubeId)}&playsinline=1`;
          preview.hidden = false;
          card.querySelector(".banner-placeholder").hidden = true;
        } else if (["https:", "http:", "file:"].includes(previewUrl.protocol)) {
          const preview = card.querySelector(".asset-video-preview");
          preview.src = previewUrl.href;
          preview.hidden = false;
          card.querySelector(".banner-placeholder").hidden = true;
          preview.addEventListener("error", () => {
            preview.hidden = true;
            card.querySelector(".banner-placeholder").hidden = false;
          }, { once: true });
        }
      }
    }

    if (project.role) {
      const role = card.querySelector(".project-role");
      role.textContent = project.role;
      role.hidden = false;
    }

    const description = card.querySelector(".project-description");
    if (project.description) {
      description.textContent = project.description;
      description.hidden = false;
    }

    const attribution = card.querySelector(".project-attribution");
    if (project.attribution) {
      attribution.textContent = project.attribution;
      attribution.hidden = false;
    }

    const metricDefinitions = [
      ["peakCcu", "Peak CCU"],
      ["discordMembers", "Discord members"],
      ["currentCcu", "Current CCU"],
      ["totalVisits", "Total visits"],
    ];
    const metrics = card.querySelector(".game-metrics");
    for (const [key, label] of metricDefinitions) {
      if (project[key] === undefined || project[key] === null || project[key] === "") continue;
      const metric = document.createElement("div");
      metric.className = "game-metric";
      const value = document.createElement("strong");
      const caption = document.createElement("span");
      const numericValue = Number(project[key]);
      value.textContent = Number.isFinite(numericValue)
        ? new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(numericValue)
        : String(project[key]);
      caption.textContent = label;
      metric.append(value, caption);
      metrics.append(metric);
    }

    safeExternalLink(card.querySelector(".project-link"), project.link);
    safeExternalLink(card.querySelector(".discord-server-link"), project.discordLink);
    const cardDetails = card.querySelector(".game-card-details");
    cardDetails.hidden = metrics.children.length === 0
      && card.querySelector(".project-link").hidden
      && card.querySelector(".discord-server-link").hidden;
    if (project.video) {
      const trigger = card.querySelector(".video-trigger");
      trigger.hidden = false;
      trigger.addEventListener("click", () => openVideo(project.video));
    }
    projectGrid.append(card);
  }

  emptyWork.hidden = projects.length > 0;
  projectListToggle.hidden = filter !== "all" || projects.length <= 2;
  projectListToggle.textContent = showAll ? "Show fewer projects" : "Show all projects";
  projectListToggle.setAttribute("aria-expanded", String(showAll));
  setCount("#count-all", validProjects.length);
  for (const category of Object.keys(projectCategories)) {
    setCount(`#count-${category}`, validProjects.filter((project) => project.category === category).length);
  }
  observeReveals(projectGrid);
}

function openVideo(url) {
  let parsed;
  try {
    parsed = new URL(url, window.location.href);
  } catch {
    return;
  }
  const youtubeId = parsed.hostname.endsWith("youtube.com") ? parsed.searchParams.get("v") : null;
  const shortYoutubeId = parsed.hostname === "youtu.be" ? parsed.pathname.slice(1) : null;
  const videoId = youtubeId || shortYoutubeId;
  videoFrame.replaceChildren();

  if (videoId) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`;
    iframe.title = "Project video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    videoFrame.append(iframe);
  } else if (["https:", "http:", "file:"].includes(parsed.protocol)) {
    const video = document.createElement("video");
    video.src = parsed.href;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    videoFrame.append(video);
  } else {
    return;
  }

  videoModal.hidden = false;
  document.querySelector(".video-close").focus();
  document.body.classList.add("modal-open");
}

function closeVideo() {
  videoModal.hidden = true;
  videoFrame.replaceChildren();
  document.body.classList.remove("modal-open");
}

function setAvatar(image, fallback, url, name) {
  if (!url) {
    image.hidden = true;
    fallback.hidden = false;
    return;
  }
  image.src = url;
  image.alt = `${name}’s profile picture`;
  image.hidden = false;
  fallback.hidden = true;
  image.addEventListener("error", () => {
    image.hidden = true;
    fallback.hidden = false;
  }, { once: true });
}

function buildDiscordImageUrl(type, userId, assetHash, size = 256) {
  if (!userId || !assetHash) return "";
  const extension = assetHash.startsWith("a_") ? "gif" : "png";
  return `https://cdn.discordapp.com/${type}/${encodeURIComponent(userId)}/${encodeURIComponent(assetHash)}.${extension}?size=${size}`;
}

function applyDiscordProfileData(profile) {
  if (!profile || !profile.id) return;

  const username = profile.global_name || profile.username || "LyMe";
  const avatarUrl = buildDiscordImageUrl("avatars", profile.id, profile.avatar, 256);
  const bannerUrl = profile.banner ? buildDiscordImageUrl("banners", profile.id, profile.banner, 1024) : "";
  const decorationAsset = profile.avatar_decoration_data?.asset;

  document.querySelectorAll("#nav-discord-name, #contact-discord-name").forEach((element) => {
    element.textContent = username;
  });

  setAvatar(document.querySelector("#nav-avatar"), document.querySelector("#nav-avatar-fallback"), avatarUrl, username);
  setAvatar(document.querySelector("#contact-avatar"), document.querySelector("#contact-avatar-fallback"), avatarUrl, username);

  const profileBanner = document.querySelector(".profile-banner");
  const profileBannerImage = document.querySelector("#profile-banner-image");
  if (bannerUrl) {
    profileBannerImage.src = bannerUrl;
    profileBannerImage.hidden = false;
    profileBanner.classList.add("has-discord-banner");
    profileBannerImage.addEventListener("error", () => {
      profileBannerImage.hidden = true;
      profileBanner.classList.remove("has-discord-banner");
    }, { once: true });
  } else {
    profileBannerImage.hidden = true;
    profileBanner.classList.remove("has-discord-banner");
  }

  const decorationImage = document.querySelector("#discord-decoration");
  if (decorationAsset) {
    decorationImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${encodeURIComponent(decorationAsset)}.png?size=256`;
    decorationImage.alt = "";
    decorationImage.hidden = false;
    decorationImage.addEventListener("error", () => {
      decorationImage.hidden = true;
    }, { once: true });
  } else {
    decorationImage.hidden = true;
  }

  document.querySelector("#contact-discord-note").textContent = "Profile synced with your Discord account.";
}

async function fetchDiscordProfileData() {
  const userId = portfolioConfig.discordUserId.trim();
  if (!/^\d{17,20}$/.test(userId)) return;

  const token = (portfolioConfig.discordApiToken || "").trim();
  if (!token) return;

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${encodeURIComponent(userId)}`, {
      headers: {
        Authorization: `Bot ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Discord API request failed (${response.status})`);
    }

    const profile = await response.json();
    if (!profile || !profile.id) {
      throw new Error("No Discord profile data returned.");
    }

    applyDiscordProfileData(profile);
  } catch (error) {
    console.warn("Unable to fetch Discord profile data via API:", error);
  }
}

async function configureDiscordProfile() {
  const userId = portfolioConfig.discordUserId.trim();
  if (!/^\d{17,20}$/.test(userId)) return;

  const profileUrl = `https://discord.com/users/${encodeURIComponent(userId)}`;
  for (const link of [navLink, contactLink]) safeExternalLink(link, profileUrl);
  document.querySelector("#contact-discord-label").textContent = "Open Discord profile";

  await fetchDiscordProfileData();

  if (!document.querySelector("#contact-discord-note").textContent.includes("synced")) {
    document.querySelector("#contact-discord-note").textContent = "Send a message through my Discord profile.";
  }
}

function loadProfileAvatar() {
  const avatarUrl = portfolioConfig.profileAvatarImage;
  const displayName = document.querySelector("#nav-discord-name").textContent;
  setAvatar(document.querySelector("#nav-avatar"), document.querySelector("#nav-avatar-fallback"), avatarUrl, displayName);
  setAvatar(document.querySelector("#contact-avatar"), document.querySelector("#contact-avatar-fallback"), avatarUrl, displayName);
}

function loadProfileBanner() {
  if (!portfolioConfig.profileBannerImage) return;

  const image = document.querySelector("#profile-banner-image");
  image.src = portfolioConfig.profileBannerImage;
  image.hidden = false;
  image.addEventListener("error", () => {
    console.error(`Unable to load profile banner image: ${portfolioConfig.profileBannerImage}`);
    image.hidden = true;
  }, { once: true });
}

function observeReveals(root = document) {
  const items = root.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    }
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    updatePortfolio(button.dataset.filter);
  });
});

projectListToggle.addEventListener("click", () => {
  const showAll = projectListToggle.getAttribute("aria-expanded") !== "true";
  updatePortfolio("all", showAll);
});

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  button.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  document.querySelector("#nav-links").classList.toggle("is-open", !isOpen);
});

document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
    document.querySelector("#nav-links").classList.remove("is-open");
  });
});

document.querySelector(".video-close").addEventListener("click", closeVideo);
videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) closeVideo();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !videoModal.hidden) closeVideo();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderCollaborations();
updatePortfolio();
observeReveals();
loadProfileAvatar();
loadProfileBanner();
configureDiscordProfile();
setInterval(() => {
  if (document.visibilityState === "visible") {
    configureDiscordProfile();
  }
}, 5 * 60 * 1000);
