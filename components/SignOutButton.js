import { useRouter } from "next/router";

function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    // Clear user data from application state
    localStorage.removeItem("token");
    // Navigate the user back to the home page
    router.push("/");
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}

export default SignOutButton;
