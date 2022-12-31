import { React, useEffect, useState } from 'react'
import data from "./ListData.json";

function List(props) {
    const [post,setPost] = useState([]);
    const [customerData,setCustomerData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json )=> {
            console.log(json);
            setPost(json)
        })
        .catch((error)=>{console.log(error)})
    },[])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(customres => customres.json())
        .then((json )=> {
            console.log("customerjson",json.results);
            setCustomerData(json.results)
        })
        .catch((error)=>{console.log(error)})
    },[])

    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    console.log("props is",props.input);
    const filteredPostData = post.filter((ele,index)=>{
        console.log("ele",ele);
        if (props.input === '') {
            return ele;
        }
        //return the item which contains the user input
        else {
            return ele.title.includes(props.input)
        }
    })
    console.log("filteredPostData is ",filteredPostData);
    return (
     <>
        <div>
            <ul>
            {/* Static List:
                {filteredData.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))} */}
            Dynamic API List:
                {filteredPostData.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {customerData?.map((ele) => {
                return <li key={ele.id}>{ele.name}</li>;
                })}
           </ul>
        </div>
     </>
    )
}

export default List