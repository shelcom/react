import React from 'react'

function Article(props) {
	const {article} = props
    const body = <section>{article.text}</section>
    return (
        <div>
        	<h2>{article.title}</h2>
        	{body}
        </div>
    )
}

export default Article 