<template>
  <CoachFilter @change-filter="filterList"></CoachFilter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">刷新</base-button>
        <base-button link to="/register">加入我们</base-button>
      </div>
      <ul v-if="hasCoach">
        <CoachItem
          v-for="coach in filteredCoach"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
          :rate="coach.hourlyRate"
        ></CoachItem>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../component/CoachItem.vue';
import CoachFilter from '../coaches/CoachFilter.vue';

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoach() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilter.frontend && coach.areas.includes('frontend')) {
          return true; // return true to keep this current coach inside of our array
        }
        if (this.activeFilter.backend && coach.areas.includes('backend')) {
          return true; // return true to keep this current coach inside of our array
        }
        if (this.activeFilter.career && coach.areas.includes('career')) {
          return true; // return true to keep this current coach inside of our array
        }
        return false;
      });
    },
    hasCoach() {
      return this.$store.getters['coaches/hasCoach'];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    filterList(data) {
      this.activeFilter = data;
    },
    loadCoaches() {
      this.$store.dispatch('coaches/fetchCoach');
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
