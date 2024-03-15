import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <User />
        <UserClass name={"First Jain Class"} location={"Udaipur class"} />
        <UserClass name={"Second Class"} location={"Udaipur class"} />
        <UserClass name={"Third Class"} location={"Udaipur class"} />
      </div>
    );
  }
}

export default About;
