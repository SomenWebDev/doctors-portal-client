import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={async () => {
          await sendPasswordResetEmail(email);
          alert("Sent email");
        }}
      >
        Reset password
      </button>
    </div>
  );
};

export default ForgotPassword;
