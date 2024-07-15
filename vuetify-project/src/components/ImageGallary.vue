<script setup>

</script>

<template>
    <VCard class="ma-5">
        <VRow
            align="start"
        >
            <VCol
                v-for="n in 200"
                cols="4"
                sm="3"
                md="2"
                lg="1"
            >
                <Vcard>
                    <VImg   
                        :src="`https://picsum.photos/500/300?image=${n*5+10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n*5+10}`"
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
        </VRow>2
    </VCard>
</template>

<style>

</style>

