import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <>
      <div className="mx-6 mt-6 flex justify-end">
        <Link href="/login">
          <button className="white_btn px-4 py-2 font-semibold">Log In</button>
        </Link>
      </div>
      <section className="m-8 mx-auto max-w-md">
        <div className="mt-20 flex flex-col items-center">
          {/* heading of the login page */}
          <Image
            src="/assets/icons/paper-plane.svg"
            width={25}
            height={5}
            alt="Prompter Logo"
          />
          <p className="p-2 text-xl font-extrabold ">Create an account</p>
          <p className="text-sm text-gray-blue">
            Enter your email below to create your account
          </p>
        </div>

        <div className="my-3 flex flex-col  items-center gap-2 py-2">
          {/* sign in buttons */}

          <input
            className="white_btn w-full px-4 py-2 text-left text-gray-blue"
            placeholder="username@example.com"
          />
          <button className="black_btn w-full px-4  py-2">
            Sign Up with Email
          </button>
          <p className="my-2 text-sm text-gray-blue">or continue with</p>
        </div>
        <div className="flex flex-row justify-center bg-slate-100">
          {/* subscribers */}
          <button>
            <Image
              className="m-3 rounded bg-white p-2"
              src="/assets/images/github (2).png"
              height={64}
              width={64}
              alt="github login"
            />
          </button>
          <button>
            <Image
              className="m-3 rounded bg-white p-2"
              src="/images/google"
              height={64}
              width={64}
              alt="github login"
            />
          </button>
        </div>
        <p className="my-4 text-center text-sm  text-gray-blue">
          By clicking continue, you agree to our{" "}
          <Link href="/" className="underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/" className="underline underline-offset-4">
            Privacy Policy
          </Link>
        </p>
      </section>
    </>
  );
};

export default Signup;
