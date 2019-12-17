import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/SearchComponent/search";
import ContactList from "./components/ConstacList/ContactList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import AddContact from "./components/AddContact/AddContact";
import NotFound from "./components/NotFound/NotFound";
import EditList from "./components/EditList/EditList";
import MainMenu from "./components/MainMenu/MainMenu";
import Edit from "./components/Edit/Edit";

import "./index.css";
import { arrayExpression } from "@babel/types";

class App extends React.Component {
 //id = 100;
  state = {
    List: [
      {
        favorite: false,
        
        name: "Johnny Depp",
        description: "Actor",
        avatar: 20,
        gender: "men",
        iconfacebook: "https://ru-ru.facebook.com/JohnChristopherOfficial/",
        icontwitter: "https://ru-ru.facebook.com/JohnChristopherOfficial/",
        iconlinkedin: "https://www.linkedin.com/",
        iconskype: "https://www.skype.com/uk/",
        iconemail: "https://www.google.com/intl/uk/gmail/about/",
        id: 1
      },
      {
        favorite: true,
        name: "Arnold Schwarzenegger",
        description: "Actor",
        avatar: 35,
        gender: "men",
        iconfacebook: "https://uk-ua.facebook.com/arnold",
        icontwitter: "https://twitter.com/schwarzenegger?lang=ru",
        iconlinkedin: "https://www.linkedin.com/",
        iconskype: "https://www.skype.com/uk/",
        iconemail: "https://www.google.com/intl/uk/gmail/about/",
        id: 2
      },
      {
        favorite: false,
         name: "Sylvester Stallone",
        description: "Actor",
        avatar: 10,
        gender: "men",
        iconfacebook: "https://www.facebook.com/SylvesterStallone/",
        icontwitter: "https://twitter.com/theslystallone",
        iconlinkedin: "https://www.linkedin.com/",
        iconskype: "https://www.skype.com/uk/",
        iconemail: "https://www.google.com/intl/uk/gmail/about/",
        id: 3
      },
      {
        favorite: false,
        name: "Milla Jovovich",
        description: "Actor",
        avatar: 30,
        gender: "women",
        iconfacebook: "https://www.facebook.com/MillaJovovich/",
        icontwitter: "https://twitter.com/millajovovich",
        iconlinkedin: "https://www.linkedin.com/",
        iconskype: "https://www.skype.com/uk/",
        iconemail: "https://www.google.com/intl/uk/gmail/about/",
        id: 4,
      },
      {
        favorite: false,
        name: "Jon Bon Jovi;",
        description: "Singer",
        avatar: 50,
        gender: "men",
        iconfacebook: "https://www.facebook.com/BonJovi",
        icontwitter: "https://twitter.com/jonbonjovi",
        iconlinkedin: "https://www.linkedin.com/",
        iconskype: "https://www.skype.com/uk/",
        iconemail: "https://www.google.com/intl/uk/gmail/about/eexit",
        id: 5
      }
    ],
    Item: []
  };

  onDelete = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);

    let newList = [];
    let counter = 0;

    for (let i = 0; i < this.state.List.length; i++) {
      if (i !== index) {
        newList[counter] = this.state.List[i];
        counter++;
      }
    }
    this.setState(() => {
      return {
        List: newList
        
      };
    });
  };

  addFavorite = id => {
    this.setState(() => {
      const index = this.state.List.findIndex(elem => elem.id === id);

      const newListfav = this.state.List.slice();

      newListfav[index].favorite = !newListfav[index].favorite;

      return {
        newListfav
      };
    });
  };

  onAddNewContact = (name, description, avatar, gender,favorite) => {
    const newContact = {
      name: name,
      description: description,
      avatar: avatar,
      gender: gender,
      favorite: favorite,
      id: this.state.List.length + 1
    };
    const NewList = [...this.state.List, newContact];
    this.setState(() => {
      return {
        List: NewList
      };
    });
  };


  /*onAddNewContact = (name, description, avatar, gender) => {
   
  this.id++
  
const newContact ={
  name: name,
  description: description,
  avatar: avatar,
  gender: gender,
  favorite: false,
  id:this.id
};
const newContactArr = [...this.state.List, newContact];
this.setState(() => {
 return{
  List:newContactArr
};
});
};*/

/*onSaveEditContact = (name, description, avatar, gender) => {
   
    this.id++
    
  const newContact ={
    id:this.id,
    name: name,
    description: description,
    avatar: avatar,
    gender: gender,
    favorite: false
  };
  const newContactArr = [...this.state.List, newContact];
  this.setState(() => {
   return{
    List:newContactArr
  };
  });
  };*/


 /* onEdit = id => {
    this.setState(() => {
      const index = this.state.List.findIndex(elem => elem.id === id);

      const newListEdit = this.state.List[index];

      
console.log(newListEdit);
      return {
        
       

      };
       
        
      
    });
  };*/


  onEditor = id => {
    this.state.Item = [];
    const index = this.state.List.findIndex(elem => elem.id === id);
    const Object = this.state.List[index];
    this.Object = { id: this.state.List.length * 100 };
    const NewList = [...this.state.Item, Object];
    this.state.List.splice(index, 1);
    this.setState(() => {
      return {
        Item: NewList
      };
    });
  };

  EditUser = (name, description, avatar, gender, id) => {
   
    const Edited = {
      name: name,
      description: description,
      avatar: avatar,
      gender: gender,
      favorite: this.state.Item[0].favorite,
      id: this.state.Item[0].id
    };
   // console.log(this.state.Item);
    const NewList = [...this.state.List, Edited];
    this.setState(() => {
      return {
        List: NewList
      };
    });
  };










  render() {
    return (
      <Router>
        <div className="container bootstrap snippet">
          <MainMenu></MainMenu>
          <Switch>
              <Route
                path="/"
                exact
                component={() => (
                  <ContactList
                    ContactList={this.state.List}
                    onDelete={this.onDelete}
                    onEditor={this.onEditor}
                    addFavorite={this.addFavorite}
                    
                  />
                )}
              ></Route>
            <Route path="/about" exact component={About}></Route>
            <Route
              path="/add"
              exact
              component={() => (
                <AddContact
                 AddNewContact={this.onAddNewContact}
                  />
              )}
            ></Route>
            <Route
              path="/edit"
              exact
              component={() => (
                <Edit
                onEditor={this.state.Item}
               EditUser={this.EditUser}
                //Editor={this.Editor}
                  
                 
                  
                />
              )}
            ></Route>
            <Route path="*" exact component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

/*<ContactList ContactList={this.state.List} onDelete={this.onDelete} addFavorite={this.addFavorite}></ContactList>*/

ReactDOM.render(<App />, document.getElementById("root"));
