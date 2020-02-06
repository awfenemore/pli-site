<template>
    <svg class="pli-menu-button" viewbox="0 0 190 62" width="190" height="62" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 31 L5 31 Q10 31 15 21 L20 11 Q25 1 30 1 L160 1 Q165 1 170 11 L175 21 Q180 31 185 31 L190 31" 
        class="pli-menu-button-border"/>
      <path d="M0 31 L5 31 Q10 31 15 41 L20 51 Q25 61 30 61 L160 61 Q165 61 170 51 L175 41 Q180 31 185 31 L190 31" 
        class="pli-menu-button-border"/>
      <text x="95" y="39" class="pli-menu-button-text" font-size="20" font-weight="600" font-family="Montserrat, Arial, sans-serif" text-anchor="middle">{{buttonText}}</text>
    </svg>
</template>

<script>
export default {
  name: "PliMenuButton",
  props: {
      buttonText: String,
      textFill: String,
      borderColour: String,
      borderWidth: Number
  }
};
</script>
<style lang="scss" src="../../styles/micro/PliMenuButtons.scss"></style>