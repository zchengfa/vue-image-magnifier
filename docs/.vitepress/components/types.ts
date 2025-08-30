import {DefineComponent} from "vue";
// 基础类型定义
export type MaskSize = '10%' | '20%' | '30%' | '40%' | '50%'
export type MagnifierShape = 'normal' | 'squareWithRadius' | 'circle'
export type MagnifierScale = '1' | '2' | '3'
export type MagnifierDirection = 'right' | 'top' | 'left' | 'bottom'

// 组件Props类型
export interface ImageMagnifierProps {
    width?: string
    height?: string
    magnifierImage: string
    maskSize?: MaskSize
    needMask?: boolean
    magnifierShape?: MagnifierShape
    magnifierDirection?: MagnifierDirection
    magnifierScale?: MagnifierScale
    boxGap?: number
    showInMask?: boolean
    radiusSize?: string
    maskColor?: string
    zoom?: number
}

// 组件实例类型
export interface ImageMagnifierComponent extends DefineComponent<ImageMagnifierProps> {}

// 服务层类型
export interface MagnifierOptions {
    target: HTMLElement
    className: string
    defaultVisible: boolean
    imageUrl: string
    width?: string
    height?: string
    id?: string
    maskSize?: MaskSize
    needMask?: boolean
    shape: MagnifierShape
    radiusSize?: string
    showInMask?: boolean
    scale?: MagnifierScale
    position?: MagnifierDirection
    boxGap?: number
    zoom?: number
    color: string
    onShow: () => void
    onHide: () => void
}

export interface MagnifierInstance {
    instance_id: string
    show: () => void
    hide: () => void
    toggle: () => void
    update: (options: Partial<MagnifierOptions>) => void
    destroy: () => void
    isVisible: () => boolean
}

// 全局声明扩展
declare module 'vue' {
    interface GlobalComponents {
        ImageMagnifier: ImageMagnifierComponent
    }
}

