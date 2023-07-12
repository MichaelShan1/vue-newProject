<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model.trim="firstName.val" />
    </div>
    <div class="form-control">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model.trim="lastName.val" />
    </div>
    <div class="form-control">
      <label for="description">自我评价</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">小时收费</label>
      <input type="number" id="rate" v-model.number="hourlyRate.val" />
    </div>
    <div class="form-control">
      <h3>擅长领域</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
        />
        <label for="frontend"> 前端</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
        />
        <label for="backend"> 后端</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" />
        <label for="career"> 在职</label>
      </div>
    </div>
    <base-button>注册</base-button>
  </form>
  <hr class="line-break" />
  <!--element ui-->
  <div class="element-ui">
    <form-create
      v-model="value"
      v-model:api="fApi"
      :rule="rule"
      :option="option"
    ></form-create>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: {
        //data validation
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      hourlyRate: {
        //data validation
        val: '',
        isValid: true,
      },
      areas: {
        //data validation
        val: [],
        isValid: true,
      },
      formIsvalid: false,
      //element ui variables
      //实例对象
      fApi: {},
      //表单数据
      value: {},
      //表单生成规则
      rule: [
        {
          type: 'input',
          field: 'firstName',
          title: 'First Name',
          props: {
            type: 'text',
          },
          validate: [
            {
              required: true,
              min: 5,
              message: '最少五个字符',
            },
          ],
        },
        {
          type: 'input',
          field: 'lastName',
          title: 'Last Name',
          props: {
            type: 'text',
          },
          validate: [
            {
              required: true,
              min: 5,
              message: '最少五个字符',
            },
          ],
        },
        {
          type: 'textarea',
          field: 'description',
          title: '个人评价',
        },
        {
          type: 'inputNumber',
          field: 'hourlyRate',
          title: '每小时收费',
          validate: [
            {
              required: true,
              type: 'number',
              min: 1,
              message: '最小为1',
            },
          ],
        },
      ],
    };
  },

  emits: ['form-data'],
  methods: {
    submitForm() {
      //   this.validForm(); 提交前验证表单
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        des: this.description.val,
        rate: this.hourlyRate.val,
        areas: this.areas.val,
      };
      this.$emit('form-data', formData);
      this.$router.push({ path: '/' });
    },
    // validateForm() {
    //   //form validation
    //   this.formIsvalid = true;
    //   if (this.firstName.val === '') {
    //     this.firstName.isValid = false;
    //     this.formIsvalid = false;
    //   }
    // },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
.element-ui {
  margin-top: 3rem;
}
.line-break {
  margin-top: 3rem;
}
</style>
