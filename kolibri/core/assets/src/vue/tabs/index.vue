<template>

  <ui-tabs
    class="tabs"
    :type="type"
    :disableRipple="true"
    @tab-change="handleTabClick">
    <ui-tab
      v-for="item in items"
      :id="item.title"
      :title="item.title"
      :icon="item.icon"
      :selected="itemIsSelected(item)"
      :disabled="itemIsDisabled(item)"/>
  </ui-tabs>

</template>


<script>

  module.exports = {
    props: {
      // Array that contains objects consisting of title, icon, selected, disabled
      items: {
        type: Array,
      },
      type: {
        type: String,
        validator(type) {
          const validTypes = ['text', 'icon', 'icon-and-text'];
          return validTypes.includes(type);
        },
        default: 'icon-and-text',
      },
    },
    components: {
      'ui-tabs': require('keen-ui/src/UiTabs'),
      'ui-tab': require('keen-ui/src/UiTab'),
    },
    methods: {
      handleTabClick(tab_id) {
        this.$emit('tabclicked', tab_id);
      },
      itemIsSelected(item) {
        return item.selected && (item.selected === true);
      },
      itemIsDisabled(item) {
        return item.disabled && (item.disabled === true);
      },
    },
    mounted() {
      this.$nextTick(this.addTabListeners);
    },
    beforeDestroy() {
      // TODO: Remove event listeners
    },
  };

</script>


<style lang="stylus" scoped></style>


<style lang="stylus">

  // hide body of tabs
  .tabs > .ui-tabs__body
    display: none

</style>
