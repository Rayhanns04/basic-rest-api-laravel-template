<template>
   <div>
       <router-view></router-view>
   </div>
</template>

<script>
import TransactionIndex from './Transaction/Index';

    export default {
        name: 'App',
        components: {
            TransactionIndex
        },
        data: () => ({
            idFromParams: this.$route.params.id
        })
    }
</script>
