import { SignInType, SignUpType } from "@/Types/sign";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/config";

export async function fetchRegistration({ email, password }: SignUpType) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function fetchUser({ email, password }: SignInType) {
  return await signInWithEmailAndPassword(auth, email, password);
};
