"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { errorMessage } from "@/utils/ErrorMessage";
import ButtonLink from "@/components/ui/ButtonLink";
import { changePassword } from "@/api/userAuth";
import { useAppSelector } from "@/store/store";

export default function UpdatePassword() {
  const router = useRouter();
  const userPasswordHasn = useAppSelector((state) => state.user.passwordHash);

  const [formValues, setFormValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [updatePasswordError, setUpdatePasswordError] = useState<string>("");

  const onInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function onChangePassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (
      !formValues.newPassword || formValues.newPassword.trim() === ""
    ) {
      setUpdatePasswordError("Не введен новый пароль");
      return;
    } else if (formValues.newPassword.trim().length < 6) {
      setUpdatePasswordError("Пароль не должен быть короче 6 символов");
      return;
    }

    if (!formValues.confirmPassword || formValues.confirmPassword.trim() === "") {
      setUpdatePasswordError("Не введено подтверждение пароля");
      return;
    } else if (formValues.confirmPassword.trim().length < 6) {
      setUpdatePasswordError("Пароль не должен быть короче 6 символов");
      return;
    }

    if (formValues.newPassword !== formValues.confirmPassword) {
      setUpdatePasswordError("Пароли не совпадают");
      return;
    }

    await changePassword(formValues.newPassword)
      .then((response) => {
        console.log("changePassword:", response);
        // setIsLoginModalOpened(false);
        router.push("/profile");
      })
      .catch((error) => {
        const errMessage = error.message.toLowerCase();
        const userMessage = errorMessage(errMessage);
        userMessage !== "" ? setUpdatePasswordError(userMessage) : "";
      });
  }

  useEffect(() => {
    setUpdatePasswordError("");
  }, [formValues.newPassword, formValues.confirmPassword]);

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
              type="password"
              name="newPassword"
              placeholder="Новый пароль"
              value={formValues.newPassword}
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
            {updatePasswordError && (
              <p className="mt-[10px] text-[#db0030] text-sm text-center font-normal leading-4">
                {updatePasswordError}
              </p>
            )}
            <ButtonLink
              text="Подтвердить"
              className="w-full mb-2.5"
              onClick={onChangePassword}
              //   href="/profile"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
