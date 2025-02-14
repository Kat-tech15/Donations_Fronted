<template>
    <div class="auth-container">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const loginUser = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        email: email.value,
        password: password.value
      });
      localStorage.setItem('token', response.data.access);
      router.push('/profile');
    } catch (error) {
      alert('Invalid credentials');
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