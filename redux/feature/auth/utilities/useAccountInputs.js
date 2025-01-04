import { useState, useEffect } from "react";

export const useAccountInputs = (user) => {
  const [accountInputs, setAccountInputs] = useState({});

  useEffect(() => {
    if (user) {
      setAccountInputs({ ...user }); // Put user values into the state
    }
  }, [user]);

  const setAccountField = (key, value) =>
    setAccountInputs((prev) => ({ ...prev, [key]: value }));

  return [accountInputs, setAccountField];
};

