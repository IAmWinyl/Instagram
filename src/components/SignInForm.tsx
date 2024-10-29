"use client"

import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [spanTransform, setSpanTransform] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value !== "" && spanTransform === false) {
      setSpanTransform(true);
    }
    else if (e.target.value === "" && spanTransform === true) {
      setSpanTransform(false);
    }
  }

  return (
    <>
      <form method="post" className="flex flex-col m-0 p-0" onSubmit={handleSubmit}>
        <div className="mt-[24px] items-stretch self-auto justify-start relative grow-0 overflow-x-visible overflow-y-visible">
          <div className="mx-[46px] mb-[6px]">
            <div className="flex flex-row bg-secondary_background border-[1px] border-stroke rounded-[3px] text-primary_text text-sm items-center w-full">
              <label className="flex h-[36px] grow relative">
                <span className={"text-secondary_text text-xs absolute left-2 truncate pointer-events-none leading-9 transform origin-top-left ease-out duration-100" + " " + (spanTransform ? 'transform scale-[0.8] translate-y-[-5px]' : '' )}>Phone number, username, or email</span>
                <input className={"text-left bg-secondary_background grow text-ellipsis overflow-hidden outline-none" + " "  +  (spanTransform ? "text-xs pt-[14px] pr-[0px] pb-[2px] pl-[8px]" : "text-base pt-[9px] pr-[0px] pb-[7px] pl-[8px]")} type="text" aria-label="Phone number, username, or email" aria-required="true" autoCapitalize="none" autoCorrect="off" maxLength={75} value={username} name="username" onChange={handleChange}/>
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default SignInForm