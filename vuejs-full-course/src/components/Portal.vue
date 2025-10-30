<script setup>
const { hello, handleCloseModal } = defineProps({
  hello: String,
  handleCloseModal: Function
});
</script>

<template> 
  <Teleport to="#portal">
    <!--
      현재 컴포넌트의 DOM 트리 바깥으로 HTML을 렌더링할 수 있게 해주는 Vue의 내장 컴포넌트. 
      즉, Vue 컴포넌트 구조는 그대로 유지하면서도, 실제 렌더링 위치를 다른 곳으로 “텔레포트”시키는 역할
      
        | 속성         | 설명                                    | 예시                                          |
      | ---------- | ------------------------------------- | ------------------------------------------- |
      | `to`       | 이동할 DOM 위치를 지정 (CSS 선택자 사용 가능)        | `to="#portal"` / `to="body"`                |
      | `disabled` | `true`일 경우 텔레포트 기능 비활성화 → 원래 위치에 렌더링됨 | `<Teleport :disabled="true">...</Teleport>` |
    -->

    <div class="portal-container">
      <div class="portal-container">
        <div role="button" tabindex="0" @click="handleCloseModal" class="portal-underlay"></div>
        <div class="portal-content">
           <slot/>
        </div>
      </div>      
    </div>    
  </Teleport>
</template>

<style scoped>
.portal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
}
.portal-underlay {
  position: absolute;
  inset: 0; /*네 개 속성을 한꺼번에 지정. 즉, 모든 방향의 오프셋(top/right/bottom/left) 을 0으로 설정 */
  background: var(--background-primary);
  opacity: 0.7;
  z-index: 999;
  border: none;
  padding: none;
}

.portal-content {
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 90vw;
  max-height: 80vh;
  display: grid;
  place-items: center; /* align-items: center; justify-items: center;  즉, 수직 방향(align-items) → 가운데 수평 방향(justify-items) → 가운데 이렇게 두 방향 모두 중앙 */
  background: var(--background-primary);
  border-radius: var(--border-radius-small);
  padding: 1rem;
  border: 1px solid var(--background-muted);
}
</style>