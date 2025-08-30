import DefaultTheme from "vitepress/theme";
import ImageMagnifier from "../components/ImageMagnifier.vue";

export default {
    ...DefaultTheme,
    enhanceApp: ({app})=>{
        app.component("ImageMagnifier", ImageMagnifier);
    }
}
