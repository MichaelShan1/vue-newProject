<template>
  <section>
    <base-card>
      <header>
        <h2>已收到的请求</h2>
      </header>
      <ul v-if="hasRequest">
        <RequestItem
          v-for="requst in receivedRequests"
          :key="requst.id"
          :email="requst.userEmail"
          :message="requst.message"
        ></RequestItem>
      </ul>
      <h3 v-else>目前没有请求</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from './RequestItem.vue';
export default {
  components: { RequestItem },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/getRequest'];
    },
    hasRequest() {
      return this.$store.getters['requests/hasRequest'];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
