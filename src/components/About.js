import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1 className="text-[30px] font-bold m-4">About</h1>
        <UserClass name={"First Jain Class"} location={"Udaipur class"} />
      </div>
    );
  }
}

export default About;
