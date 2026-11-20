export default function manifest() {
  return {
    name: "ROVOR Architecture Studio",
    short_name: "ROVOR",
    description: "Independent architecture and spatial design studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#171916",
    theme_color: "#171916",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
