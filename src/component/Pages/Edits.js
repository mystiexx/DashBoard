import React, {Component} from 'react'

class EditView extends Component{
    constructor() {
        super()
        this.state = {
          content: '',
          title: '',
          tagline: '',
          videoUrl: '',
          imageUrl: '',
          desc: '',
          updated: false
        }
      }

      componentDidMount() {
        const { match } = this.props
        fetch(`https://urbanplotz.herokuapp.com/feed/${match.params.id}`
          .then(response => response.json())
          .then(data => {
            this.setState({
              title: data.title,
              tagline: data.tagline,
              imageUrl: data.imageUrl,
              videoUrl: data.videoUrl,
              desc: data.desc
            })
          })
        }
        
        handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value})
        }

        onUpdateFeed = (event) => {
            const { match } = this.props
            const token = localStorage.getItem('token');
            const obj = [
                {
                    propName: "title",
                    value: this.state.title
                },
                {
                    propName: "tagline",
                    value: this.state.tagline
                },
                {
                    propName: "imageUrl",
                    value: this.state.imageUrl
                },
                {
                    propName: "videoUrl",
                    value: this.state.videoUrl
                },
                {
                    propName: "desc",
                    value: this.state.desc
                }
            ]
    
            fetch(`https://urbanplotz.herokuapp.com/feed/${match.params.id}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(obj)
            }).then(res => res.json()).then(result => {
                if(result) {
                    this.setState({updated: true, message: "Story Updated Successfully, View in stories"})
                }
                
            })
            .catch(error =>{
                console.log(error)
                 this.setState({message: error})
                 })
        }

        
    render(){
        return(
            <div>
                <div className="container-fluid flex-column mt-2 flex-wrap  justify-content-center">
                    <div className="row mt-3">
                        <div className="col-md-3 mt-2">
                        </div>

                        <div className="col-md-6 mt-2">
                            <div className="card-contain p-5 mb-5 rounded shadow-sm">
                                <div className="box">
                                    <h2>Welcome</h2>
                                    <h3>Admin</h3>
                                </div>
                            </div>
                 <div className="row">
                                <div className="col-md-12">
                                    <div className="card p-sm-1 mb-5 shadow-sm">
                                        {
                                            this.state.updated && <p className='text-success text-center'>{this.state.message}</p>
                                        }
                                        <div className="card-body">
                                            <h3>Add a new Story Today</h3>
                                            <article>So what do you have to post today? </article>
                                            <br />
                                            <div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Title</span>
                                                    </div>
                                                    <input name='title' onChange={this.handleChange} value={this.state.title} type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Tagline</span>
                                                    </div>
                                                    <input onChange={this.handleChange} value={this.state.tagline} name='tagline'  type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Youtube URL</span>
                                                    </div>
                                                    <input onChange={this.handleChange} value={this.state.videoUrl} name='videoUrl' type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div  className="input-group-append">
                                                        <span className="input-group-text">Image URL</span>
                                                    </div>
                                                    <input onChange={this.handleChange} value={this.state.imageUrl} name='imageUrl' type="text" className="form-control" />
                                                </div>
                                        
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Description</span>
                                                    </div>
                                                    <textarea onChange={this.handleChange} value={this.state.desc} name='desc' className="form-control" rows="4" /></div>

                                                <button
                                                    onClick={this.onUpdateFeed}
                                                    className
                                                    ="btn btn-outline-dark btn-lg">Publish</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
</div>
</div>
</div>
            </div>
        )
    }
}
export default EditView;