import React, { useState } from "react";

export default function Users() {
  const [step, setStep] = useState(0);

  if (step === 0) {
    return (
      <ul>
        <li onClick={() => setStep(1)}>U1</li>
        <li onClick={() => setStep(1)}>U2</li>
        <li onClick={() => setStep(1)}>U3</li>
      </ul>
    );
  }

  if (step === 1) {
    return (
      <ul>
        <li>P1</li>
        <li onClick={() => setStep(2)}>P2</li>
      </ul>
    );
  }

  return <div className="post">User Post</div>;
}
