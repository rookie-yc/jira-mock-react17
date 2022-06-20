import React, { useState } from "react";

interface AutoForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext(undefined);
AuthContext.displayName = "AuthContext";

export const AuthContext = () => {
  const [user, setUser] = useState(null);

  const;
};
