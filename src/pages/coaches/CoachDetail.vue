<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }} /小时</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header class="center">
        <h2>联系我吧</h2>
        <base-button class="btn" link :to="contactLink">预约请求</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="center">
        <base-badge
          v-for="area in selectedCoach.areas"
          :key="area"
          :type="area"
          :text="area"
        ></base-badge>
      </div>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      const coach = this.selectedCoach;
      return coach.firstName + ' ' + coach.lastName;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style scoped>
h2,
h3 {
  text-align: center;
}
p {
  margin-top: 1.5rem;
  text-align: center;
}
.center {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
