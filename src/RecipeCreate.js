import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState(initialFormState );
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
    const handleText = ({target}) => {
      setFormData({...formData,
        [target.name]: target.value
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe(formData)
    setFormData(initialFormState)
  };
  

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input id="name" type="text" name="name" placeholder="Name" onChange={handleText} value={formData.name} required/>
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
              <input id="name" type="text" name="cuisine" placeholder="Cuisine" onChange={handleText} value={formData.cuisine} required/>
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input id="photo" type="url" name="photo" placeholder="URL" onChange={handleText} value={formData.photo} required/>         
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
              <textarea id="ingredients" type="text" rows={2} name="ingredients" placeholder="Ingredients" onChange={handleText} value={formData.ingredients} required />
              </label>
            </td>
            <td >
              <label htmlFor="preparation">
              <textarea id="preparation" type="text" rows={2} name="preparation" placeholder="Preparation" onChange={handleText} value={formData.preparation} required/>              
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
