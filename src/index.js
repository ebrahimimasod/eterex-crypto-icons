import CryptoIcon from "./components/CryptoIcon/index.vue";

export default {
    install:(app,options ={})=>{
        app.component('CryptoIcon',CryptoIcon);
    }
}