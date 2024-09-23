"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@/store/store";
import { getRegistration } from "@/store/features/userSlise";
import { errorMessage } from "@/utils/ErrorMessage";

export default function Signin() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signinError, setSigninError] = useState<string>("");

  const onInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onRegistration = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!formValues.email || formValues.email.trim() === "") {
      setSigninError("Не введена эл.почта");
      return;
    }

    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(String(formValues.email).toLowerCase())) {
      setSigninError("Некорректный email");
      return;
    }

    if (!formValues.password || formValues.password.trim() === "") {
      setSigninError("Не введен пароль");
      return;
    } else if (formValues.password.trim().length < 6) {
      setSigninError("Пароль не должен быть короче 6 символов");
      return;
    }

    if (
      !formValues.confirmPassword ||
      formValues.confirmPassword.trim() === ""
    ) {
      setSigninError("Не введено подтверждение пароля");
      return;
    } else if (formValues.confirmPassword.trim().length < 6) {
      setSigninError("Пароль не должен быть короче 6 символов");
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      setSigninError("Пароли не совпадают");
      return;
    }

    try {
      await dispatch(getRegistration(formValues)).unwrap();
      router.push("/login");
      setSigninError("");
    } catch (error: any) {
      console.log("errMessage", error);
      const errMessage = error.message.toLowerCase();
      console.log("errMessage", errMessage);
      const userMessage = errorMessage(errMessage);
      userMessage !== ""
        ? setSigninError(userMessage)
        : "";
    }
  };

  useEffect(() => {
    setSigninError("");
  }, [formValues.email, formValues.password, formValues.confirmPassword]);

  return (
    <div className="w-full min-h-full overflow-hidden opacity-75">
      <div className="max-w-full h-lvh my-auto mx-auto relative">
        <div className="absolute left-[calc(50%-(360px/2))] top-[calc(50%-(527px/2))] opacity-100">
          <form
            className="w-[360px] p-[40px] bg-[white] rounded-[30px] flex flex-col items-center pt-[43px] pr-[47px] pb-[47px] pl-[40px]"
            action="#"
          >
            <div className="w-[220px] h-[35px] mb-[48px]">
              <Image src="/img/logo.svg" alt="logo" width={220} height={35} />
            </div>
            <input
              className="w-[280px] v-[52px] rounded-[8px] border-[1px] border-[#d0cece] px-[18px] py-[16px] mb-[10px] text-lg"
              type="email"
              name="email"
              placeholder="Почта"
              pattern="^\S+@\S+\.\S+$"
              value={formValues.email}
              onChange={onInputChange}
            />
            <input
              className="w-[280px] v-[52px] rounded-[8px] border-[1px] border-[#d0cece] px-[18px] py-[16px] mb-[10px] text-lg"
              type="password"
              name="password"
              placeholder="Пароль"
              value={formValues.password}
              onChange={onInputChange}
            />
            <input
              className="w-[280px] v-[52px] rounded-[8px] border-[1px] border-[#d0cece] px-[18px] py-[16px] text-lg"
              type="password"
              name="confirmPassword"
              placeholder="Повторите пароль"
              value={formValues.confirmPassword}
              onChange={onInputChange}
            />
            {signinError && (
              <p className="mt-[10px] text-[#db0030] text-sm text-center font-normal leading-4">
                {signinError}
              </p>
            )}
            <button
              className="w-[280px] h-[52px] bg-[#bcec30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#ffffff] rounded-[46px] border-0 mt-[34px] px-[26px] py-[16px] mb-[10px] flex flex-row tracking-tighter text-[lg] text-[#000000] items-center justify-center"
              onClick={onRegistration}
              type="submit"
            >
              <Link href="#">Зарегистрироваться</Link>
            </button>
            <button className="w-[280px] h-[52px] bg-[#ffffff] rounded-[46px] border-[1px] border-[#000000] px-[26px] py-[16px] mb-[20px] flex flex-row tracking-tighter text-lg text-[#000000] items-center justify-center">
              <Link href="/login">Войти</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
