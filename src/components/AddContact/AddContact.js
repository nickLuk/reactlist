import React from "react";
import "./AddContact.css";

class AddContact extends React.Component {
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

  onSubmit = e => {
    e.preventDefault();
    const { name, description, avatar, gender } = this.state;
    this.props.AddNewContact(name, description, avatar, gender);
  };
    render() {
      
    return (
      <div>
        <div className="container-fluid center">
          <div className="container">
            <div className="contactform">
              <h3 className="col-6 d-flex justify-content-center">
                Add Contact
              </h3>
              <div className="line"></div>
              <form onSubmit={this.onSubmit} action="" className="col">
                <div className="form-row justify-content-around">
                  <div className="ggg form-group col-8">
                    <label for="formGroupExampleInput2">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={this.GetName}
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
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddContact;
