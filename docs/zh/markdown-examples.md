# Vue Image Magnifier

>> Image Magnifier是基于Vue 3和TypeScript开发的图像放大镜组件，支持多种交互模式和自定义配置。该组件允许用户在悬停或触摸鼠标时查看图像的放大区域，适用于电子商务产品展示、图像细节查看和其他场景
## 特性

1. <p class="feature-text">支持多种形状：规则矩形、圆角矩形和圆形容器形状</p>

2. <p class="feature-text">弹性定位：放大区域可以在原始图像的四个方向上配置：上、下、左、右</p>

3. <p class="feature-text">响应式设计：支持以各种CSS单位（px、%、rem、em、vh、vw）定义维度、</p>

4. <p class="feature-text">触控支持：完美适应移动触控操作</p>

5. <p class="feature-text">高性能：使用requestAnimationFrame实现节流优化</p>

6. <p class="feature-text">高度可定制：可以配置掩模层颜色、大小、位置等</p>


## 安装
```shell
npm install @zraylin/vue-image-magnifier
```

## 使用

### 全局注册组件

```typescript 
//main.ts  
import {ImageMagnifier} from "@zraylin/vue-image-magnifier";
import '@zraylin/vue-image-magnifier/dist/index.css'
//...

app.component('ImageMagnifier',ImageMagnifier);
```
```vue
//xxx.vue
<template>
  <image-magnifier magnifier-image="x.png"></image-magnifier>
</template>
```

### 局部组件注册

```vue
//xxx.vue
<script setup lang="ts">
  import {ImageMagnifier} from '@zraylin/vue-image-magnifier';
  import '@zraylin/vue-image-magnifier/dist/index.css'
</script>

<template>
  <image-magnifier
      magnifier-image="xxx.png"
      width="200px"
      height="200px"
      mask-size="50%"
      magnifier-scale="1"
      :zoom="2"
      show-in-mask
  >

  </image-magnifier>
</template>

```

### 插件方式安装
```typescript
//main.ts
import { createApp } from 'vue'
import './style.css'
import ImageMagnifier from '@zraylin/vue-image-magnifier'
import '@zraylin/vue-image-magnifier/dist/index.css'

import App from './App.vue'

const app = createApp(App)

app.use(ImageMagnifier)

app.mount('#app')
```
```vue
<template>
<image-magnifier
    magnifier-image="xxx.png"
    width="200px"
    height="200px"
    mask-size="50%"
    magnifier-scale="1"
    :zoom="2"
    show-in-mask
>
</image-magnifier>
</template>
```

## 基本用法
```vue
<image-magnifier width="200px" height="200px" magnifier-image="x.png"></image-magnifier>
```
## 全属性使用示例
```vue
<image-magnifier
  width="200px"
  height="200px"
  magnifier-image="product-detail.jpg"
  magnifier-shape="squareWithRadius"
  radius-size="10%"
  magnifier-scale="2"
  magnifier-direction="right"
  :box-gap="1"
  :need-mask="true"
  mask-size="20%"
  mask-color="rgba(0,0,0,0.3)"
  :show-in-mask="false"
  :zoom="3"
></image-magnifier>
```
## 属性说明

### 尺寸控制
| 属性名    | 类型  | 默认值  | 描述   |
|:-------|:----|:-----|:-----|
| width  | 字符串 | 100% | 盒子宽度 |
| height | 字符串 | 100% | 盒子高度 |


### 形状控制
| 属性名             | 类型                                   | 默认值    | 描述    |
|:----------------|:-------------------------------------|:-------|:------|
| magnifier-shape | normal \| circle \| squareWithRadius | normal | 盒子的形状 |
| radius-size     | 字符串                                  | 5%     | 圆角    |

### 缩放控制
| 属性名             | 类型          | 默认值 | 描述           |
|:----------------|:------------|:----|:-------------|
| magnifier-scale | 1 \| 2 \| 3 | 2   | 原盒与放大盒之间大小比例 |
| zoom            | 数字          | 3   | 放大倍率         |

### 定位控制
| 属性名                 | 类型                             | 默认值   | 描述          |
|:--------------------|:-------------------------------|:------|:------------|
| magnifier-direction | left \| right \| bottom \| top | right | 原盒与放大盒的位置关系 |
| box-gap             | 数字                             | 1     | 原盒与放大盒之间的间隙 |


### 遮罩层控制
| 属性名          | 类型                              | 默认值     | 描述            |
|:-------------|:--------------------------------|:--------|:--------------|
| need-mask    | 布尔                              | true    | 显示/隐藏遮罩层      |
| mask-size    | 10% \| 20% \| 30% \| 40% \| 50% | 10%     | 遮罩层大小         |
| mask-color   | 字符串                             | #858080 | 遮罩层颜色         |
| show-in-mask | 布尔                              | false   | 是否在遮罩层中显示放大图片 |








<style>
.feature-text{
    margin-top: 1rem;
    white-space: break-spaces;
    line-height: 1.5rem;
}
</style>
