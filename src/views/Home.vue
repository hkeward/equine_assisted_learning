<template>
  <div>
    <div id="home">
      <h1>Lindsay's Equine Assisted Learning</h1>
      <div id="description">
        <div id="description_text" class="flex_details">
          <p>
            Lindsay uses horse magic and Aristotle to make you feel better.
          </p>
        </div>
        <div id="main_image_container" class="flex_details">
          <img id="main_image" src="~@/assets/lindsay.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

#description {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
}

#description_text {
  flex: 2;
}

#main_image_container {
  flex: 1;
}

#main_image {
  min-width: 120px;
  max-width: 100%;
}
</style>
