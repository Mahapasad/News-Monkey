import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imageUrl,newsUrl,author,date}= this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={imageUrl?imageUrl:'https://www.hindustantimes.com/ht-img/img/2023/03/29/1600x900/bihar-board-10th-matric-result-2023_1680059136936_1680059142005_1680059142005.jpeg'} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
