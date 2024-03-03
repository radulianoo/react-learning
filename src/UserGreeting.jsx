import PropTypes from "prop-types";

//conditional rendering - allows you to control what gets rendered in your
//application based on certain conditions
//(show , hide or change components)

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.userName} 🤗!</h2>;
  //   } else {
  //     return (
  //       <div className="logIn-part">
  //         <h2>Please log in into your account 👨🏻‍💻.</h2>
  //         <button className="logIn-button">Log In</button>
  //       </div>
  //     );
  //   OR...see below}

  const welcomeMessage = <h2>Welcome {props.userName} 🤗!</h2>;
  const logInPrompt = (
    <div className="logIn-part">
      <h2>Please log in into your account 👨🏻‍💻</h2>
      <button className="logIn-button">Log In</button>
    </div>
  );

  return props.isLoggedIn ? welcomeMessage : logInPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};

export default UserGreeting;
