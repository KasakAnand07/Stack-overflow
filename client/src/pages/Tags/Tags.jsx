import React from 'react';

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import TagsList from './TagsList';
import "./Tags.css";

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For question regarding programming in EOMAScript (JavaSript/JS) and its various dialects/implementations [excluding ActionScript]. Please include all relevent tags on your question."
    },{
        id: 2,
        tagName: "python",
        tagDesc:"Python is a multi-paradign, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand and use, and enforces a clean and uniform system."
    },{
        id: 3,
        tagName: "C#",
        tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradign programming language developed by Microsoft."
    },{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problem using or understanding the language itself."
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradign, dynamically typed and interpreted scripting language originally designed for server-side web development."
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information is to be displayed in a web browser."
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TV's Wear, Glass, loT)."
    },{
        id: 8,
        tagName: "css",
        tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts and animations."
    },{
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradign and aims to be both efficient and flexible."
    },{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and"
    }]

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2">
            <h1>Tags</h1>
            <p>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className="tags-list-container">
                {
                    tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Tags
