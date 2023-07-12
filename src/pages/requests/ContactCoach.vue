<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="emial">你的邮箱地址</label>
      <input type="email" id="emial" v-model.trim="email" />
    </div>
    <div>
      <label for="message">内容</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <p class="error" v-if="!formIsvalid">请输入正确的邮箱地址内容不能为空</p>
    <div class="actions">
      <base-button> 发送请求</base-button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsvalid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsvalid = true;
      if (
        this.email === '' ||
        !this.email.includes('@' || this.message === '')
      ) {
        this.formIsvalid = false;
        return;
      }
      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: '$this.route.params.id',
      });
      this.$router.replace('/requests');
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
  margin-top: 2rem;
}
</style>
