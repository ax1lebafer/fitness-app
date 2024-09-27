import { LoginType, SigninType } from "@/types/sign";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/config";

export async function fetchUser({ email, password }: LoginType) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const user = response.user;
      console.log("user: ", user);
      return user;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

export async function fetchRegistration({ email, password }: SigninType) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const user = response.user;
      console.log("user: ", user);
      return user;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

// export const createUser = async (
//   name: string,
//   email: string,
//   password: string,
// ) => {
//   const userCredential = await createUserWithEmailAndPassword(
//     auth,
//     email,
//     password,
//   );
//   const uid = userCredential.user.uid;
//
//   return await set(ref(database, "users/" + uid), {
//     uid: uid,
//     name: name,
//     email: email,
//     courses: {
//       workouts: {},
//     },
//   });
// };
//
// export const getUser = async (email: string, password: string) => {
//   const userCredential = await signInWithEmailAndPassword(
//     auth,
//     email,
//     password,
//   );
//   const uid = userCredential.user.uid;
//
//   const dbRef = ref(getDatabase());
//   const snapshot = await get(child(dbRef, `users/${uid}`));
//   return snapshot.val();
// };
