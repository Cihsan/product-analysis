import React from 'react';

const Blog = () => {
    return (
        <article className='blog'>
            <h1>Semantic Tag</h1>
            <span className='author'>Author: Chy Ihsan</span>
            
            <p>Semanitc tag is extended some HTML define tag which is easily understood what will happend in many line of html code for Exemple: <code>header,main,section,article, aside
            details,summary,footer,figure</code> etc.</p>
            <h1>Block-inline and Inline-block</h1>
            <span className='author'>Author: Chy Ihsan</span>
            <p>Block Level Elements make anew line new line and Inline Elements do not make a new line, when we want to a block element to make inline element we use 'dispaly inline-block' <br />
            on the other hand we want to a inline element to make block element we use 'dispaly block'
            </p>
            
            <h1>Context API</h1>
            <p></p>
        </article>
    );
};

export default Blog;