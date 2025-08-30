
### 设置组件宽高

>> 你将会得到一个宽200px高260px，并且遮罩层为百分之十大小的放大镜组件

<image-magnifier
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    >
</image-magnifier>

### 改变放大镜组件的形状

>> 通过改变magnifier-image属性值来设置放大镜组件的形状（normal、squareWithRadius、circle）

<div class="flex-layout-box">

<image-magnifier
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    magnifier-shape="normal"
    >
</image-magnifier>
<image-magnifier
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    magnifier-shape="squareWithRadius"
    >
</image-magnifier>
<image-magnifier
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    magnifier-shape="circle"
    >
</image-magnifier>
</div>

### 设置原盒与放大盒之间的间隙

>> 默认值间隙为1rem，您可以通过修改box-gap的属性值来控制两者之间的间隙

<image-magnifier
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    :box-gap="3"
    magnifier-shape="circle"
    >
</image-magnifier>

### 设置原盒与放大盒之间的位置关系

>> 可设置的相对位置有（left、top、bottom、right）

<div class="flex-layout-box">
<image-magnifier
    class="direction-component"
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    magnifier-direction="bottom"
    >
</image-magnifier>
<image-magnifier
    class="direction-component"
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    magnifier-direction="right"
    >
</image-magnifier>
<image-magnifier
    class="direction-component"
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    magnifier-direction="top"
    >
</image-magnifier>
<image-magnifier
    class="direction-component"
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    magnifier-direction="left"
    >
</image-magnifier>
</div>


### 设置放大图片是否显示在遮罩层中

>> 当show-in-mask属性值为true时，放大盒会被隐藏，所有关于放大盒的效果都会关闭

<image-magnifier
    class="direction-component"
    magnifier-image="../tiger.webp"
    width="200px"
    height="260px"
    show-in-mask
    mask-size="50%"
    >
</image-magnifier>


<style>
.flex-layout-box{
    position: relative;
    display: flex;
    justify-content: space-between;
}
.direction-component{
    margin-right: 1rem;
}
</style>
