import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDX5Qt4L94UqWc5015CZPPoJ0z_iJ1k-OY',
	authDomain: 'rn-uber-clone-eats.firebaseapp.com',
	projectId: 'rn-uber-clone-eats',
	storageBucket: 'rn-uber-clone-eats.appspot.com',
	messagingSenderId: '587289257815',
	appId: '1:587289257815:web:f9e9e4eb04427f3e578012',
	measurementId: 'G-3FD3VYEZ3Q',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();
export { firebase, db };
