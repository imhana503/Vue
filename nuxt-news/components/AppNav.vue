<template>
    <nav class="nav">
        <ul class="nav__list">
            <li v-for="item in navItems" :key="item.idx" class="nav__list__item">{{ item.label }}</li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import type { Nav } from '../typs/nav';

const navItems = ref<Nav[]>([
    {
        idx: 0,
        label: "일반시사",
        value: "General",
        path: "general",
        isClicked: false,
    },
    {
        idx: 1,
        label: "비즈니스",
        value: "Business",
        path: "business",
        isClicked: false,
    },
    {
        idx: 2,
        label: "엔터테인먼트",
        value: "Entertainment",
        path: "entertainment",
        isClicked: false,
    },
    {
        idx: 3,
        label: "건강",
        value: "Health",
        path: "health",
        isClicked: false,
    },
    {
        idx: 4,
        label: "과학",
        value: "Science",
        path: "science",
        isClicked: false,
    },
    {
        idx: 5,
        label: "스포츠",
        value: "Sports",
        path: "sports",
        isClicked: false,
    },
    {
        idx: 6,
        label: "테크놀리지",
        value: "Technology",
        path: "technology",
        isClicked: false,
    },
]);

</script>

<style lang="scss" scoped>
.nav {
    @include flex-center;
    width: 100%;

    margin-top: 88px;

    &__list {
        @include flex-center;
        list-style: none;
        width: 100%;

        gap: 24px;

        &__item {
            @include flex-center;

            padding: 6px 12px;

            background-color: $color-gray-200;
            border-radius: 20px;
            text-decoration: none;
            color: $color-black-700;

            cursor: pointer;

            &.active {
                background-color: #494949;
                color: $color-white-000;
            }
        }
    }
}
</style>