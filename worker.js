// Redirects carried over from netlify.toml, plus the http -> https and www -> apex
// redirects Netlify did implicitly.
const REDIRECTS = {
  "/foli": "https://work.justalever.com",
  "/work": "https://work.justalever.com",
  "/resume": "https://www.craft.me/s/6tTdmDYGFbCJiZ",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.protocol === "http:" || url.hostname === "www.justalever.com") {
      url.protocol = "https:";
      url.hostname = "justalever.com";
      return Response.redirect(url.toString(), 301);
    }

    const target = REDIRECTS[url.pathname.replace(/\/+$/, "")];
    if (target) return Response.redirect(target, 301);

    return env.ASSETS.fetch(request);
  },
};
