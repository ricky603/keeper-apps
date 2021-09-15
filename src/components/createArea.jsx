import React, { useState } from "react";


function CreateArea(props) {

    const [textInput, setTextInput] = useState({
        title: '',
        content: ''
    })



    function handleChange(event) {
        const elementName = event.target.name
        const elementValue = event.target.value
        return setTextInput(prevItem => {
            return {
                ...prevItem,
                [elementName]: elementValue
            }
        })
    }

    function addNote() {
        props.addItem(textInput)
        setTextInput({
            title: "",
            content: ""
        })
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" value={textInput.title} onChange={handleChange} />
                <textarea name="content" placeholder="Take a note..." rows="3" value={textInput.content} onChange={handleChange}></textarea>
                <button type="button" onClick={addNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;