import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class DashBoard extends Component {

    render() {
        return (
            <div>

                <div class="container-fluid flex-column mt-2 flex-wrap  justify-content-center">
                    <div class="row mt-3">
                        <div class="col-md-3 mt-2">
                            <div class="card shadow-sm mb-4 p-3 rounded">
                                <div class="card-header"><Link to="/story">
                                    Stories</Link></div>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">title</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mt-2">
                            <div class="card-contain p-5 mb-5 rounded shadow-sm">
                                <div class="box">
                                    <h2>Welcome</h2>
                                    <h3>Admin</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card p-5 mb-5 shadow-sm">
                                        <div class="card-body">
                                            <h3>Add a new Story Today</h3>
                                            <article>So what do you have to post today? </article>
                                            <br />
                                            <div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Title</span>
                                                    </div>
                                                    <input  type="text" class="form-control" />
                                                </div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Tagline</span>
                                                    </div>
                                                    <input  type="text" class="form-control" />
                                                </div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Youtube URL</span>
                                                    </div>
                                                    <input  type="text" class="form-control" />
                                                </div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Image URL</span>
                                                    </div>
                                                    <input  type="text" class="form-control" />
                                                </div>
                                        
                                                <div class="input-group mb-3">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Description</span>
                                                    </div>
                                                    <textarea  class="form-control" rows="4" /></div>

                                                <button
                                                    
                                                    class="btn btn-outline-dark btn-lg">Publish</button>
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

export default DashBoard;