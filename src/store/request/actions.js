export default {
  contactCoach({ commit, state }, data) {
    const id = state.requests.length + 1;
    const newRequest = {
      id: id,
      coachId: data.id,
      userEmail: data.email,
      message: data.message,
    };
    commit('addRequest', newRequest);
  },
};
