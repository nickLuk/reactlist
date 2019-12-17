
/*import React, { Fragment } from "react";
import "./EditList.css";
import EditUser from "./EditUser/EditUser";
import Search from "../SearchComponent/search";


const EditList = ({ EditList, onEdit }) => {
  const listItemEdit = EditList.map(item => {
    
    return (
      <EditUser
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        description={item.description}
        gender={item.gender}
        
        
        
        onEdit={() => onEdit(item.id)}
        
        ></EditUser>
    );
  });
  return (
    <Fragment>
      

<h2 className="col-7 d-flex justify-content-center"> EditList</h2>
      


   
      {listItemEdit}
    </Fragment>
  );
};

export default EditList;*/