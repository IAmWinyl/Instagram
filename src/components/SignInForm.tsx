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
      <div className="mt-[24px] items-stretch self-auto justify-start relative grow-0 overflow-x-visible overflow-y-visible">
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
      </div>
    </form>
  );
};

export default SignInForm;
