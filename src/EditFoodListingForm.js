import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EditFoodListingForm({id,user,handleUpdateRender}){
    const [newName,setNewName ] = useState("")
    const [newDescription,setNewDescription] = useState("")
    const [newImage,setNewImage] = useState("")
    const [newCuisine,setNewCuisine] = useState("")

    function handleFoodListingUpdate(id,e,){
        e.preventDefault()
        
        fetch(`http://localhost:3000/food_listings/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type" : "application/json",
          } ,
            body: JSON.stringify({
            user_id: user.id,
            image: newImage,
            name:newName,
            description:newDescription,
            cuisine:newCuisine
        }),
    })
            .then((r) => r.json())
         .then((updatedFood) => handleUpdateRender(updatedFood))
}

    

    return(
        
        <Form className="update-form" onSubmit={(e) => handleFoodListingUpdate(id, e)} >
        < Form.Control placeholder="name"  value={newName} onChange={(e)=> setNewName(e.target.value)}/>
        <Form.Control placeholder="description" value={newDescription} onChange={(e)=> setNewDescription(e.target.value)} />
        <Form.Control placeholder="image" value={newImage}  onChange={(e)=> setNewImage(e.target.value)}/>
        <Form.Control placeholder="Cuisine" value={newCuisine} onChange={(e)=> setNewCuisine(e.target.value)}/>
        <Button variant="primary" type="submit">
    Submit
  </Button>
        </Form>

        
    )
}
export default EditFoodListingForm;