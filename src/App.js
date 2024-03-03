import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={false} userName="Octav" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Food />
      <Button />
      <Student name="Spongebob" age={30} isStudent={false} />
      <Student name="Tom" age={90} isStudent={true} />
      <Student name="Jerry" age={90} isStudent={true} />
      <Student name="Mickey" age={10} isStudent={false} />
      <Student />
      <Footer />
    </>
  );
}

export default App;
