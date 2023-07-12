<template>
  <section>
    <base-card>
      <h2>加入我们</h2>
      <CoachForm @form-data="handleForm"></CoachForm>
    </base-card>
  </section>
</template>
<script>
import CoachForm from '../coaches/CoachForm.vue';
export default {
  components: { CoachForm },
  data() {
    return {};
  },
  methods: {
    handleForm(data) {
      this.$store.dispatch('coaches/registerCoach', data);
    },
  },
};
</script>
