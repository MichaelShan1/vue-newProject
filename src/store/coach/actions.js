export default {
  async registerCoach({ commit, state }, data) {
    const id = 'c' + (state.coaches.length + 1);
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.des,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const response = await fetch(
      `https://vue-coach-f55f5-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );
    // const responseData = await response.json();
    if (!response.ok) {
      //error...
    }
    commit('mutateCoach', { ...coachData, id: id });
  },
  async fetchCoach({ commit }) {
    const response = await fetch(
      `https://vue-coach-f55f5-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      //error...
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    commit('setCoach', coaches);
  },
};
