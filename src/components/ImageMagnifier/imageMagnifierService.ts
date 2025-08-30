import { render,h } from 'vue'
import ImageMagnifier from './ImageMagnifier.vue'
import {MagnifierInstance,MagnifierOptions} from "./index";

/**
 * @description 存储多个实例
 * @return MagnifierInstance
 * @example
 * const instances = new Map<string,MagnifierInstance>()
 */
const instances = new Map<string,MagnifierInstance>()

/**
 * @description 生成唯一id
 * @return string
 * @example
 * const id = generateUniqueId()
 */
const generateUniqueId = ()=>{
    return Math.random().toString(36).substring(2,8)
}

/**
 * @description 导出创建放大镜组件方法
 * @return MagnifierInstance
 */
export function createImageMagnifier(options: MagnifierOptions) {

    //创建实例id，没有给定id则随机生成一个id
    const id = options.id || generateUniqueId();

    //判断是由已经实例，若有则先销毁实例
    instances.has(id) ? instances.get(id)?.destroy() : null;

    let container:HTMLElement,isVisible:boolean;

    //创建实例
    const instance: MagnifierInstance = {
        instance_id:id,
        show(){
            if(container){
                container.style.display = 'block';
                isVisible = true;
                options.onShow?.();
            }
        },
        hide(){
            if(container){
                container.style.display = 'none';
                isVisible = false;
                options.onHide?.();
            }
        },
        toggle(){
            isVisible = !isVisible;
            if(isVisible){
                this.show();
            }
            else{
                this.hide();
            }
        },
        update(newOptions:Partial<MagnifierOptions>   ){
            options = {...options,...newOptions}
            //销毁实例
            this.destroy();
            //使用新配置创建新实例
            const newInstance = createImageMagnifier(options);
            //更新实例
            Object.assign(instance,newInstance);
            if(isVisible){
                this.show();
            }
        },
        destroy(){
            //卸载
            render(null,container)
            //移除当前实例对应的元素
            container && container.parentNode ? container.parentNode.removeChild(container) : null
        },
        isVisible: ()=> isVisible,
    }
    //创建容器
    container = document.createElement('div');
    container.className = options.className;
    container.style.display = options.defaultVisible ? 'block' : 'none';
    options.target.appendChild(container);

    //使用静态render函数渲染组件（不具备完整的应用功能、生命周期不具备、响应式更新需手动触发，但性能开销较低）
    render(h(ImageMagnifier,{
        width: options.width ,
        height: options.height,
        magnifierImage: options.imageUrl,
        maskSize: options.maskSize,
        needMask: options.needMask,
        magnifierShape: options.shape ,
        magnifierDirection: options.position,
        magnifierScale: options.scale,
        boxGap: options.boxGap,
        showInMask: options.showInMask,
        radiusSize: options.radiusSize,
        maskColor: options.color,
        zoom: options.zoom,
    }),container)


    instances.set(id,instance)

    return instance;
}

/**
 * @description 销毁所有实例
 */
export function destroyAllImageMagnifiers() {
    instances.forEach(instance => instance.destroy());
    instances.clear();
}
