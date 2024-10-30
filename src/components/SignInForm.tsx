"use client";

import React, { useState } from "react";
import InputField from "./InputField";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

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

        <div className="flex flex-row mt-[14px] mx-10 mb-22px">
          <div className="grow relative bg-elevated_separator h-[1px] top-[0.45em]"></div>
          <div className="font-sans font-semibold px-[18px] text-secondary_text text-[13px] leading-[1.15]">
            OR
          </div>
          <div className="grow relative bg-elevated_separator h-[1px] top-[0.45em]"></div>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
