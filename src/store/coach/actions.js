export default {
  registerCoach({ commit, state }, data) {
    const id = state.coaches.length + 1;
    const coachData = {
      id: 'c' + id, // access the state length within action
      firstName: data.first,
      lastName: data.last,
      description: data.des,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    commit('mutateCoach', coachData);
  },
};
