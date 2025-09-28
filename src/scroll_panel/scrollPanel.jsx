import { useState } from "react";
import "./scrollPanel.css";

export const UserIcon = ({ src, alt, onIconClick}) => (
  <div className="thumbnail" onClick={onIconClick}>
    <img src={src} alt={alt} />
    <p style={{fontSize: 7}}>{alt}</p>
  </div>
);

const ScrollPanel = ({ data, onIconClick }) => {

  return (
    <>
      <div className="horizontal-container">
        {data.map((item, index) => (
          <UserIcon src={item.avatar} alt={item.user} onIconClick={()=>{onIconClick(index)}}/>
        ))}
      </div>
    </>
  );
};

export default ScrollPanel;
