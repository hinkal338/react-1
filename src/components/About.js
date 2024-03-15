import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User />
      <UserClass name={"Hinkal Jain Class"} location={"Udaipur class"}/>
    </div>
  );
};

export default About;
