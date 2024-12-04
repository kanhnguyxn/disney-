import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "disneyplus-clone-d9858",
  // storageBucket: "disneyplus-clone-d9858.firebasestorage.app",
  storageBucket: "disneyplus-clone-d9858.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Khởi tạo Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Khởi tạo các dịch vụ Firebase
// getAuth và GoogleAuthProvider: Được sử dụng để xử lý xác thực, cụ thể là xác thực người dùng qua Google.
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// getFirestore: Khởi tạo Firestore của Firebase, một dịch vụ cơ sở dữ liệu NoSQL để lưu trữ dữ liệu.
const db = getFirestore(firebaseApp);
//getStorage: Khởi tạo Firebase Storage để lưu trữ và truy xuất nội dung do người dùng tạo ra (như hình ảnh, video, v.v.).
const storage = getStorage(firebaseApp);

// Export các dịch vụ Firebase
export { auth, provider, storage };
export default db;
