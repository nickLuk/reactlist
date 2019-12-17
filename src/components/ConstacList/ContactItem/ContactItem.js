import React from "react";
import { Link} from "react-router-dom";
import "./contactitem.css";

class ContactItem extends React.Component {
  state = {
    name: this.props.name,
    description: this.props.description,
    avatar: this.props.avatar,
    gender: this.props.gender,
    iconfacebook: this.props.iconfacebook,
    icontwitter: this.props.icontwitter,
    iconlinkedin: this.props.iconlinkedin,
    iconskype: this.props.iconskype,
    iconemail: this.props.iconemail,
    btnStatus: false,
    borderStatus: false,
   starStatus: this.props.favorite,
   id: this.props.id
  };
  RandomAva = () => {
    const newAvatar = Math.floor(Math.random() * 100);
    this.setState({
      avatar: newAvatar,
      btnStatus: !this.state.btnStatus
    });
  };
  SetBorderPrint = () => {
    this.setState({
      borderStatus: true
    });
  };

  DelBorderPrint = () => {
    this.setState({
      borderStatus: false
    });
  };
 /* StarInsert = () => {
    this.setState({
      starStatus: !this.state.starStatus
    });
  };*/
  render() {
    
    const {
      avatar,
      description,
      name,
      gender,
      iconfacebook,
      icontwitter,
      iconlinkedin,
      iconskype,
      iconemail,
      id
      
    } = this.state;

    let url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
    let btnStyle = "btn btn-outline-primary true col-2 offset-4";
    if (this.state.btnStatus) {
      btnStyle = "btn btn-outline-danger true col-2 offset-4";
    }

    let borderStyle = "panel-body";
    if (this.state.borderStatus) {
      borderStyle = "panel-bodyHover";
    }

    let starStyle = "star";
    if (this.props.favorite) {
      starStyle = "starIns";
    }
    

    return (
      <div className="row d-flex justify-content-center">
        <div className="col-7 ">
          <div className="panel">
            <div
              className={borderStyle}
              onMouseEnter={this.SetBorderPrint}
              onMouseLeave={this.DelBorderPrint}
            >
              <div className="media-main">
                <a className="pull-left" href="#">
                  <img className="thumb-lg img-circle bx-s" src={url} alt="" />
                </a>
                <div className="pull-right btn-group-sm butt">
                  <Link
                    to= "/edit"
                    className="btn btn-success tooltips"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                    onClick={this.props.onEditor}
                  >
                    <i className="fa fa-pencil"></i>
                  </Link>
                  <a
                    href="#"
                    className="btn btn-danger tooltips"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                    onClick={this.props.onDelete}
                  >
                    <i className="fa fa-close"></i>
                  </a>
                </div>
                <div className="info">
                  <h4>{name}</h4>
                  <p className="text-muted">{description}</p>
                                </div>
              </div>
              <div className="clearfix">
                <hr />
                <ul className="social-links list-inline p-b-10 col-5">
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      className="tooltips"
                      href={iconfacebook}
                      target="_blank"
                      data-original-title="Facebook"
                    >
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      className="tooltips"
                      href={icontwitter}
                      target="_blank"
                      data-original-title="Twitter"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      className="tooltips"
                      href={iconlinkedin}
                      target="_blank"
                      data-original-title="LinkedIn"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      className="tooltips"
                      href={iconskype}
                      target="_blank"
                      data-original-title="Skype"
                    >
                      <i class="fa fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      className="tooltips"
                      href={iconemail}
                      target="_blank"
                      data-original-title="Message"
                    >
                      <i class="fa fa-envelope-o"></i>
                    </a>
                  </li>
                  <li>
                    <div className=/*{this.props.favorite}*/ {starStyle} onClick={this.props.addFavorite}>
                      <i className="fa fa-star"></i>
                    </div>
                  </li>
                </ul>
                <button className={btnStyle} onClick={this.RandomAva}>
                  {" "}
                  Random
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ContactItem;