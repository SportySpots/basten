<template>
  <form class="form-horizontal">
    <card>
      <h4
        slot="header"
        class="card-title">
        Type Validation
      </h4>
      <div>
        <div class="row">
          <label class="col-sm-2 col-form-label">Requred Text</label>
          <div class="col-sm-7">
            <fg-input
              v-validate="modelValidations.required"
              v-model="model.required"
              :error="getError('required')"
              name="required"/>
          </div>
          <label class="col-sm-3 label-on-right"><code>required="true"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-7">
            <fg-input
              v-validate="modelValidations.email"
              v-model="model.email"
              :error="getError('email')"
              name="email"/>
          </div>
          <label class="col-sm-3 label-on-right"><code>email="true"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Number</label>
          <div class="col-sm-7">
            <fg-input
              v-validate="modelValidations.number"
              v-model="model.number"
              :error="getError('number')"
              name="number"/>
          </div>
          <label class="col-sm-3 label-on-right"><code>numeric="true"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Url</label>
          <div class="col-sm-7">
            <fg-input
              v-validate="modelValidations.url"
              v-model="model.url"
              :error="getError('url')"
              name="url"/>
          </div>
          <label class="col-sm-3 label-on-right"><code>url="true"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Url</label>
          <div class="col-sm-3">
            <fg-input
              v-validate="modelValidations.equalToSource"
              v-model="model.equalToSource"
              :error="getError('equalToSource')"
              name="equalToSource"
              placeholder="Source field"/>
          </div>
          <div class="col-sm-3">
            <fg-input
              v-validate="modelValidations.equalToDest"
              v-model="model.equalToDest"
              :error="getError('equalToDest')"
              name="equalToDest"
              placeholder="Destination field"/>
          </div>

          <label class="col-sm-4 label-on-right"><code>confirmed="equalToSource"</code></label>
        </div>

      </div>
      <div class="text-center">
        <n-button
          native-type="submit"
          type="primary"
          @click.native.prevent="validate">Validate inputs</n-button>
      </div>

    </card>
  </form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        required: '',
        email: '',
        number: '',
        equalToSourceurl: '',
        equalToSource: '',
        equalToDest: '',
      },
      modelValidations: {
        required: {
          required: true,
        },
        email: {
          email: true,
        },
        number: {
          numeric: true,
        },
        url: {
          url: true,
        },
        equalToSource: {
          required: true,
        },
        equalToDest: {
          required: true,
          confirmed: 'equalToSource',
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
