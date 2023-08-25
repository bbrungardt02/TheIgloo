import React from "react";
import { signIn } from "next-auth/react";

const LoginPage = ({ providers }) => {
  return (
    <div>
      <h1>Login to Your Account</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LoginPage;
