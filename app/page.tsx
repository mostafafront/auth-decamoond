"use client";
import React, { useCallback } from "react";
import styles from "@/styles/pages/auth.module.scss";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import InputPhone from "./components/InputPhone";
import LoginButton from "./components/LogginButton";


const iranPhoneSchema = z.object({
  phone: z
    .string()
    .nonempty("لطفا شماره موبایلتون رو وارد کنید")
    .max(11, "حداکثر کاراکتر مجاز 11 عدد می‌باشد")
    .regex(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و 11 رقم باشد"),
});

type FormData = z.infer<typeof iranPhoneSchema>;

export default function Auth() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(iranPhoneSchema),
    mode: "onSubmit",
  });

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
        if (!res.ok) throw new Error("Failed to fetch user");

        const json = await res.json();

        const user = json.results[0];
        const userId = user.login.uuid;
        const firstName = user.name.first;
        const lastName = user.name.last;

        localStorage.setItem("userId", userId);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);

        router.push("/dashboard");
      } catch (error) {
        alert("خطا در لاگین دوباره تلاش کنید");
        console.error(error);
      }
    },
    [router]
  );

  return (
    <main>
      <div className={styles.mainSectoin}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label htmlFor="inputPhone">ENTER YOUR PHONE NUMBER</label>
          </div>
          <div>
            <InputPhone
              id="inputPhone"
              {...register("phone")}
              error={errors.phone?.message}
            />
            <LoginButton loading={isSubmitting} />
          </div>
        </form>
      </div>
    </main>
  );
}