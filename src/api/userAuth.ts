import { SignInType, SignUpType } from "@/Types/sign";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/config";

export async function fetchRegistration({ email, password }: SignUpType) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function fetchUser({ email, password }: SignInType) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function changePassword(password: string) {
  try {
    if (!auth.currentUser) {
      throw new Error("Нет авторизации");
    }
    await updatePassword(auth.currentUser, password);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export async function resetPassword(email: string) {
  try {
    if (!auth.currentUser) {
      throw new Error("Нет авторизации");
    }
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
