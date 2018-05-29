<template>
  <form>
    <card>
      <div slot="header">
        <h4 class="card-title">
          Login Form
        </h4>
      </div>
      <div>
        <fg-input 
          v-validate="modelValidations.fullName"
          v-model="model.fullName"
          :error="getError('full name')"
          label="Full Name"
          required
          name="full name"/>

        <fg-input 
          v-validate="modelValidations.email"
          v-model="model.email"
          :error="getError('email')"
          label="Email address"
          required
          name="email"
          type="email"/>

        <fg-input 
          v-validate="modelValidations.password"
          v-model="model.password"
          :error="getError('password')"
          label="Passowrd"
          required
          name="password"
          type="password"/>
      </div>
      <div class="d-flex justify-content-center">
        <n-button 
          native-type="submit" 
          type="primary" 
          @click.native.prevent="validate">Login</n-button>
      </div>
    </card>
  </form>
</template>
<script>
export default {
  data() {
    return {
      model: {
        email: '',
        password: '',
        fullName: '',
      },
      modelValidations: {
        fullName: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          min: 5,
        },
      },
    }
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName)
    },
    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit('on-submit', this.registerForm, isValid)
      })
    },
  },
}
</script>
