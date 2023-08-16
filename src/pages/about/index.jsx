import "./abou.scss";

export default function About() {
  return(
    <>
      <div className="about">
        <div className="showcase">
          <div className="show_text">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>Lorem ipsum, dolor sit amet  adipisicing elit. Alias culpa tempore natus cumque? Assumenda nesciunt iusto sequi, vero, nam harum cupiditate et consectetur aperiam vel omnis eveniet delectus rerum! Consequuntur repudiandae exercitationem autem amet architecto numquam eum sunt</p>
            <a href="http://"> malumot </a>
          </div>
          <div className="show_img">
            <p><img src="./img/image5.jpg"  alt="#" /></p>
          </div>
        </div>
        <div className="sarlav"><h1>Lorem amet consectetur</h1></div>
        <ul className="ull">
          <li><img src="./img/imgbir.png" alt="rasm" /></li>
          <li><img src="./img/image4.png" alt="rasm" /></li>
          <li><img src="./img/imgikki.png" alt="rasm" /></li>
          <li><img src="./img/imguch.png" alt="rasm" /></li>
        </ul>
      </div>
    </>
  )
};