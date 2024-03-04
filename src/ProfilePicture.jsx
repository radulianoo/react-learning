function ProfilePicture() {
  const imageUrl = "./src/assets/logo.png";

  const handleClick = (e) => (e.target.style.display = "none");

  return <img onClick={(e) => handleClick(e)} src={imageUrl} alt="logo" />;
}

export default ProfilePicture;
