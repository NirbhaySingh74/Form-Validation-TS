import React, { useState } from "react";

const FormWithoutReactForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(email, password, confirmPassword);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail("");
    setConfirmPassword("");
    setPassword("");
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4 w-72 justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 w-full"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 w-full"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 w-full"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 disabled:bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWithoutReactForm;
