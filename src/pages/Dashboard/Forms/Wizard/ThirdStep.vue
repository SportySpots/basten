<template>
  <div class="row justify-content-center">
    <div class="col-sm-12">
      <h5 class="info-text"> Are you living in a nice area? </h5>
    </div>
    <div class="col-sm-7">
      <fg-input
        v-validate="modelValidations.street"
        v-model="model.street"
        :error="getError('street name')"
        label="Street Name"
        name="street name"/>
    </div>
    <div class="col-sm-3">
      <fg-input
        v-validate="modelValidations.streetNo"
        v-model="model.streetNo"
        :error="getError('street number')"
        label="Street No"
        name="street number"/>
    </div>
    <div class="col-sm-5">
      <fg-input
        v-validate="modelValidations.city"
        v-model="model.city"
        :error="getError('city')"
        label="City"
        name="city"/>
    </div>
    <div class="col-sm-5">
      <label>Country</label>
      <fg-input :error="getError('country')">
        <el-select
          v-validate="modelValidations.country"
          v-model="model.country"
          class="select-primary"
          name="country">
          <el-option
            v-for="country in countryOptions"
            :label="country"
            :value="country"
            :key="country"
            class="select-primary"/>
        </el-select>
      </fg-input>
    </div>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'
export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      model: {
        street: '',
        streetNo: '',
        city: '',
        country: '',
      },
      countryOptions: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
      modelValidations: {
        street: {
          required: true,
          min: 5,
        },
        streetNo: {
          required: true,
          min: 5,
        },
        city: {
          required: true,
        },
        country: {
          required: true,
        },
      },
    }
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName)
    },
    validate() {
      return this.$validator.validateAll().then(res => {
        this.$emit('on-validated', res, this.model)
        return res
      })
    },
  },
}
</script>
