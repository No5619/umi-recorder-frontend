<template>
<div class="thumbnail">
    <div class="thumbnail_img"></div>
    <div class="thumbnail_desc"></div>
</div>
</template>

<script>

export default {
    name: 'ThumbNail',
    components: {
        
    }
}
</script>

<style>
.thumbnail{
    margin: 0%;
    position: relative;
    background-color: salmon;
    overflow: auto;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}
.thumbnail_img{
    margin: 0%;
    background-color: aqua;
    position: absolute;
    top: 0%;
    bottom: 25%;
    left: 0%;
    right: 0%;
}
.thumbnail_desc{
    margin: 0%;
    background-color: greenyellow;
    position: absolute;
    top: 75%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}
</style>