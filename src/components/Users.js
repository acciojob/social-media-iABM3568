import React, { useState } from "react";

export default function Users() {
  const [step, setStep] = useState(0);

  if (step === 0) {
    return (
      <ul>
        <li onClick={() => setStep(1)}>User 1</li>
        <li onClick={() => setStep(1)}>User 2</li>
        <li onClick={() => setStep(1)}>User 3</li>
      </ul>
    );
  }

  if (step === 1) {
    return (
      <ul>
        <li>Post A</li>
        <li onClick={() => setStep(2)}>Post B</li>
      </ul>
    );
  }

  return <div className="post">User Post</div>;
}
