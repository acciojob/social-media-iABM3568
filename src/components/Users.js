import React, { useState } from "react";

export default function Users() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && (
        <ul>
          <li onClick={() => setStep(1)}>User 1</li>
          <li onClick={() => setStep(1)}>User 2</li>
          <li onClick={() => setStep(1)}>User 3</li>
        </ul>
      )}

      {step === 1 && (
        <ul>
          <li>Post 1</li>
          <li onClick={() => setStep(2)}>Post 2</li>
        </ul>
      )}

      {step === 2 && <div className="post">User Post</div>}
    </>
  );
}
