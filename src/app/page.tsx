import SignInForm from "@/components/SignInForm";

export default function Home() {
  return (
    <main
      className="flex flex-col bg-primary_background justify-center min-w-[100vh]"
      role="main"
    >
      <article className="flex flex-row grow shrink-0 max-w-[--polaris-site-width-wide] w-full mt-[32px] justify-center mx-auto">
        <div className="h-[581.15px] mb-3 bg-[length:468.32px_634.15px] bg-[-46px_0px] basis-[380.32px] mr-8 self-center bg-[url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW)]"></div>
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
              Don&apos;t have an account?&nbsp;
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
          <div className="flex flex-col items-center">
            <div className="mx-5 my-[10px]">
              <span className="text-sm leading-[18px] block font-sans before:block before:mt-[-3px] before:h-0 after:block after:mb-[-4px] after:h-0">
                Get the app.
              </span>
            </div>
            <div className="flex flex-row items-center my-[10px]">
              <a
                href="https://apps.apple.com/app/instagram/id389801252?ct=igweb.unifiedHome.badge&mt=8&pt=428156&vt=lo"
                target="_blank"
                aria-label="Download on the App Store"
                className="mr-2"
              >
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
                  alt="Download on the App Store"
                  className="h-[40px]"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DE46822FE-BB37-48F6-9B2E-8F2E049FF9F8%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"
                target="_blank"
                aria-label="Get it on Google Play"
              >
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                  alt="Get it on Google Play"
                  className="h-[40px]"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
