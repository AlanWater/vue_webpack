<template>
    <div id="app">
        <div>{{myfirstVue}}</div>
        <router-link to="/test1/:1234">{{toFirstVue}}</router-link>
        <router-link to="/test2">{{toSecondVue}}</router-link>
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
                toFirstVue:'toFirstVue donts 123',
                toSecondVue:'toSecondVue'
            }
        },
        components:{

        }
    }
</script>