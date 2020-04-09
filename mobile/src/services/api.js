import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333',
});

export default api;


/**
 * Android emulator: localhost (adb reverse)
 * Android emulator: 10.0.2.2 (Android Studio)
 * Android dispositivo físico (ip da maquina)
 */