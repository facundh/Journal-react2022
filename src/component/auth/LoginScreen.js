import React from "react";

export const LoginScreen = () => {
  return (
    <>
      <h3>Login</h3>

      <form action="">
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button
        type="submit">
          Login
        </button>

        <hr/>
        Google
      </form>
    </>
  );
};
