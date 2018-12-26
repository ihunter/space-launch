<template>
  <v-card>
    <v-toolbar card extended>
      <h3>United Launch Alliance | Delta IV Heavy</h3>
      <div slot="extension" class="toolbar-extension">
        <p>Vandenberg AFB, CA, USA</p>
        <p>December 29, 2018 (Unconfirmed)</p>
      </div>
    </v-toolbar>

    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>

    <v-card-text>
      <v-divider />
      <div class="test">
        <p class="text-xs-center">
          Launch Date Unconfirmed
        </p>
      </div>
      <div>
        NROL-71
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed corrupti iste molestias architecto, quae delectus voluptates odio sint officiis repellendus tenetur est ut velit eum quisquam quaerat incidunt. Rerum, magni.
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
.toolbar-extension p {
  padding: 0;
  margin: 0;
}

.test {
  color: white;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 3px 5px #aaaaaa;
  width: 75%;
  background-color: red;
  position: relative;
  top: -10px;
}
</style>
