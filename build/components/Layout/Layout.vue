<template>
    <div class="layout">
        <div class="layout__container" :class="{ 'container': type !== 'wide' }">
            <slot name="content" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'layout',
    props: {
        type: String,
        default: 'one-column'
    },
    mounted() {
        console.log('layout ok');
    }
}
</script>

<style lang="scss">
.layout {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;

    &__container {
        flex-grow: 1;
        overflow: hidden;
    }
}
</style>
