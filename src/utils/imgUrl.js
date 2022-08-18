export default function getImageUrl(name, type = "png") {
  return new URL(`../assets/icons/${name}.${type}`, import.meta.url).href;
}
