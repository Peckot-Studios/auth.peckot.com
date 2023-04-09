import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseui from 'firebaseui';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGdxWXlnp3bymQ4uU591NcNAdNncq1D7M",
    authDomain: "peckot-studios.firebaseapp.com",
    projectId: "peckot-studios",
    storageBucket: "peckot-studios.appspot.com",
    messagingSenderId: "1092681185026",
    appId: "1:1092681185026:web:8d57daacb1e2646ad5f41b",
    measurementId: "G-TCB3D0QJ34"
};

// 初始化 Firebase 实例
firebase.initializeApp(firebaseConfig);

// 初始化 FirebaseUI
const ui = new firebaseui.auth.AuthUI(firebase.auth());

// FirebaseUI 配置选项
const uiConfig = {
    signInSuccessUrl: 'https://bing.com', // 登录成功后跳转的页面
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID, // 邮箱登录
        firebase.auth.GoogleAuthProvider.PROVIDER_ID, // Google 登录
    ],
};

// 将 FirebaseUI 组件挂载到页面上
ui.start('#auth-container', uiConfig);
