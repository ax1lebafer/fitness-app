"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@/store/store";
import { getUser } from "@/store/features/userSlice";
import { errorMessage } from "@/utils/ErrorMessage";

export default function SignIn() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const [signInError, setSignInError] = useState("");

  const onInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!formValues.email || formValues.email.trim() === "") {
      setSignInError("Не введена почта");
      return;
    }

    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(String(formValues.email).toLowerCase())) {
      setSignInError("Некорректный email");
      return;
    }

    if (!formValues.password || formValues.password.trim() === "") {
      setSignInError("Не введен пароль");
      return;
    } else if (formValues.password.trim().length < 6) {
      setSignInError("Пароль не должен быть короче 6 символов");
      return;
    }

    try {
      await dispatch(getUser(formValues)).unwrap();
      setSignInError("");
      router.push("/");
    } catch (error: any) {
      const errMessage = error.message.toLowerCase();
      console.log("errMessage", errMessage);
      const userMessage = errorMessage(errMessage);
      userMessage !== "" ? setSignInError(userMessage) : "";
    }
  };

  useEffect(() => {
    setSignInError("");
  }, [formValues.email, formValues.password]);

  return (
    <div className="w-full min-h-full overflow-hidden opacity-75">
      <div className="max-w-full h-lvh my-auto mx-auto relative">
        <div className="absolute left-[calc(50%-(360px/2))] top-[calc(50%-(527px/2))] opacity-100">
          <form
            className="w-[360px] p-[40px] bg-[white] rounded-[30px] flex flex-col items-center pt-[43px] pr-[47px] pb-[47px] pl-[40px]"
            action="#"
          >
            <div className="w-[220px] h-[35px]  mb-[48px]">
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
              className="w-[280px] v-[52px] rounded-[8px] border-[1px] border-[#d0cece] px-[18px] py-[16px] text-lg"
              type="password"
              name="password"
              placeholder="Пароль"
              value={formValues.password}
              onChange={onInputChange}
            />
            {signInError && (
              <p className="mt-[10px] text-[#db0030] text-sm text-center font-normal leading-4">
                {signInError}
              </p>
            )}
            <button
              className="w-[280px] h-[52px] bg-[#bcec30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#ffffff] rounded-[46px] border-0 mt-[34px] px-[26px] py-[16px] mb-[10px] flex flex-row tracking-tighter text-[lg] text-[#000000] items-center justify-center"
              onClick={onLogin}
              type="submit"
            >
              <Link href="#">Войти</Link>
            </button>
            <button className="w-[280px] h-[52px] bg-[#ffffff] rounded-[46px] border-[1px] border-[#000000] px-[26px] py-[16px] mb-[20px] flex flex-row tracking-tighter text-lg text-[#000000] items-center justify-center">
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
