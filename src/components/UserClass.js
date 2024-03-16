import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/hinkal338");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="m-4">
        <img className="w-56" src={avatar_url}></img>
        <h2 className="mt-8">Name: {name}</h2>
        <div className="font-medium">
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        <h3>Location: {location}</h3>
        <h4>Email: hinkaljain31@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
