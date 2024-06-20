<script setup>

</script>

<template>
    <VNavigation-drawer
        expand-on-hover
        rail
    >
        <VList>
            <VListItem
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                subtitle="limhana@gmailcom"
                title="hana Lim"
            ></VListItem>
        </VList>
  
        <VDivider/>

        <VList density="compact" nav>
          <VList-item prepend-icon="mdi-folder" title="Color Gallery" value="color"/>
          <VList-item prepend-icon="mdi-dialpad" title="Grayspace Gallery" value="color"/>
        </VList>

    </VNavigation-drawer>
</template>

<style>

</style>

