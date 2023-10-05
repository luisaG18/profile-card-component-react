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
        <div className="container-footer">
          <div className="container-footer--item">
            <span>
              <b>80K</b>
            </span>
            <span className="container-name--data">Followers</span>
          </div>
          <div className="container-footer--item">
            <span>
              <b>803K</b>
            </span>
            <span className="container-name--data">Likes</span>
          </div>
          <div className="container-footer--item">
            <span>
              <b>1.4K</b>
            </span>
            <span className="container-name--data">Photos</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCardComponent;
