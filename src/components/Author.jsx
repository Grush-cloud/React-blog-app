import "../App.css";

export default function Author() {
  return (
    <div className="card">
      <div className="author">
        <h2 className="author-name">John Doe</h2>
        <img src="avatar.jpg" className="author-img" />
        <p className="author-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          lacus vel enim fringilla pulvinar. Donec ac sagittis velit. Quisque
          non purus quis nulla malesuada suscipit. Vivamus fermentum eros sit
          amet magna commodo, in tempor metus blandit. Nunc et mauris id eros
          consequat lobortis. Integer vitae tincidunt massa. Integer vel erat
          nulla. Proin at fermentum lorem. Sed luctus orci vel lobortis
          lobortis. Sed maximus viverra justo, sit amet sagittis odio vestibulum
          eget.
        </p>
      </div>
    </div>
  );
}
