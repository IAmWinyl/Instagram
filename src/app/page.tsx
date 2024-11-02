import SignInForm from "@/components/SignInForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col grow shrink-0 justify-center mt-[12px] max-w-[350px]">
        <div className="flex flex-col bg-primary_background border-[1px] border-elevated_separator items-center box-border mb-[10px] py-[10px] relative text-primary_text">
          <button
            type="button"
            className="inline-block bg-[url('https://static.cdninstagram.com/rsrc.php/v3/ym/r/BQdTmxpRI6f.png')] bg-cover bg-no-repeat w-[175px] h-[51px] mt-[36px] mb-[12px]"
          />
          <div className="flex flex-col max-w-[350px] mb-[20px] w-full">
            <SignInForm />
          </div>
        </div>
        <div className="flex flex-col bg-primary_background border-[1px] border-elevated_separator items-center box-border py-[10px] mb-[10px]">
          <p className="text-sm m-[15px]">
            Don't have an account?&nbsp;
            <a
              href="/accounts/emailsignup/"
              role="link"
              className="touch-manipulation"
            >
              <span className="text-primary_button inline font-semibold">
                Sign up
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
