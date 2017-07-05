<template>
    <div class="fadeFromRight">5678</div>
</template>
<style>
    @-webkit-keyframes fromRight{
        0%{
            left:20px;
            opacity: 0.2;
        }
        100%{
            left:8px;
            opacity: 1;
        }
    }
    .fadeFromRight{
        width:200px;
        height:200px;
        background-color:#ddd;
        position:absolute;
        -webkit-animation: fromRight 0.8s;
        -moz-animation: fromRight 0.8s;
        -ms-animation: fromRight 0.8s;
        -o-animation: fromRight 0.8s;
        animation: fromRight 0.8s;
    }    
</style>