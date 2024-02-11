function redirect(url) {
   window.location.replace(url);
}
export { redirect };

function setTexturePackURL(url) {
    localStorage.setItem("bloxd-texturePackUrl", url);
}
export { setTexturePackURL };
