<template>
  <div>
    <label v-bind="propsLabel" class="sr-only">{{ title }}</label>
    <input v-model="input"
      v-bind="propsInput"
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
      />
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty'

export default {
  name: 'TheInput',
  props: {
    modelValue: {},
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String
    }
  },
  data: () => ({
    input: null
  }),
  computed: {
    title () {
      const { label, placeholder } = this
      if (isEmpty(label)) {
        return placeholder
      }

      return label
    },
    propsInput () {
      const { type, id, name, label, placeholder, required, autocomplete } = this

      const bind = {
        type,
        required,
        autocomplete,
        placeholder
      }

      if (!isEmpty(id)) {
        bind['id'] = id
      }
      if (!isEmpty(name)) {
        bind['name'] = name
      }
      if (isEmpty(label)) {
        bind['label'] = placeholder
      }

      return bind
    },
    propsLabel () {
      const { id } = this

      if (isEmpty(id)) {
        return {}
      }

      return {for: id}
    }
  },
  mounted () {
    this.input = this.modelValue
  },
  watch: {
    input: function () {
      this.$emit('update:modelValue', this.input)
    }
  },
  $emits: ['update:modelValue']
}
</script>
