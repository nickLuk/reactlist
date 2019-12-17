import React from "react";

class Edit extends React.Component{


    state = {
        name: this.name,
        description: this.description,
        avatar: this.avatar,
        gender: this.gender,
        id: this.id
      };
      GetGender = e => {
        this.setState({
          gender: e.target.value
        });
      };
      GetId = () => {
        console.log(this.id);
        this.setState({
          id: this.id
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
      onSave = e => {
        const { name, description, avatar, gender, id } = this.state;
        this.GetId();
        this.props.EditUser(name, description, avatar, gender, id);
        e.preventDefault();
        console.log(this.gender, this.id);
      };
      render() {
        this.props.onEditor.map(item => {
          this.name = item.name;
          this.description = item.description;
          this.avatar = item.avatar;
          this.gender = item.gender;
          this.id = item.id;
        });
        if (this.state.gender === undefined) {
          this.state.gender = this.gender;
        }
        if (this.state.avatar === undefined) {
          this.state.avatar = this.avatar;
        }
        

        return (
            <div>
            <div className="container-fluid center">
              <div className="container">
                <div className="contactform">
                  <h3 className="col-6 d-flex justify-content-center">
                    Edit
                  </h3>
                  <div className="line"></div>
                  <form onSubmit={this.onSave} action="" className="col">
                    <div className="form-row justify-content-around">
                      <div className="ggg form-group col-8">
                        <label for="formGroupExampleInput2">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={this.GetName}
                          id="formGroupExampleInput2"
                          placeholder={this.name}
                        ></input>
                        <label for="formGroupExampleInput2">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="description"
                          onChange={this.GetDesc}
                          id="formGroupExampleInput2"
                          placeholder={this.description}
                        ></input>
                        <label for="formGroupExampleInput2">Avatar</label>
                        <input
                          type="number"
                          className="form-control"
                          name="avatar"
                          onChange={this.GetAvatar}
                          id="formGroupExampleInput2"
                          placeholder={this.avatar}
                        ></input>
                        <label for="formGroupExampleInput2">Gender</label>
                        <input
                          type="text"
                          className="form-control"
                          name="gender"
                          onChange={this.GetGender}
                          id="formGroupExampleInput2"
                          placeholder={this.gender}
                        ></input>
                      </div>
                    </div>
                    <div className="col-4 offset-6 text-right">
                      <button type="submit" className="btn btn-primary mb-2">
                        Save
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
export default Edit;