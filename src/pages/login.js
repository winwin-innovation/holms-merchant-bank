import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Holms" && password === "admin1234567") {
      router.push("/dashboard");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div>
      <div class="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover bg-gray-100">
        <div class="container z-1 ">
          <div class="flex flex-wrap -mx-3">
            <div class="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12 ">
              <div class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py4 dark:bg-gray-950 rounded-2xl bg-clip-border">
                <div class="p-6 pb-0 mb-0">
                  <h4 class="font-bold text-indigo-500 text-4xl">Sign In</h4>
                  <p class="mb-0 mt-5">
                    Enter your username and password to sign in
                  </p>
                </div>
                <form className=" p-6 rounded-lg" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="username"
                    ></label>
                    <input
                      className="border border-gray-400 p-2 w-full"
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="password"
                    ></label>
                    <input
                      className="border border-gray-400 p-2 w-full"
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="flex items-center pl-12 mb-0.5 text-left min-h-6">
                    <input
                      id="rememberMe"
                      class="mt-0.5 rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-zinc-700/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                      type="checkbox"
                    />
                    <label
                      class="ml-2 font-normal cursor-pointer select-none text-sm text-slate-700"
                      for="rememberMe"
                    >
                      Remember me
                    </label>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                  <button className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-indigo-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25">
                    Sign In
                  </button>
                </form>
              </div>
              <div class="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
                <p class="mx-auto mb-6 leading-normal text-sm">
                  Want to go back to the Home Page?
                  <Link
                    href="/"
                    class="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500 ml-2"
                  >
                    Click here
                  </Link>
                </p>
              </div>
            </div>
            <div class="absolute top-0 right-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex">
              <div class="relative flex flex-col justify-center h-full bg-cover px-24 m-4 overflow-hidden bg-[url('https://images.unsplash.com/photo-1533421644343-45b606745fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxiYW5rJTIwc2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')] rounded-xl ">
                <span class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-blue-500 to-violet-500 opacity-60"></span>
                <h4 class="z-20 mt-12 font-bold text-white">
                  &quot;The Safe for all currencies&quot;
                </h4>
                <p class="z-20 text-white ">
                  There&rsquo;s no other place to safeguard your resources than
                  Holms Merchant Bank. Your topmost security is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
