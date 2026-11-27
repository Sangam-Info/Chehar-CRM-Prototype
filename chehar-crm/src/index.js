// Cloudflare Worker — serves the static prototype from ./public
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
