import React from "react";

export const NavBar= ({ title,navlabel1,navlabel2, navlabel3 ,navlabel4 }) => {
	return (
    <div>
		<h3 className="tab-title">{title}</h3>
        <h5 className="tab-title">{navlabel1}</h5>
        <h5 className="tab-title">{navlabel2}</h5>
        <h5 className="tab-title">{navlabel3}</h5>
        <h5 className="tab-title">{navlabel4}</h5>
        
        </div>
		
    );
};