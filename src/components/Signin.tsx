"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
// import { useAppDispatch } from "@/store/store";
// import { getRegistration } from "@/store/features/userSlice";

export function SigninPage() {
  //   const dispatch = useAppDispatch();
    const router = useRouter();

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");

  const onInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onRegistration = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!formValues.login || formValues.login.trim() === "") {
      setError("Не введен логин");
      return;
    }

    if (!formValues.password || formValues.password.trim() === "") {
      setError("Не введен пароль");
      return;
    } else if (formValues.password.trim().length < 6) {
      setError("Пароль не должен быть короче 6 символов");
      return;
    }

    if (
      !formValues.confirmPassword ||
      formValues.confirmPassword.trim() === ""
    ) {
      setError("Не введено подтверждение пароля");
      return;
    } else if (formValues.confirmPassword.trim().length < 6) {
      setError("Пароль не должен быть короче 6 символов");
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }


    // Пока не реализованы API сделаем заглушку
    if (!error) {
      router.push("/login");
      setError("");
    }

    // try {
    //   await dispatch(getRegistration(formValues)).unwrap();
    //   router.push("/login");
    //   setError("");
    // } catch (error: any) {
    //   setError(error.message);
    // }
  };

  useEffect(() => {
    setError("");
  }, [formValues.login, formValues.password, formValues.confirmPassword]);

  return (
    <div className="w-full min-h-full overflow-hidden">
      <div className="max-w-full h-lvh my-0 mx-auto relative">
        <div className="absolute z-2 left-[calc(50% - (366px / 2))] top-[calc(50% - (439px / 2))] opacity-100">
          <form
            className="w-[360px] p-[40px] bg-[white] rounded-[30px] flex flex-col items-center pt-[43px] pr-[47px] pb-[47px] pl-[40px]"
            action="#"
          >
            <div className="w-[220px] h-[35px] mb-[48px]">
              <Image src="/img/logo.svg" alt="logo" width={220} height={35} />
            </div>
            <input
              className="w-[280px] v-[52px] rounded-[8px] border-[1px] border-[#d0cece] px-[18px] py-[16px] mb-[10px] text-lg"
              type="login"
              name="login"
              placeholder="Логин"
              value={formValues.login}
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
            {error && (
              <p className="mt-[10px] text-[#db0030] text-sm text-center font-normal leading-4">
                {error}
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
              {/* <Link href="/signup">Зарегистрироваться</Link> */}
              <Link href="/login">Войти</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
