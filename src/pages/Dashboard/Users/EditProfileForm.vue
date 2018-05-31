<template>
  <card>
    <h5
      slot="header"
      class="title">Edit Profile</h5>
    <form>
      <div class="row">
        <div class="col-md-5">
          <fg-input
            :disabled="true"
            v-model="user.company"
            type="text"
            label="Company"
            placeholder="Paper dashboard"/>
        </div>
        <div class="col-md-3">

          <fg-input
            v-model="user.username"
            type="text"
            label="Username"
            placeholder="Username"/>
        </div>
        <div class="col-md-4">
          <fg-input
            v-model="user.email"
            type="email"
            label="Username"
            placeholder="Email"/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <fg-input
            v-model="user.firstName"
            type="text"
            label="First Name"
            placeholder="First Name"/>
        </div>
        <div class="col-md-6">
          <fg-input
            v-model="user.lastName"
            type="text"
            label="Last Name"
            placeholder="Last Name"/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <fg-input
            v-model="user.address"
            type="text"
            label="Address"
            placeholder="Home Address"/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <fg-input
            v-model="user.city"
            type="text"
            label="City"
            placeholder="City"/>
        </div>
        <div class="col-md-4">
          <fg-input
            v-model="user.country"
            type="text"
            label="Country"
            placeholder="Country"/>
        </div>
        <div class="col-md-4">
          <fg-input
            v-model="user.postalCode"
            label="Postal Code"
            placeholder="ZIP Code"/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <fg-input label="About Me">
            <textarea
              v-model="user.aboutMe"
              class="form-control"
              placeholder="ZIP Code"/>
          </fg-input>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
export default {
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: '',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`,
      },
    }
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user))
    },
  },
}
</script>
