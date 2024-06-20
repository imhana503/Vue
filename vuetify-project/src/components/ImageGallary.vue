<script setup>

</script>

<template>
    <VRow
        align="start"
      >
        <VCol
            v-for="n in 100"
            cols="4"
        >
            <Vcard>
                <VImg   
                    :src="`https://picsum.photos/500/300?image=${n*5+10}`"
                    aspect-ratio="1"
                    cover
                >
                    <template v-slot:placeholder>
                        <VRow
                            class="align-center justify-center fill-height"
                        >
                            <v-progress-circular
                            color="grey-lighten-4"
                            indeterminate
                            />
                        </VRow>
                    </template>
                </VImg>
            </Vcard>
        </VCol>
    </VRow>
</template>

<style>

</style>

