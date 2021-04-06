<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="v-model-multiple-checkboxes">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div>
      <input v-model.lazy="msg" />
      <div>实例：{{searchText}}</div>
      <custom-input  v-model="searchText"></custom-input>
    </div>
    <div>
      <alert-box>
        Something bad happened.
      </alert-box>
    </div>
  </div>
</template>
<style>
  .demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }
</style>

<script>
// @ is an alias to /src
import customInput from '@/components/customInput.vue'
import alertBox from '@/components/alertBox.vue'


export default {
  name: 'Home',
  components: {
    customInput,
    alertBox
  },
  data() {
    return {
      checkedNames: [],
      msg:'测试',
      searchText:'测试一下'
    }
  }
}
</script>
