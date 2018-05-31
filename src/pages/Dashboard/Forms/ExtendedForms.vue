<template>
  <div class="extended-forms">
    <div class="row">
      <div class="col-md-4">
        <card>
          <h4
            slot="header"
            class="card-title">Datetimepicker</h4>
          <fg-input>
            <el-date-picker
              v-model="dateTimePicker"
              type="datetime"
              placeholder="Date Time Picker"/>
          </fg-input>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <h4
            slot="header"
            class="card-title">Date Picker</h4>
          <fg-input>
            <el-date-picker
              v-model="datePicker"
              type="date"
              placeholder="Date Picker"/>
          </fg-input>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <h4
            slot="header"
            class="card-title">Time Picker</h4>
          <fg-input>
            <el-time-select
              v-model="timePicker"
              placeholder="Time Picker"/>
          </fg-input>
        </card>
      </div>
    </div>
    <card>
      <div class="col-12">
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Toggle Buttons</h4>
            <div class="row">
              <div class="col-md-4">
                <p class="category">Default</p>
                <n-switch
                  v-model="switches.defaultOn"
                  type="primary"
                  on-text="ON"
                  off-text="OFF"/>
                <n-switch
                  v-model="switches.defaultOff"
                  type="primary"
                  on-text="ON"
                  off-text="OFF"/>
              </div>
              <div class="col-md-4">
                <p class="category">Plain</p>
                <n-switch v-model="switches.plainOn"/>
                <n-switch v-model="switches.plainOff"/>

              </div>
              <div class="col-md-4">
                <p class="category">With Icons</p>
                <n-switch v-model="switches.withIconsOn">
                  <i
                    slot="on"
                    class="now-ui-icons ui-1_check"/>
                  <i
                    slot="off"
                    class="now-ui-icons ui-1_simple-remove"/>
                </n-switch>
                <n-switch v-model="switches.withIconsOff">
                  <i
                    slot="on"
                    class="now-ui-icons ui-1_check"/>
                  <i
                    slot="off"
                    class="now-ui-icons ui-1_simple-remove"/>
                </n-switch>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h4 class="card-title">Customisable Select</h4>
            <div class="row">
              <div class="col-md-6">
                <el-select
                  v-model="selects.simple"
                  class="select-primary"
                  size="large"
                  placeholder="Single Select">
                  <el-option
                    v-for="option in selects.countries"
                    :value="option.value"
                    :label="option.label"
                    :key="option.label"
                    class="select-primary"/>
                </el-select>
              </div>
              <div class="col-md-6">
                <el-select
                  v-model="selects.multiple"
                  multiple
                  class="select-info"
                  size="large"
                  collapse-tags
                  placeholder="Multiple Select">
                  <el-option
                    v-for="option in selects.countries"
                    :value="option.value"
                    :label="option.label"
                    :key="option.label"
                    class="select-info"/>
                </el-select>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Tags</h4>

            <el-tag
              v-for="tag in tags.dynamicTags"
              :key="tag"
              :closable="true"
              :close-transition="false"
              size="small"
              type="danger"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>

            <input
              ref="saveTagInput"
              v-model="tags.inputValue"
              type="text"
              placeholder="New Tag"
              class="form-control input-new-tag"
              size="mini"
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm">
          </div>
          <div class="col-md-6">
            <h4 class="card-title">Dropdown &amp; Dropup</h4>

            <div class="row">
              <div class="col-xl-4 col-md-6">
                <drop-down>
                  <n-button
                    slot="title"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="primary"
                    block
                    round>
                    Dropdown
                  </n-button>
                  <h6 class="dropdown-header">Dropdown header</h6>
                  <a
                    class="dropdown-item"
                    href="#">Action</a>
                  <a
                    class="dropdown-item"
                    href="#">Another action</a>
                  <a
                    class="dropdown-item"
                    href="#">Something else here</a>
                </drop-down>
              </div>

              <div class="col-xl-4 col-md-6">
                <drop-down direction="up">
                  <n-button
                    slot="title"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="primary"
                    block
                    round>
                    Dropup
                  </n-button>
                  <h6 class="dropdown-header">Dropdown header</h6>
                  <a
                    class="dropdown-item"
                    href="#">Action</a>
                  <a
                    class="dropdown-item"
                    href="#">Another action</a>
                  <a
                    class="dropdown-item"
                    href="#">Something else here</a>
                </drop-down>
              </div>
            </div>

          </div>

        </div>
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Progress Bars</h4>
            <n-progress
              :value="25"
              label="Default"
              show-value/>
            <n-progress
              :value="60"
              label="Primary"
              type="primary"
              show-value/>
          </div>
          <div class="col-md-6">
            <h4 class="card-title">Sliders</h4>
            <slider v-model="sliders.simple"/>
            <br>
            <slider
              v-model="sliders.rangeSlider"
              :connect="true"
              type="primary"/>
            <br>
          </div>
        </div>
      </div>
    </card> <!-- end card -->
  </div>
</template>

<script>
import {
  TimeSelect,
  DatePicker,
  Tag,
  Input,
  Button,
  Select,
  Option,
} from 'element-ui'
import {
  Progress,
  Switch,
  FormGroupInput as FgInput,
  Slider,
} from '@components/index'

export default {
  components: {
    FgInput,
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button,
    [Option.name]: Option,
    [Select.name]: Select,
    [Switch.name]: Switch,
    [Progress.name]: Progress,
    Slider,
  },
  data() {
    return {
      enabledRadio: '2',
      disabledRadio: '2',
      switches: {
        defaultOn: true,
        defaultOff: false,
        plainOn: true,
        plainOff: false,
        withIconsOn: true,
        withIconsOff: false,
      },
      sliders: {
        simple: 30,
        rangeSlider: [20, 60],
      },
      selects: {
        simple: '',
        countries: [
          { value: 'Bahasa Indonesia', label: 'Bahasa Indonesia' },
          { value: 'Bahasa Melayu', label: 'Bahasa Melayu' },
          { value: 'Català', label: 'Català' },
          { value: 'Dansk', label: 'Dansk' },
          { value: 'Deutsch', label: 'Deutsch' },
          { value: 'English', label: 'English' },
          { value: 'Español', label: 'Español' },
          { value: 'Eλληνικά', label: 'Eλληνικά' },
          { value: 'Français', label: 'Français' },
          { value: 'Italiano', label: 'Italiano' },
          { value: 'Magyar', label: 'Magyar' },
          { value: 'Nederlands', label: 'Nederlands' },
          { value: 'Norsk', label: 'Norsk' },
          { value: 'Polski', label: 'Polski' },
          { value: 'Português', label: 'Português' },
          { value: 'Suomi', label: 'Suomi' },
          { value: 'Svenska', label: 'Svenska' },
          { value: 'Türkçe', label: 'Türkçe' },
          { value: 'Íslenska', label: 'Íslenska' },
          { value: 'Čeština', label: 'Čeština' },
          { value: 'Русский', label: 'Русский' },
          { value: 'ภาษาไทย', label: 'ภาษาไทย' },
          { value: '中文 (简体)', label: '中文 (简体)' },
          { value: 'W">中文 (繁體)', label: 'W">中文 (繁體)' },
          { value: '日本語', label: '日本語' },
          { value: '한국어', label: '한국어' },
        ],
        multiple: 'ARS',
      },
      tags: {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: '',
      },
      datePicker: '',
      dateTimePicker: '',
      timePicker: '',
    }
  },
  methods: {
    handleClose(tag) {
      this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.tags.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      let inputValue = this.tags.inputValue
      if (inputValue) {
        this.tags.dynamicTags.push(inputValue)
      }
      this.tags.inputVisible = false
      this.tags.inputValue = ''
    },
  },
}
</script>

<style>
.extended-forms .el-select {
  width: 100%;
  margin-bottom: 30px;
}

.extended-forms .progress {
  margin-bottom: 30px;
}
</style>
