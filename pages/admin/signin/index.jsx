import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Button, Layout } from "@/src/components";
import styles from "./signin.module.scss";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  });
  const { status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    if (res?.ok) {
      router.push("/admin/dashboard");
    } else {
      if (res?.error === "Invalid Password") {
        setErrorMessage({ email: "", password: "Password salah" });
      } else if (res?.error === "Invalid Email") {
        setErrorMessage({ email: "Email tidak terdaftar", password: "" });
      }
      console.error(res?.error);
    }
  };

  if (status === "authenticated") {
    router.replace("/admin/dashboard");
  }

  return (
    <Layout title="Login Admin">
      <div className={styles.login}>
        <form className={styles.login_form} onSubmit={handleSubmit}>
          <div>
            <h1 className={styles.login_form__title}>Welcome Back!</h1>
            <div className={styles.login_form__container}>
              {errorMessage.email && (
                <p className={styles.login_form__error}>{errorMessage.email}</p>
              )}
              <label className={styles.login_form__label}>Email</label>
              <input
                className={styles.login__input}
                value={userInfo.email}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
                type="email"
                placeholder="me@gmail.com"
              />
            </div>
            <div className={styles.login_form__container}>
              {errorMessage.password && (
                <p className={styles.login_form__error}>
                  {errorMessage.password}
                </p>
              )}
              <label className={styles.login_form__label}>Password</label>
              <input
                className={styles.login__input}
                value={userInfo.password}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
            </div>
            <Button className={styles.login__button} type="submit">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
