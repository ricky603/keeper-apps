import React, {useState} from 'react'
import Heading from './Heading.jsx'
import Footer from './Footer.jsx'
import CreateArea from './createArea'
import Note from './Note'

function App() {

    const [items, setItems] = useState([])

    function deleteItem(id) {
        setItems(prevItem => {
            return prevItem.filter((item, index) => {
                return index !== id
            })
        })
    }

    function addItem(textInput) {
        setItems(prevItem => {
            return [...prevItem, textInput]
        })
    }

    return <div>
        <Heading />
        <CreateArea addItem={addItem} />
        {items.map((item, index) => {
                return <Note deleteItem={deleteItem} id={index} key={index} title={item.title} content={item.content} />
            })}
        <Footer />
    </div>
}

export default App