import CryptoIcon from "./CryptoIcon.vue";

function install(app, options = {}) {
    app.component('CryptoIcon', CryptoIcon);
}

export {
    install,
    CryptoIcon
};