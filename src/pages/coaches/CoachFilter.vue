<template>
  <base-card>
    <h2>Find your coach</h2>
    <span class="filter-option">
      <input
        type="checkbox"
        class="type"
        id="frontend"
        checked
        @change="setFileter"
      />
      <label for="frontend">前端</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        class="type"
        id="backend"
        checked
        @change="setFileter"
      />
      <label for="backend">后端</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        class="type"
        id="career"
        checked
        @change="setFileter"
      />
      <label for="career">在职</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFileter(event) {
      const inputId = event.target.id; //have access to the input id that being clicked
      const isActive = event.target.checked; //true or false
      const updatedFilter = {
        ...this.filter,
        [inputId]: isActive, // e.g: frontend: true
      };
      this.filter = updatedFilter;
      this.$emit('change-filter', updatedFilter);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
input[type='checkbox']:checked + label {
  color: dodgerblue;
}
</style>
