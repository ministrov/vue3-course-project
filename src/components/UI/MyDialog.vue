<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
  name: 'MyDialog',
  mixins: [toggleMixin],
  mounted() {
    console.log('dialog mounted')
  }
}
</script>

<style>
.dialog {
  position:fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog__content {
  min-height: 50px;
  min-width: 300px;
  margin: auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background: white;
  border-radius: 12px;
}
</style>