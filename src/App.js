import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import EventButton from "./EventButton";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  const shoppingEmptyList = [{ id: 11, name: "chocolate", calories: 200 }];

  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={false} userName="Octav" />
      <Counter />

      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
      {shoppingEmptyList.length > 0 ? (
        <List items={shoppingEmptyList} category="To buy grocery" />
      ) : null}
      <EventButton />
      <ProfilePicture />
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
      <MyComponent />
      <Footer />
    </>
  );
}

export default App;
