import ImageMagnifier from "./ImageMagnifier.vue";
import { createImageMagnifier, destroyAllImageMagnifiers } from "./imageMagnifierService";
import type { App } from "vue";
import "./index.css";

// 提供自动安装方法
const install = (app: App) => {
    if (app.component('ImageMagnifier')) return;
    app.component('ImageMagnifier', ImageMagnifier);
    app.config.globalProperties.$magnifier = { create: createImageMagnifier };
};

// 🔥 创建插件对象
const plugin = {
    install,
    component: ImageMagnifier,
    createImageMagnifier,
    destroyAllImageMagnifiers
};

// 命名导出（按需导出）
export {
    ImageMagnifier,
    createImageMagnifier,
    destroyAllImageMagnifiers,
    install
};

export default plugin;

// 类型导出
export * from './types';


