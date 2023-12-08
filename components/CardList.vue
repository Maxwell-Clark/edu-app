<template>
  <div class="card-list">
    <div class="card-list-container">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <div class="card-header">
          <slot name="header" :card="card"></slot>
        </div>
        <div class="card-body">
          <slot :card="card"></slot>
        </div>
        <div class="card-footer">
          <slot name="footer" :card="card"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-list {
  overflow-x: auto;
  white-space: nowrap;
}

.card-list-container {
  display: flex;
  padding: 16px;
  gap: 16px;
}
</style>