import React, { Fragment } from "react";
import "./contactlist.css";
import ContactItem from "./ContactItem/ContactItem";
import Search from "../SearchComponent/search";


const ContactList = ({ ContactList, onDelete,addFavorite, onEditor}) => {
  const listItem = ContactList.map(item => {
    return (
      <ContactItem
        
        avatar={item.avatar}
        name={item.name}
        description={item.description}
        gender={item.gender}
        iconfacebook={item.iconfacebook}
        icontwitter={item.icontwitter}
        iconlinkedin={item.iconlinkedin}
        iconskype={item.iconskype}
        iconemail={item.iconemail}
        favorite={item.favorite}
        key={item.id}
        onDelete={() => onDelete(item.id)}
        
        addFavorite={() => addFavorite(item.id)}
        onEditor={() => onEditor(item.id)}
        ></ContactItem>
    );
  });
  return (
    <Fragment>
      <Search></Search>

      <h2 className="col-7 d-flex justify-content-center"> ContactList</h2>
   
      {listItem}
    </Fragment>
  );
};

export default ContactList;