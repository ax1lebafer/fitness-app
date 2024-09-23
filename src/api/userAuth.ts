import { LoginType, SigninType } from "@/Types/sign";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/config";

export async function fetchUser({ email, password }: LoginType) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const user = response.user;
      console.log("user: ", user);
      return user;
    })
    .catch((error) => {
      throw new Error(error.message);
      // switch (error.code) {
      //   // case "auth/email-already-in-use":
      //   case "auth/email-already-exists":
      //     throw new Error("Данный email уже используется");
      //     break;
      //   case "auth/user-not-found":
      //     throw new Error("Пользователь не найден");
      //     break;
      //   case "auth/invalid-email":
      //     throw new Error("Введите корректный email");
      //     break;
      //   case "auth/invalid-credential":
      //     throw new Error("Неверный email или пароль");
      //     break;
      //   default:
      //     throw new Error(error.message);
      // }
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
      // switch (error.code) {
      //   case "auth/email-already-exists":
      //     throw new Error("Данный email уже используется");
      //     break;
      //   case "auth/user-not-found":
      //     throw new Error("Пользователь не найден");
      //     break;
      //   case "auth/invalid-email":
      //     throw new Error("Введите корректный email");
      //     break;
      //   case "auth/invalid-credential":
      //     throw new Error("Неверный email или пароль");
      //     break;
      //   default:
      //     throw new Error(error.message);
      // }
    });
}