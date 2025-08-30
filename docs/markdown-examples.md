# Vue Image Magnifier

>> Image Magnifier is an image magnifying glass component developed based on Vue 3 and TypeScript, supporting multiple interaction modes and custom configurations. This component allows users to view the enlarged area of images when hovering or touching the mouse, suitable for e-commerce product display, image detail viewing, and other scenarios

## Features

1. <p class="feature-text">Multiple shapes supported: regular rectangle, rounded rectangle, and circular container shapes</p>

2. <p class="feature-text">Flexible positioning: The enlarged area can be configured in four directions of the original image: up, down, left, and right</p>

3. <p class="feature-text">Responsive design: supports defining dimensions in various CSS units (px,%, rem, em, vh, vw)</p>

4. <p class="feature-text">Touch support: perfectly adapted to mobile touch operations</p>

5. <p class="feature-text">High performance: implementing throttling optimization using requestAnimationFrame</p>

6. <p class="feature-text">Highly customizable: Mask layer color, size, position, etc. can be configured</p>


## Install
```shell
npm install @zraylin/vue-image-magnifier
```

## Usage

### Global Component Registration

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

### Local Component Registration

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

### Install as a plugin
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

## Example of Basic Parameters
```vue
<image-magnifier width="200px" height="200px" magnifier-image="x.png"></image-magnifier>
```
## Complete parameter example
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
## Attribute Description

### Size Control
| property name | type   | default value | description                                        |
|:--------------|:-------|:--------------|:---------------------------------------------------|
| width         | string | 100%          | Container width, supports px/%/rem/em/vh/vw units  |
| height        | string | 100%          | Container height, supports px/%/rem/em/vh/vw units |


### Shape Control
| property name   | type                                 | default value | description                                                       |
|:----------------|:-------------------------------------|:--------------|:------------------------------------------------------------------|
| magnifier-shape | normal \| circle \| squareWithRadius | normal        | Container shape, available in normal, circle, or squareWithRadius |
| radius-size     | string                               | 5%            | Corner size (only effective when shape is squareWithRadius)       |

### Amplification Control
| property name   | type        | default value | description                                             |
|:----------------|:------------|:--------------|:--------------------------------------------------------|
| magnifier-scale | 1 \| 2 \| 3 | 2             | Proportion of enlarged box compared to the original box |
| zoom            | number      | 3             | magnification                                           |

### Position Control
| property name       | type                           | default value | description                                               |
|:--------------------|:-------------------------------|:--------------|:----------------------------------------------------------|
| magnifier-direction | left \| right \| bottom \| top | right         | Position of the enlarged box relative to the original box |
| box-gap             | number                         | 1             | Gap between the enlarged box and the original box         |


### Mask Layer Control
| property name | type                            | default value | description                                  |
|:--------------|:--------------------------------|:--------------|:---------------------------------------------|
| need-mask     | boolean                         | true          | display the mask layer                       |
| mask-size     | 10% \| 20% \| 30% \| 40% \| 50% | 10%           | Size of the mask layer                       |
| mask-color    | string                          | #858080       | Color of the mask layer                      |
| show-in-mask  | boolean                         | false         | Display enlarged image within the mask layer |








<style>
.feature-text{
    margin-top: 1rem;
    white-space: break-spaces;
    line-height: 1.5rem;
}
</style>
