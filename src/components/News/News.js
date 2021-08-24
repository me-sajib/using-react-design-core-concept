import React from 'react';
const News = (props) => {
    const { title, author, description } = props.news;
    return (
        <div className="jumbotron ml-5">
            <h1 className="display-4">{title}</h1>
            <p><small>author: {author}</small></p>
            <p className="lead">{description}</p>

            <p className="lead">
                <button className="btn btn-primary btn-lg" >Learn more</button>
            </p>
        </div>


    );
};

export default News;