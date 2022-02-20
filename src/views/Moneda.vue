<template>
    <div>
        <header-title title="Conversor de moneda"/>
        <Conversor/>
    </div>
</template>
<script>
import HeaderTitle from'../components/HeaderTitle.vue'
import Conversor from'../components/Conversor.vue'
export default {
    components:{
        HeaderTitle,
        Conversor
    }
}
</script>