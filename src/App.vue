<script setup>
import { NavBar } from './components';

</script>
<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="container-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>


<style>
  @import './assets/base.css';
  </style>