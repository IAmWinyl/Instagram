import React, { useState } from "react";
import type { ComponentProps } from "react";

declare type InputFieldProps = {
  name: "username" | "password";
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  label: string;
};

const InputField = ({ name, field, setField, label }: InputFieldProps) => {
  const [isValued, setIsValued] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(e.target.value);
    if (e.target.value !== "" && isValued === false) {
      setIsValued(true);
    } else if (e.target.value === "" && isValued === true) {
      setIsValued(false);
    }
  };

  // Conditional props for `input` tag based on type
  const inputProps: ComponentProps<"input"> = {
    type: name === "username" || isVisible ? "text" : "password",
    "aria-label": label,
    "aria-required": true,
    autoCapitalize: "none",
    autoCorrect: "off",
    value: field,
    name: name,
    onChange: handleChange,
    ...(name === "username" ? { maxLength: 75 } : {}), // Conditionally apply maxLength only for username
  };

  return (
    <div className="mx-[46px] mb-[6px]">
      <div className="flex flex-row bg-secondary_background border-[1px] border-stroke rounded-[3px] text-primary_text text-sm items-center w-full focus-within:border-[1px] focus-within:border-focus_stroke">
        <label className="flex h-[36px] grow relative">
          <span
            className={
              "text-secondary_text text-xs absolute left-2 truncate pointer-events-none leading-9 transform origin-top-left ease-out duration-100" +
              " " +
              (isValued ? "transform scale-[0.8] translate-y-[-5px]" : "")
            }
          >
            {`${label}`}
          </span>
          <input
            className={
              "text-left bg-secondary_background grow text-ellipsis overflow-hidden outline-none" +
              " " +
              (isValued
                ? "text-xs pt-[14px] pr-[0px] pb-[2px] pl-[8px]"
                : "text-base pt-[9px] pr-[0px] pb-[7px] pl-[8px]")
            }
            {...inputProps}
          />
        </label>
        {name === "password" && (
          <div
            className={"items-center px-2" + " " + (isValued ? "" : "hidden")}
          >
            <button
              className="text-sm font-semibold font-sans text-secondary_button hover:opacity-50"
              type="button"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? "Hide" : "Show"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;