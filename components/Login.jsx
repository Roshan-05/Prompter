"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";

const Login = () => {
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {
    const func = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    func();
  }, []);

  return (
    <>
      <Link href="/" className="m-8 flex gap-2">
        {/* back navigation button */}
        <Image
          src="/assets/icons/arrow-small-left.svg"
          height={20}
          width={20}
        />
        <p>Back</p>
      </Link>

      {session?.user ? (
        <section className="m-8 mx-auto max-w-md">
          <div className="mt-40 flex flex-col items-center">
            {/* heading of the login page */}
            <Image
              src="/assets/icons/paper-plane.svg"
              width={40}
              height={5}
              alt="Prompter Logo"
            />
            <p className="text-center p-2 text-4xl my-5 font-extrabold ">You have been successfully logged in</p>
            <p className="mb-5 text-sm text-gray-blue">
              Click <span className="text-stone-900 font-bold">Get Started</span> to explore, create and share amazing AI prompts
            </p>
          </div>

          {/* <div className="my-3 flex flex-col  items-center gap-2 py-2">
        

        <input
            className="white_btn px-4 py-2 w-full text-left text-gray-blue"
            placeholder="username@example.com"
          />
          <button className="black_btn px-4 py-2 w-full ">Sign In with Email</button>
          <p className="my-2 text-sm text-gray-blue">or continue with</p>
        </div> */}

          <div className="flex flex-row justify-center bg-slate-100">
            
                <Link href="/dashboard"
                  type="button"
                  className="black_btn w-full py-2 flex justify-center"

                >
                 Get Started
                </Link>
            

          </div>
          <Link
            href="/"
            className="my-4 flex justify-center text-sm text-gray-blue underline underline-offset-4"
          >
            Go to Home Page
          </Link>
        </section>
      ) : (
        <section className="m-8 mx-auto max-w-md">
          <div className="mt-40 flex flex-col items-center">
            {/* heading of the login page */}
            <Image
              src="/assets/icons/paper-plane.svg"
              width={25}
              height={5}
              alt="Prompter Logo"
            />
            <p className="p-2 text-xl font-extrabold ">Welcome back</p>
            <p className="mb-5 text-sm text-gray-blue">
              Enter your email to sign in to your account
            </p>
          </div>

          {/* <div className="my-3 flex flex-col  items-center gap-2 py-2">
        

        <input
            className="white_btn px-4 py-2 w-full text-left text-gray-blue"
            placeholder="username@example.com"
          />
          <button className="black_btn px-4 py-2 w-full ">Sign In with Email</button>
          <p className="my-2 text-sm text-gray-blue">or continue with</p>
        </div> */}

          <div className="flex flex-row justify-center bg-slate-100">
            {/* subscribers */}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn w-full py-2"
                >
                  {provider.name}
                </button>
              ))}

            {/* <button>
            <Image
              className="m-3 rounded bg-white p-2"
              src="/images/google.png"
              height={64}
              width={64}
              alt="github login"
            />
          </button> */}
          </div>
          <Link
            href="/signup"
            className="my-4 flex justify-center text-sm text-gray-blue underline underline-offset-4"
          >
            Don't have an account? Sign Up
          </Link>
        </section>
      )}
    </>
  );
};

export default Login;
