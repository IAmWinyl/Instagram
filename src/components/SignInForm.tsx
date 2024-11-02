"use client";

import React, { useState } from "react";
import InputField from "./InputField";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  const handleOAuthLogin = () => {};

  return (
    <form
      method="post"
      className="flex flex-col m-0 p-0"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col box-border mt-[24px] items-stretch self-auto justify-start relative grow-0 overflow-x-visible overflow-y-visible">
        <InputField
          name="username"
          field={username}
          setField={setUsername}
          label="Phone number, username, or email"
        />
        <InputField
          name="password"
          field={password}
          setField={setPassword}
          label="Password"
        />

        <div className="flex flex-col shrink-0 mx-10 my-2 justify-center">
          <button
            className={
              "bg-primary_button box-border px-4 py-[7px] font-sans text-sm font-semibold rounded-lg text-always_white" +
              " " +
              (username !== "" && password.length >= 6
                ? "hover:bg-primary_button_hover"
                : "opacity-70")
            }
            type="submit"
            disabled={username !== "" && password.length >= 6 ? false : true}
          >
            Log in
          </button>
        </div>

        <div className="flex flex-row mt-[14px] mx-10 mb-[22px]">
          <div className="grow relative bg-elevated_separator h-[1px] top-[0.45em]"></div>
          <div className="font-sans font-semibold px-[18px] text-secondary_text text-[13px] leading-[1.15]">
            OR
          </div>
          <div className="grow relative bg-elevated_separator h-[1px] top-[0.45em]"></div>
        </div>

        <div className="flex flex-row justify-center mx-10 my-2">
          <button
            type="button"
            className="font-sans text-sm text-[#385185] font-semibold"
            onClick={handleOAuthLogin}
          >
            <span className="inline-block mr-2 relative top-[3px] bg-[url(https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png)] w-4 h-4 bg-[length:440px_411px] bg-[-347px_-329px]"></span>
            <span>Log in with Facebook</span>
          </button>
        </div>
      </div>

      <a
        href="/accounts/password/reset/"
        role="link"
        className="mt-3 no-underline touch-manipulation text-center"
      >
        <span className="leading-4 text-link text-sm">Forgot password?</span>
      </a>
    </form>
  );
};

export default SignInForm;
