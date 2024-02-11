function redirect(url) {
   window.location.replace(url);
}

function setTexturePackURL(url) {
    localStorage.setItem("bloxd-texturePackUrl", url);
}

export { redirect, setTexturePackURL };
