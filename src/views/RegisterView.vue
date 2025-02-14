<template>
    <div class="auth-container">
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
        <input type="text" v-model="name" placeholder="Name" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const registerUser = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/auth/register/', {
        name: name.value,
        email: email.value,
        password: password.value
      });
      alert('Registration successful! You can now log in.');
      router.push('/login');
    } catch (error) {
      alert('Registration failed');
    }
  };
  </script>
  
  <style scoped>
  .auth-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  input, button {
    display: block;
    width: 100%;
    margin: 10px 0;
  }
  </style>