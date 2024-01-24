<template class="bg-[#1f2937]">
  <div class="bg-[#1f2937] h-screen flex justify-center align-bottom">
    <div class="align-baseline flex flex-col justify-center items-center">
      <h1 class="my-4 text-5xl text-white font-bold leading-tight mb-8">
        Profile Settings
      </h1>
      <MazCard>
        <template class="flex flex-col justify-center items-center" #title>
          <!-- You can add a title here if needed -->
        </template>
        <template #content>
          <form @submit.prevent="updateProfile" class="flex flex-col justify-center items-center">
            <div class="mb-4">
              <label for="profile-pic" class="block mb-2">Profile Picture:</label>
              <input type="file" id="profile-pic" @change="onFileChange" />
              <img v-if="profilePic" :src="profilePic" alt="Profile Picture" class="mt-2" />
            </div>
            <MazInput v-model="accountName" label="Account Name" type="text" placeholder="Your Name" size='lg' class="mb-4" />
            <Button type="submit" >Update Profile</Button>
          </form>
          <div class="mt-5 flex justify-center">
            <Button @click="resetPassword">Reset Password</Button>
          </div>
        </template>
      </MazCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'maz-ui';
import {useUserStore} from "~/stores/userStore.js";
const userStore = useUserStore()

let accountName = userStore.name;
const profilePic = ref(null);

const onFileChange = (e) => {
  const files = e.target.files;
  if (files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePic.value = e.target.result;
    };
    reader.readAsDataURL(files[0]);
  }
};

const changeName = () => {
  userStore.setAcctName(accountName)
}

const updateProfile = () => {
  // Add logic to update profile
  changeName()
  useToast().success('Profile updated successfully');
};

const resetPassword = () => {
  // Add logic to reset password
  useToast().info('Password reset link sent');
};

</script>

<style scoped>
img {
  max-width: 100px;
  max-height: 100px;
}
</style>
