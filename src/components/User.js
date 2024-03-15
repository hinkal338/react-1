import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count1: {count1}</h2>
      <h2>Name: Hinkal Jain</h2>
      <h3>Location: Udaipur</h3>
      <h4>Email: hinkaljain31@gmail.com</h4>
    </div>
  );
};

export default User;
