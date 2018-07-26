<template>
  <div>
    <test-form :fieldNameName='testFormFieldNameName' 
               :fieldNameMobile='testFormFieldNameMobile'
               :fieldNameEmail='testFormFieldNameEmail'
               ></test-form>
    <br/>
    <test-store msg="Welcome to Your Vue.js App"></test-store>
    <br/>
    <alias-field :fieldName='aliasFieldName'></alias-field>
  </div>
</template>

<script>
// @ is an alias to /src
import TestForm from '@/components/TestForm.vue'
import TestStore from '@/components/TestStore.vue'
import AliasField from '@/components/AliasField.vue'

export default {
  components: {
    TestForm,
    TestStore,
    AliasField
  },

  data () {
    return {
      aliasFieldName: 'Alias',
      nameFieldName: 'Name',
      testFormFieldNameName: 'Name',
      testFormFieldNameMobile: 'Mobile',
      testFormFieldNameEmail: 'Email'
    }
  }
}
</script>
