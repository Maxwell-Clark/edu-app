<template>
  <div class="explore-page">
    <div class="center-container">
      <!-- Search Bar -->
      <div class="search-bar">
        <TextInput
            v-model="searchQuery"
            placeholder="Search for topics or instructors"
            size="large"
            class="search-input"
        />
        <Button @click="search"  size="medium">Search</Button>
      </div>

      <!-- Card Lists -->
      <div class="card-lists">
        <div class="card-list">
          <h2>Popular Topics</h2>
          <CardList :cardData="popularTopics" />
        </div>
        <div class="card-list">
          <h2>Featured Instructors</h2>
          <CardList :cardData="featuredInstructors" />
        </div>
        <div class="card-list">
          <h2>New Arrivals</h2>
          <CardList :cardData="newArrivals" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.explore-page {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full viewport height */
}

.center-container {
  text-align: center; /* Center inner content */
}

/* Add your other styles here */

</style>
