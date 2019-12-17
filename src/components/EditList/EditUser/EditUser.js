/*import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./EditUser.css";

class EditUser extends React.Component{
    state = {
        name: "",
        description: "",
        avatar: "",
        gender:""
      };
      GetGender = e => {
        this.setState({
          gender: e.target.value
        });
      };
      GetName = e => {
        this.setState({
          name: e.target.value
        });
      };
      GetDesc = e => {
        this.setState({
          description: e.target.value
        });
      };
      GetAvatar = e => {
        this.setState({
          avatar: e.target.value
        });
      };
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
       starStatus: this.props.favorite
      };
      
      


    onSubmitSave = e => {
        e.preventDefault();
        const { name, description, avatar, gender } = this.state;
        this.props.ContactSave(name, description, avatar, gender);
      };*/
   /* render() {
      
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
        
      } = this.state;*/
      
/*
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
      }*/
     /*   return (*/

/*

          <div className="row d-flex justify-content-center">
          <div className="col-7 ">
            <div className="panel">
              <div
                className={borderStyle}
                
              >
                <div className="media-main">
                  <a className="pull-left" href="#">
                    <img className="thumb-lg img-circle bx-s" src={url} alt="" />
                  </a>
                  <div className="pull-right btn-group-sm butt">
                    <a
                      href="#"
                      className="btn btn-success tooltips"
                      data-placement="top"
                      data-toggle="tooltip"
                      data-original-title="Edit"
                      onClick={this.props.onEdit}
                    >
                      <i className="fa fa-pencil"></i>
                    </a>
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
                      <div className= {starStyle} onClick={this.props.addFavorite}>
                        <i className="fa fa-star"></i>
                      </div>
                    </li>
                  </ul>
                  <button className={btnStyle} onClick={this.RandomAva}>
                    {" "}
                    Randooooom
                  </button>
                </div>
              </div>
            </div>


            


          </div>




          
        </div>*/

/*
<div>

<div className="container-fluid center">
<div className="container">
  <div className="contactform">
    <h3 className="col-6 d-flex justify-content-center">
    
    </h3>
    <div className="line"></div>
    <form  action="" className="col">
      <div className="form-row justify-content-around">
        <div className="ggg form-group col-8">
          <label for="formGroupExampleInput2">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={this.GetName}
            id="formGroupExampleInput2"
            placeholder={name}
           
            
          ></input>
          
          <label for="formGroupExampleInput2">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={this.GetDesc}
            id="formGroupExampleInput2"
            placeholder={description}
          ></input>
          <label for="formGroupExampleInput2">Avatar</label>
          <input
            type="number"
            className="form-control"
            name="avatar"
            onChange={this.GetAvatar}
            id="formGroupExampleInput2"
            placeholder={avatar}
          ></input>
          <label for="formGroupExampleInput2">Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            onChange={this.GetGender}
            id="formGroupExampleInput2"
            placeholder={gender}
          ></input>
        </div>
      </div>
      <div className="col-4 offset-6 text-right">
        <button type="submit" className="btn btn-primary mb-2">
          Save change
        </button>
      </div>
    </form>
  </div>
</div>
</div>
</div>

           
        );
        


        
    }
};*/







/*
<div>
<h3>{this.state.name}</h3>
<div className="container-fluid center">
<div className="container">
  <div className="contactform">
    <h3 className="col-6 d-flex justify-content-center">
    Edit 
    </h3>
    <div className="line"></div>
    <form  action="" className="col">
      <div className="form-row justify-content-around">
        <div className="ggg form-group col-8">
          <label for="formGroupExampleInput2">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
           
            id="formGroupExampleInput2"
            placeholder=""
           
            
          ></input>
          
          <label for="formGroupExampleInput2">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={this.GetDesc}
            id="formGroupExampleInput2"
            placeholder=""
          ></input>
          <label for="formGroupExampleInput2">Avatar</label>
          <input
            type="number"
            className="form-control"
            name="avatar"
            onChange={this.GetAvatar}
            id="formGroupExampleInput2"
            placeholder=""
          ></input>
          <label for="formGroupExampleInput2">Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            onChange={this.GetGender}
            id="formGroupExampleInput2"
            placeholder=""
          ></input>
        </div>
      </div>
      <div className="col-4 offset-6 text-right">
        <button type="submit" className="btn btn-primary mb-2">
          Save change
        </button>
      </div>
    </form>
  </div>
</div>
</div>
</div>*/
/*export default EditUser;*/