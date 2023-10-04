import "./ProfileCardComponent.scss";
import imageTop from "../../assets/bg-pattern-card.svg";
import imageAvatar from "../../assets/image-victor.jpg";

function ProfileCardComponent() {
  return (
    <>
      <div className="container">
        <div>
          <img src={imageTop} />
          <img src={imageAvatar} />
        </div>
        <div className="container-name">
          <div className="container-name--info-user">
            <span>
              <b>Victor Crest</b>
            </span>
            <span className="container-name--data">26</span>
          </div>
          <div className="container-name--data">London</div>
        </div>
        <div className="container-footer"></div>
      </div>
    </>
  );
}

export default ProfileCardComponent;
