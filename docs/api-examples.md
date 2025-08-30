
### Set component width and height

>> You will receive a magnifying glass component with a width of 200px and a height of 260px, and a mask layer size of 10%

<image-magnifier
    magnifier-image="./tiger.webp"
    width="200px"
    height="260px"
    >
</image-magnifier>

### Change the shape of the magnifying glass component

>> By changing the magnifier shape attribute value of the component, the shape of the magnifying glass component can be set. There are three supported shapes, normal，squareWithRadius，circle

<div class="flex-layout-box">

<image-magnifier
    magnifier-image="./tiger.webp"
    width="200px"
    height="260px"
    magnifier-shape="normal"
    >
</image-magnifier>
<image-magnifier
    magnifier-image="./tiger.webp"
    width="200px"
    height="260px"
    magnifier-shape="squareWithRadius"
    >
</image-magnifier>
<image-magnifier
    magnifier-image="./tiger.webp"
    width="200px"
    height="260px"
    magnifier-shape="circle"
    >
</image-magnifier>
</div>

### Set the gap between the original box and the enlarged box

>> The default gap is 1, and you can control the gap between the two boxes by modifying the value of box gap

<image-magnifier
    magnifier-image="./tiger.webp"
    width="200px"
    height="260px"
    :box-gap="3"
    magnifier-shape="circle"
    >
</image-magnifier>

### Set the position between the magnifying box and the original box

>> The adjustable attribute values are up, down, left, right

<div class="flex-layout-box">
<image-magnifier
    class="direction-component"
    magnifier-image="./tiger.webp"
    width="200px"
    height="260px"
    magnifier-direction="bottom"
    >
</image-magnifier>
<image-magnifier
    class="direction-component"
    magnifier-image="./tiger.webp"
    width="200px"
    height="260px"
    magnifier-direction="right"
    >
</image-magnifier>
<image-magnifier
    class="direction-component"
    magnifier-image="./tiger.webp"
    width="200px"
    height="260px"
    magnifier-direction="top"
    >
</image-magnifier>
<image-magnifier
    class="direction-component"
    magnifier-image="./tiger.webp"
    width="200px"
    height="260px"
    magnifier-direction="left"
    >
</image-magnifier>
</div>


### The enlarged image is displayed within the mask layer

>> When this attribute is enabled, the magnifying box will be hidden, and all effects related to the magnifying box will not appear

<image-magnifier
    class="direction-component"
    magnifier-image="./tiger.webp"
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
