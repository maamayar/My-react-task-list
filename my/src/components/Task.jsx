import React from "react";
import { FaTrash,FaPlusCircle, FaEdit } from "react-icons/fa";
import { useState } from "react";

const Task =() => {
    const [description, setDescription] = useState("");
    
    const handleInputChange = (e)=>{
        setDescription (e.target.value);
    };
    
    const handleAddChange = (e) =>{
        e.preventDefaul ();
    console.log ("Added task:", description);
    setDescription("");
    };

    const handleUpdateChange = (e) =>{
        e.preventDefaul ();
    console.log ("Added updated:", description);
    setDescription("");
    };


    return ( 
    <>
         <div>
            <form>
                <input 
                    type= "text"  
                    className="input-add"
                    name="description" 
                    value="Learn ..." 
                    placeholder="¿Que hay que hacer?"
                />
                <button className="btn-add" type="submit"><FaPlusCircle/></button>
            </form>
         </div>
        
        <div>
            <form>
                <input 
                    type= "text"  
                    className="input-update"
                    name="description" 
                    value="See" 
                    placeholder="¿Que hay que hacer?"/>
                    
                <button className="btn-edit" type="submit"><FaEdit/></button>
             </form>
        </div>
     
         <div>
            <span>
                    <label htmlFor="" className="container-done"></label>
             </span>
            <button className="btn-delete">
                    <FaTrash/>
            </button>
        </div>
     </>
       
    );
};
export default Task;