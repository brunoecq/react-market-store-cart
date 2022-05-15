import * as React from "react";

export const Login = () => {
  return (
    <>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" />

        <label htmlFor="username">Password:</label>
        <input type="password" name="password" />
      </div>
    </>
  );
};
