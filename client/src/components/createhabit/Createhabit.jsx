import React, { useState } from 'react';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';



const Createhabit = ({modal, toggle, save} )  => {

const [habitName, setHabitName] = useState('');
const [description, setDescription] = useState('')

const handleChange = (e) => {
 
     const {name, value} = e.target

     if(name === "habitName") { 
         setHabitName(value)

     } else {
         setDescription(value)
     }
}

const savePush = () => { 
    let habitObj = {} 
    habitObj["Name"] = habitName
    habitObj["Description"] = description
    save(habitObj)
}
    return (
            <Modal isOpen={modal} toggle={toggle} >
             <ModalHeader toggle={toggle}>Create habit</ModalHeader>
             <ModalBody>
                <form>
                    <div className ="form-group">
                    <label>Habit Name</label>
                        <input type="text"  className ="form-control" value = {habitName} onChange = {handleChange} name = "habitName"/>
                    </div>
                    <div className="form-group">
                    <label>Description</label>
                      <textarea rows ="5" className = "form-control" value = {description} onChange = {handleChange} name = "description">

                      </textarea>
                    </div>
                </form>
             </ModalBody>
             <ModalFooter>
                 <Button color="primary" onClick={savePush}>Create Habit</Button>{' '}
                  
                 <Button color="primary" onClick={toggle}>Cancel</Button>
             </ModalFooter>

            
            </Modal>
            
   
    );
};

export default Createhabit

