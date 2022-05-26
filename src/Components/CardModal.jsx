import React, { useState } from "react";

export const CardModal = ({setIsModalVisible , Name , Likes , Desciption , id }) =>{
  return<>
        	<div className="modal__backdrop">
			<div className="modal__container shadow-md">
				<h3 className="modal__title">Details</h3>
				<p>
			  Name: {Name}
				</p>
				<p>
          {Likes}
				</p>
        <p>
          {Desciption}
				</p>
        <p>
          {id}
        </p>
        <button onClick={()=>{setIsModalVisible(false)}}>X</button>
        </div>
        </div>
    </>
};
export default CardModal;