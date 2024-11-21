import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importar las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
// TODO: Añadir los SDKs de Firebase que quieras usar (opcional)

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyCwHxQLKrD-Hv0NbKc4utJgenZxztCsgiM",
  authDomain: "login-agrn17.firebaseapp.com",
  projectId: "login-agrn17",
  storageBucket: "login-agrn17.firebasestorage.app",
  messagingSenderId: "236726055348",
  appId: "1:236726055348:web:1d1148aed101767cc142e1"
};

// Inicializar Firebase
initializeApp(firebaseConfig);

// Crear la aplicación Vue
const app = createApp(App);

// Usar el enrutador
app.use(router);

// Montar la aplicación en el elemento con id "app"
app.mount('#app');
