import React,{Component} from 'react'
import StoryBoard from './StoryBoard'

const initialState = {
    route: 'upload',
    isUploaded: false
}

class DashBoard extends Component {
    constructor(){
        super();
        this.state = initialState
    }

    onRouteChange= (route) => {
        if(route === 'upload'){
            this.setState({initialState})
        } else if (route === 'uploaded') {
            this.setState({isUploaded: true})
        }
        this.setState({route: route})
    }
    render(){
        const {title} = this.props
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
                                    <h2>Welcome</h2>
                                    <h3>Moses Sapele</h3>
                            </div>
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
                                                <input type="text" class="form-control" />
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Tagline</span>
                                                </div>
                                                <input type="text" class="form-control" />
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Youtube URL</span>
                                                </div>
                                                <input type="text" class="form-control" />
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Add Image</span>
                                                </div>
                                                <div class="custom-file">
                                                        <input type="file" class="custom-file-input" />
                                                        <span class="custom-file-label">Choose file</span>
                                                </div>
                                            
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Description</span>
                                                </div>
                                                <textarea class="form-control" rows="4" /></div>

                                            <button
                                                onClick={() => this.onRouteChange('uploaded')} 
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
                <StoryBoard />
                }
            </div>
        )
    }
}

export default DashBoard;