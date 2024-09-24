"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@/store/store";
import { getRegistration } from "@/store/features/userSlice";
import { errorMessage } from "@/utils/ErrorMessage";
import ButtonLink from "@/components/ui/ButtonLink";

export default function SignIp() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpError, setSignUpError] = useState<string>("");

  const onInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onRegistration = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!formValues.email || formValues.email.trim() === "") {
      setSignUpError("Не введена эл.почта");
      return;
    }

    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(String(formValues.email).toLowerCase())) {
      setSignUpError("Некорректный email");
      return;
    }

    if (!formValues.password || formValues.password.trim() === "") {
      setSignUpError("Не введен пароль");
      return;
    } else if (formValues.password.trim().length < 6) {
      setSignUpError("Пароль не должен быть короче 6 символов");
      return;
    }

    if (
      !formValues.confirmPassword ||
      formValues.confirmPassword.trim() === ""
    ) {
      setSignUpError("Не введено подтверждение пароля");
      return;
    } else if (formValues.confirmPassword.trim().length < 6) {
      setSignUpError("Пароль не должен быть короче 6 символов");
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      setSignUpError("Пароли не совпадают");
      return;
    }

    try {
      await dispatch(getRegistration(formValues)).unwrap();
      router.push("/signin");
      setSignUpError("");
    } catch (error: any) {
      console.log("errMessage", error);
      const errMessage = error.message.toLowerCase();
      console.log("errMessage", errMessage);
      const userMessage = errorMessage(errMessage);
      userMessage !== "" ? setSignUpError(userMessage) : "";
    }
  };

  useEffect(() => {
    setSignUpError("");
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
            {signUpError && (
              <p className="mt-[10px] text-[#db0030] text-sm text-center font-normal leading-4">
                {signUpError}
              </p>
            )}
            <ButtonLink
              text="Зарегистрироваться"
              className="w-full mb-2.5"
              onClick={onRegistration}
            />
            <ButtonLink
              text="Войти"
              className="mt-0 w-full bg-transparent border border-black hover:bg-[#F7F7F7] hover:text-black active:bg-[#E9ECED] active:text-black"
              href="/signin"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
