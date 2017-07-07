<template>
    <div class="fadeFromRight">
        <div class="middle grey_demo" >5678</div>
    </div>
</template>
<style>
    @-webkit-keyframes fromRight{
        0%{
            margin-left:20px;
            opacity: 0.2;
        }
        100%{
            margin-left:8px;
            opacity: 1;
        }
    }
    .fadeFromRight{
        width:100%;
        height:200px;
        margin-left:8px;
        -webkit-animation: fromRight 0.8s;
        -moz-animation: fromRight 0.8s;
        -ms-animation: fromRight 0.8s;
        -o-animation: fromRight 0.8s;
        animation: fromRight 0.8s;
    }
</style>