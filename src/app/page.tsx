import SignInForm from "@/components/SignInForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col grow justify-center mt-[12px] max-w-[350px]">
        <div className="flex flex-col bg-primary_background shrink-0 border-[1px] items-center border-elevated_separator box-border mb-[10px] py-[10px] relative text-primary_text">
          <button type="button" className="inline-block bg-[url('https://static.cdninstagram.com/rsrc.php/v3/ym/r/BQdTmxpRI6f.png')] bg-cover bg-no-repeat w-[175px] h-[51px] mt-[36px] mb-[12px]" />
          <div className="flex flex-col max-w-[350px] mb-[20px] w-full">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}
