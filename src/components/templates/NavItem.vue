<template>
  <li class="nav-item">
    <a href="" class="nav-link">
      <i class="fas" :class="icone"></i>
      <span class="link-text">{{ desc }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: ["icone", "desc"]
}
</script>