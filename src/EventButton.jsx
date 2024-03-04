// click event - an interaction when a user clicks on a specific element
// we can respond to clicks by passing a callback to the onClick event handler

function EventButton() {
  const handleClick = (e) => (e.target.textContent = "OUCH");
  return <button onClick={(e) => handleClick(e)}>Click Mee!😀</button>;
}

export default EventButton;
