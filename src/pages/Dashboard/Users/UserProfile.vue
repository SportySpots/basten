<template>
  <div class="row">
    <div class="col-lg-8 col-md-7">
      <edit-profile-form/>
    </div>
    <div class="col-lg-4 col-md-5">
      <user-card/>
    </div>
  </div>
</template>

<script>
import EditProfileForm from './EditProfileForm.vue'
import UserCard from './UserCard.vue'

export default {
  components: {
    EditProfileForm,
    UserCard,
  },
}
</script>
