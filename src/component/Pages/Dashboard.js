<<<<<<< Updated upstream
import React,{Component} from 'react'
import StoryBoard from './StoryBoard'
import Header2 from '../Nav/Header2'
import Search from '../Pages/Search';

const initialState = {
    route: 'upload',
    isUploaded: false,
    title: '',
    tagline: '',
    imgUrl: '',
    vidUrl: '',
    desc: '',
    upload: {
        Utitle: '',
        Utagline: '',
        UimgUrl: '',
        UvidUrl: '',
        Udesc: ''
    }
}

class DashBoard extends Component {
    constructor(){
        super();
        this.state = initialState
=======
import React, { Component } from 'react'

class DashBoard extends Component {
    constructor(){
        super()
        this.state = {
            content: [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:6530/feed')
        .then(response => response.json())
        .then(feeds => {
          this.setState({
            content: feeds.feeds
          })
        })    
>>>>>>> Stashed changes
    }

    ontitleChange = (e) => {
        const { value } = e.target
        this.setState({
            title: value
        })
    }
    ontaglineChange = (e) => {
        const { value } = e.target
        this.setState({
            tagline: value
        })
    }
    onimageChange = (e) => {
        const { value } = e.target
        this.setState({
            imgUrl: value
        })
    }
    onvideoChange = (e) => {
        const { value } = e.target
        this.setState({
            vidUrl: value
        })
    }
    ondescChange = (e) => {
        const { value } = e.target
        this.setState({
            desc: value
        })
    }

    onRouteChange= (route) => {
        if(route === 'upload'){
            this.setState({initialState})
        } else if (route === 'uploaded') {
            this.setState({isUploaded: true})
        }
        this.setState({route: route})
    }

<<<<<<< Updated upstream
    feed = (data) => {
        this.setState({
            upload: {
                Utitle: data.title,
                Utagline: data.tagline,
                UimgUrl: data.imageurl,
                UvidUrl: data.videourl,
                Udesc: data.description
            }
        })
      }

    onUpload = () => {
        fetch('http://localhost:6536/upload', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               title: this.state.title,
               tagline: this.state.tagline,
               imageurl: this.state.imgUrl,
               videourl: this.state.vidUrl,
               description: this.state.desc 
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id){
                this.feed(data)
                this.onRouteChange('uploaded')
            }
        })
    }

     
    render(){
        const {title, feeds} = this.props

        const feedComp = feeds.map(detail => <StoryBoard key={detail.id} imgUrl={detail.imageurl} title={detail.title} desc={detail.description}/>)
        return(
            <div>
                {
                    this.state.route === 'upload' ?
                            <div class="container-fluid flex-column mt-5 flex-wrap  justify-content-center">
                            <div class="row mt-5">
                                <div class="col-md-3 mt-5">
                                    <div class="card shadow-sm mb-4 p-3 rounded">
                                        <div class="card-header">Stories</div>
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">{title}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                    <div class="col-md-6 mt-5">
                        <div class="card-contain p-5 mb-5 rounded shadow-sm">
                                <div class="box">
=======
                <div className="container-fluid flex-column mt-2 flex-wrap  justify-content-center">
                    <div className="row mt-3">
                        <div className="col-md-3 mt-2">
                        </div>

                        <div className="col-md-6 mt-2">
                            <div className="card-contain p-5 mb-5 rounded shadow-sm">
                                <div className="box">
>>>>>>> Stashed changes
                                    <h2>Welcome</h2>
                                    <h3>{this.props.name}</h3>
                            </div>
<<<<<<< Updated upstream
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card p-5 mb-5 shadow-sm">
                                    <div class="card-body">
                                        <h3>Add a new Story Today</h3>
                                        <article>So what do you have to post today? </article>
                                        <br/>
                                        <div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Title</span>
                                                </div>
                                                <input onChange={this.ontitleChange} type="text" class="form-control" />
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Tagline</span>
                                                </div>
                                                <input onChange={this.ontaglineChange} type="text" class="form-control" />
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Youtube URL</span>
                                                </div>
                                                <input onChange={this.onvideoChange} type="text" class="form-control" />
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Add Image</span>
                                                </div>
                                                <div class="custom-file">
                                                        <input onChange={this.onimageChange} type="file" class="custom-file-input" />
                                                        <span class="custom-file-label">Choose file</span>
                                                </div>
                                            
=======
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card p-sm-1 mb-5 shadow-sm">
                                        <div className="card-body">
                                            <h3>Add a new Story Today</h3>
                                            <article>So what do you have to post today? </article>
                                            <br />
                                            <div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Title</span>
                                                    </div>
                                                    <input  type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Tagline</span>
                                                    </div>
                                                    <input  type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Youtube URL</span>
                                                    </div>
                                                    <input  type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Image URL</span>
                                                    </div>
                                                    <input  type="text" className="form-control" />
                                                </div>
                                        
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Description</span>
                                                    </div>
                                                    <textarea  className="form-control" rows="4" /></div>

                                                <button
                                                    
                                                    className
                                                    ="btn btn-outline-dark btn-lg">Publish</button>
>>>>>>> Stashed changes
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Description</span>
                                                </div>
                                                <textarea onChange={this.ondescChange} class="form-control" rows="4" /></div>

                                            <button
                                                onClick={this.onUpload} 
                                                class="btn btn-outline-dark btn-lg">Publish</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                :
                    <div>
                        <Header2/>
                        <Search feeds={feedComp}/>,
                    </div>
                }
            </div>
        )
    }
}

export default DashBoard;