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
