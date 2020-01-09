<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form>
          <v-text-field label="Email" type="email"></v-text-field>
          <v-select
            label="Which browser do you use?"
            :items="browsers"
            v-model="currentBrowser"
          />
          <template v-if="currentBrowser==='Cash' || currentBrowser==='Student'">
            <v-file-input label="Attach profile picture"></v-file-input>
            <v-text-field
              v-model="birthday"
              label="Birthday"
              readonly
            ></v-text-field>
            <v-date-picker v-model="birthday"></v-date-picker>
            <template v-if="currentBrowser==='Student'">
              <v-checkbox label="Agree to terms &amp; conditions"></v-checkbox>
            </template>
          </template>
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    birthday: '',
    browsers: ['Cash', 'Split', 'Wargaming', 'Student'],
    currentBrowser: ''
  }),
}
</script>
