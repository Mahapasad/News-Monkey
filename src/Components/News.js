import React, { Component } from 'react'
import NewsItem from './NewsItem'
// b42c8d8cd2584bd1a990f42719024d58
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
     static defaultProps ={
        country:"in",
        pageSize: 8,
        category: 'general'
     }

     static propTypes={
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category: PropTypes.string
     }

      capitalizeFirstLetter= (String)=>{
        return String.charAt(0).toUpperCase()+String.slice(1);
      }

    constructor(props){
        super(props);
        console.log('This is me')
        this.state={
          articles:[],
          loading:false,
          page:1,
          totalResults:0
        }
        document.title=` ${this.capitalizeFirstLetter(this.props.category)}- News Monkey`;
    }

    async componentDidMount(){
      // console.log('cdm')
      // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b42c8d8cd2584bd1a990f42719024d58&page=${this.state.page}&pageSize=${this.props.pageSize}` ;
      // this.setState({loading:true});
      // let data= await fetch(url);
      // let parsedData=await data.json();
      // // console.log(data ) 
      // console.log(parsedData );
      // this.setState({articles: parsedData.articles, 
      //   totalArticles: parsedData.totalResults,
      //   loading:false 
      // })
      this.updatePage();
    }

    async updatePage(){
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b42c8d8cd2584bd1a990f42719024d58&page=${this.state.page}&pageSize=${this.props.pageSize}` ;
      this.setState({loading:true});
      let data= await fetch(url);
      let parsedData=await data.json();
      // console.log(data ) 
      console.log(parsedData );
      this.setState({articles: parsedData.articles,loading:false,totalResults:parsedData.totalResults})
    }

    handlePrevClick= async ()=>{

      // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b42c8d8cd2584bd1a990f42719024d58&page=${this.state.page-1}&pageSize=${this.props.pageSize}` ;
      // this.setState({loading:true});
      // let data= await fetch(url);
      // let parsedData=await data.json();
      // // console.log(data ) 
      // console.log(parsedData );
      // this.setState({articles: parsedData.articles,loading:false})

      this.setState({
        page:this.state.page -1
      })
      this.updatePage();
    }

    handleNextClick=async ()=>{

      // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b42c8d8cd2584bd1a990f42719024d58&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      //   this.setState({loading:true});
      //   let data= await fetch(url);
      //   let parsedData=await data.json();
      //   // console.log(data ) 
      //   this.setState({loading:false});
      //   this.setState({articles: parsedData.articles})
  
        this.setState({
          page:this.state.page + 1
        })
        this.updatePage();
       }
      
   



  render() {

    return (
      <div className='container my-3'>
        <h1 className='text-center'>`News monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines `</h1>
          { this.state.loading && <Spinner/>} 
   
        <div className="row">
        {!this.start.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem date = {element.publishedAt} source={element.source.name} author={element.author} title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl= {element.url} />
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button  disabled={this.state.page +1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>


        </div>
        
      </div>
    )
  }
}

export default News
