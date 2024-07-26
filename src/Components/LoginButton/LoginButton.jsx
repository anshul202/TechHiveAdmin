import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-slate-200 text-blue-800 text-lg font-bold py-4 px-6 rounded-full hover:bg-blue-100 transition duration-300" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;