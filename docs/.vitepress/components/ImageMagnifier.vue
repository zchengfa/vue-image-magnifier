<script setup lang="ts">
import {computed, PropType, ref} from "vue";
import {MagnifierShape,MagnifierScale,MagnifierDirection,ImageMagnifierProps,MaskSize} from "./index";
import './index.css'
/**
 * 图片放大组件
 * @component
 * @example
 * <image-magnifier
 *  width="200px"
 *  height="200px"
 *  magnifier-image="x.png"
 *  :zoom="2"
 * >
 * </image-magnifier>
 * @author ZCF
 * @version 1.0.0
 */


 const props:ImageMagnifierProps = defineProps({
  /**
   * 原盒的宽度（可使用任意css长度单位,若不添加宽高属性会默认为100%）
   * @type string
   * @default '100%' - 默认100%
   * @example 宽300px高10rem的矩形盒
   * //长度单位样例：'300px' | '10rem' | '20%' | '20em' | '20vw' | '20vh
   * <image-magnifier width="300px" height="10rem" magnifier-image="x.png"></image-magnifier>
   */
  width:{
    type: String,
    validator: (value: string) => /^\d+(\.\d+)?(px|%|rem|em|vh|vw)$/.test(value),
    default(){
      return '100%';
    }
  },

  /**
   * 原盒的高度（可使用任意css长度单位,若不添加宽高属性会默认为100%）
   * @type string
   * @default '100%' - 默认100%
   * @example 宽300px高10rem的矩形盒
   * //长度单位样例：'300px' | '10rem' | '20%' | '20em' | '20vw' | '20vh
   * <image-magnifier width="300px" height="10rem" magnifier-image="x.png"></image-magnifier>
   */
   height:{
     type: String,
     validator: (value: string) => /^\d+(\.\d+)?(px|%|rem|em|vh|vw)$/.test(value),
     default(){
       return '100%';
     }
   },
  /**
   * 需要放大的图片路径
   * @type string
   * @default '' - 默认不带图片路径
   * @example
   * <image-magnifier magnifier-image="x.png"></image-magnifier>
   */
  magnifierImage:{
    type:String,
    required:true,
    default(){
      return ''
    }
  },
  /**
   * 原盒与放大盒的形状
   * @type string
   * @throws {Error} 若属性值不是 'normal' , 'squareWithRadius' , 'circle' 时会抛出异常
   * @default 'normal' - 默认盒
   * @example 带圆角的矩形盒
   * //形状可选值：'normal' | 'squareWithRadius' | 'circle'
   * //属性值效果：
   * //1.normal：普通矩形盒 2.squareWithRadius：带圆角的矩形盒 3.circle：圆形盒
   * <image-magnifier  magnifier-image="x.png" magnifier-shape="squareWithRadius"></image-magnifier>
   */
  magnifierShape:{
    type: String as PropType<MagnifierShape>,
    validator:(value:string)=>{
      if(!['normal' , 'squareWithRadius' , 'circle'].includes(value)){
        throw new Error('The value of the magnifier shape must be normal, squareWithRadius, or circle')
      }
      return true
    },
    default(){
      return 'normal'
    }
  },
  /**
   * 设置盒子的圆角值（该属性在magnifier-shape为squareWithRadius时才会生效）
   * @type string
   * @exception { Error } 属性值不为px|%|rem|em单位的会抛出异常
   * @default '5%' - 默认百分之5的圆角
   * @example 圆角为1rem的矩形盒
   * <image-magnifier  magnifier-image="x.png" magnifier-shape="squareWithRadius" radius-size="1rem"></image-magnifier>
   */
  radiusSize:{
    type: String,
    validator: (value: string) => /^\d+(\.\d+)?(px|%|rem|em)$/.test(value),
    default(){
      return '5%'
    }
  },
  /**
   * 原盒与放大盒之间的大小比例，最大支持三倍
   * @type string
   * @throws { Error } 属性值不为1、2或者3时会抛出异常
   * @default '1' - 默认大小比例1：1
   * @example 放大盒是原盒的两倍
   * //可选值：1、2、3
   * <image-magnifier  magnifier-image="x.png" magnifier-scale="2"></image-magnifier>
   */
  magnifierScale:{
    type: String as PropType<MagnifierScale>,
    validator:(value:string)=>{
      if(!['1','2','3'].includes(value)){
        throw new Error('The value of the magnifier scale must be 1, 2, or 3')
      }
      return true
    },
    default(){
      return '1'
    }
  },
  /**
   * 放大盒对于原盒的位置（默认是在原盒的右边）
   * @type string
   * @default 'right' - 默认在原盒的右边
   * @throws { Error } 属性值不在可选值内会抛出异常
   * @example 放大盒在原盒的下方
   * //可选值：'right' | 'top' | 'left' | 'bottom'
   * <image-magnifier magnifier-image="x.png" magnifier-direction="bottom">
   */
  magnifierDirection:{
    type: String as PropType<MagnifierDirection>,
    validator(value: string): boolean {
      if(!['right' , 'top' , 'left' , 'bottom'].includes(value)){
        throw new Error('The value of the magnifier direction must be right, top, left or bottom')
      }
      return true
    },
    default(){
      return 'right'
    }
  },
  /**
   * 原盒与放大盒之间的间隙（间隙是根据根元素的font-size大小以及输入的属性值决定的）
   * @type number
   * @default 1 - 间隙为1rem
   * @example 间隙为1的放大镜
   * <image-magnifier magnifier-image="x.png" :box-gap="1"></image-magnifier>
   */
  boxGap:{
    type: Number,
    default(){
      return 1
    }
  },
  /**
   * 是否开启遮罩层
   * @type boolean
   * @default true - 默认开启遮罩层
   * @example 不带遮罩层的放大镜
   * <image-magnifier :need-mask="false" magnifier-image="x.png"></image-magnifier>
   */
  needMask:{
    type: Boolean,
    default(){
      return true
    }
  },
  /**
   * 遮罩层的尺寸
   * @type string
   * @default '10%' - 原盒的百分之10大小
   * @throws { Error } 属性值不在可选范围内会抛出异常
   * @example 遮罩层为原盒的百分之20%
   * <image-magnifier mask-size="20%" magnifier-image="x.png">
   */
  maskSize:{
    type: String as PropType<MaskSize>,
    validator(value: string): boolean {
      if(!['10%', '20%' , '30%' , '40%' , '50%'].includes(value)){
        throw new Error('The value of the mask size must be 10%, 20%, 30%, 40% or 50%')
      }
      return true
    },
     default(){
      return '10%'
     }
   },
  /**
   * 遮罩层的背景色
   * @type string
   * @default '#858080' - 默认为灰色
   * @example 粉色遮罩层
   * <image-magnifier mask-color="pink" magnifier-image="x.png">
   */
  maskColor:{
     type:String,
     validator: (value:string) => {
       // 验证十六进制颜色格式
       return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value) ||
           // 验证RGB/RGBA格式
           /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*\d?\.?\d+)?\)$/.test(value) ||
           // 验证颜色名称
           ['red', 'blue', 'green', 'black', 'white', 'yellow', 'pink'].includes(value.toLowerCase())
     },
     default(){
       return '#858080'
     }
   },
  /**
   * 放大后的图片是否显示在遮罩层中
   * @type boolean
   * @default false - 默认不显示，显示在放大盒中
   * @example 显示在遮罩层中
   * <image-magnifier :show-in-mask="true" magnifier-image="x.png">
   */
  showInMask:{
    type:Boolean,
     default(){
      return false
     }
   },
  /**
   * 放大比例
   * @type number
   * @default 2 - 放大2倍
   * @throws { Error } 倍率小于等于1时会抛出异常
   * @example 放大3倍
   * <image-magnifier :show-in-mask="true" :zoom="3" magnifier-image="x.png">
   */
   zoom:{
    type: Number,
     validator:(value:number)=>{
        if(value <= 1){
          throw new Error('The value must be more than 1')
        }
        return true
     },
     default(){
      return 2
     }
   }
})

const isShowMagnifierBoxAndMask = ref<boolean>(false)
const maskRef = ref<HTMLElement | null>(null)
const magnifierBoxRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const originalRef = ref<HTMLElement | null>(null)

//计算属性得到原盒形状（默认、带圆角的矩形盒、圆形盒）
const magnifierShapeClass = computed(()=>{
  switch (props.magnifierShape){
    case 'squareWithRadius':
      return 'box-radius__square'
    case 'circle':
      return 'box-radius__circle'
    default:
      return 'box-radius__normal'
  }
})

//设置节流函数，保证动画频率与屏幕刷新率保持同步
const throttle = <T extends any[]>(fn: (...args: T) => void)=> {
  let flag = false;
  return (...args: T) => {
    if(!flag){
      requestAnimationFrame(()=>{
        fn.apply(this,args)
        flag = false
      })
    }
    flag = true
  };
}

//计算属性得到放大盒的大小
const magnifierScaleStyle = computed(()=>{
  return 100*Number(props.magnifierScale) + '%'
})

//计算属性得到放大盒对于原盒的位置类名
const magnifierDirectionClass = computed(()=>{
  return 'magnifier-direction__' + props.magnifierDirection
})

//计算属性得到盒子原盒与放大盒之间的间隙
const boxGapStyle = computed(()=>{
  return props.boxGap! + 'rem'
})

const mouseAndTouchTriggerHandler = (): void => {
   isShowMagnifierBoxAndMask.value = true
}

const mouseAndTouchEndHandler = (): void => {
   isShowMagnifierBoxAndMask.value = false
}

const mouseAndTouchMoveHandler = throttle((event: any): void => {
  const target = (originalRef.value) as HTMLElement,container = (containerRef.value) as HTMLElement, mask = (maskRef.value) as HTMLElement, magnifierBox = (magnifierBoxRef.value) as HTMLElement;
  //通过事件中的touches属性判断当前时来自鼠标事件还是移动端的触摸事件
  const PX = event.touches ? event.touches[0].clientX : event.clientX , PY = event.touches ? event.touches[0].clientY : event.clientY
  //获得鼠标在盒子中的位置
  let rect = container.getBoundingClientRect();
  let x = PX - rect.left, y = PY - rect.top;

  //设置鼠标在盒子中最大的可移动区域
  let thresholdX = target.clientWidth - mask.clientWidth, thresholdY = target.clientHeight - mask.clientHeight;
  //调整鼠标位置，使其位于遮罩层的中心位置
  x -= mask.offsetWidth / 2;
  y -= mask.offsetHeight / 2;
  //限制鼠标的可移动位置
  x = x < 0 ? 0 : x;
  x = x > thresholdX ? thresholdX : x;
  y = y < 0 ? 0 : y;
  y = y > thresholdY ? thresholdY : y;

  //变换遮罩层的位置
  mask.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(0)`;
  if(props.showInMask){
    mask.style.backgroundSize = `${target.clientWidth * props.zoom!}px ${target.clientHeight * props.zoom!}px`
    mask.style.backgroundPosition = `${(x/thresholdX)*100}% ${(y/thresholdY)*100}%`
  }
  else{
    //移动放大后的图片
    magnifierBox.style.backgroundPosition = `${(x/thresholdX)*100}% ${(y/thresholdY)*100}%`;
  }

})

//暴露组建的显示/隐藏方法
defineExpose({
  show:() => mouseAndTouchTriggerHandler,
  hide:() => mouseAndTouchEndHandler,
})


</script>

<template>
<div class="image-magnifier__container"
     ref="containerRef"
     :style="{'--width':width, '--height':height,'--radius-size': radiusSize}"
>
  <div class="original-img__box"
       ref="originalRef"
       :class="magnifierShapeClass"
       @touchstart="mouseAndTouchTriggerHandler"
       @touchend="mouseAndTouchEndHandler"
       @touchmove="(event:TouchEvent)=> mouseAndTouchMoveHandler(event)"
       @mouseenter="mouseAndTouchTriggerHandler"
       @mousemove="(event:MouseEvent)=> mouseAndTouchMoveHandler(event)"
       @mouseleave="mouseAndTouchEndHandler"
  >
    <slot name="image">
      <img class="magnifier-img" :src="magnifierImage" alt="magnifier_image"/>
    </slot>
    <div class="magnifier-mask"
         ref="maskRef"
         :class="showInMask ? 'glass-mask' : null"
         v-show="isShowMagnifierBoxAndMask && needMask"
         :style="{'--mask-size':maskSize,background: showInMask ? `url(${magnifierImage})` : maskColor}"
    ></div>
  </div>
  <div ref="magnifierBoxRef"
       class="magnifier-img__box"
       :class="magnifierDirectionClass + ' ' + magnifierShapeClass"
       v-show="isShowMagnifierBoxAndMask && !showInMask"
       :style="{
         '--magnifier-scale':magnifierScaleStyle,
         '--gap': boxGapStyle,
         '--magnifier-image': `url(${magnifierImage})`,
       }
       "
  ></div>
</div>
</template>

