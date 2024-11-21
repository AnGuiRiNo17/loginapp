<template>
  <div class="register-container">
    <div class="register-box">
      <h1 class="title">Create an Account</h1>
      <div class="form-group">
        <input 
          type="text" 
          placeholder="Email" 
          v-model="email"
          class="input-field"
        />
      </div>
      <div class="form-group">
        <input 
          type="password" 
          placeholder="Password" 
          v-model="password"
          class="input-field"
        />
      </div>
      <div class="button-group">
        <button @click="register" class="submit-btn">Submit</button>
        <button @click="signInWithGoogle" class="google-btn">
          Sign In With Google
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"; // import router

const email = ref("");
const password = ref("");
const router = useRouter(); // get a reference to our vue router

const register = () => { // corrected function name
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
        console.log("Successfully registered");
        router.push('/feed'); // corrected method to push
    })
    .catch((error) => {
        console.log(error.code);
    });
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.register-box {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.title {
  color: #333;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #4a90e2;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.submit-btn, .google-btn {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn {
  background-color: #4a90e2;
  color: white;
}

.submit-btn:hover {
  background-color: #357abd;
}

.google-btn {
  background-color: #fff;
  color: #757575;
  border: 1px solid #ddd;
}

.google-btn:hover {
  background-color: #f5f5f5;
}
</style>