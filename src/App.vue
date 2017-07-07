<template>
    <div id="app" class="middle">
        <div>{{myfirstVue}}</div>
        <router-link class="link_demo" to="/test1">{{toFirstVue}}</router-link>
        <router-link class="link_demo" to="/test2">{{toSecondVue}}</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>


    export default{
        name:'app',
        data(){
            return {
                myfirstVue:'hellow vue!',
                toFirstVue:'toFirstVue donts',
                toSecondVue:'toSecondVue'
            }
        },
        components:{

        }
    }


</script>