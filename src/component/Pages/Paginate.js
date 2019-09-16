import React, {Component} from 'react'
import Pagination from 'react-bootstrap/Pagination'

class Paginate extends Component {
    render(){

        const { posts_perpage, totalPosts, paginate} = this.props;

        const pageNumbers = [];

        for(let i =1; i<=Math.ceil(totalPosts/posts_perpage); i++){
            pageNumbers.push(i);
        }

        return(
            <div className='d-flex flex-row'>
                {
                    pageNumbers.map(number => (
                        <Pagination key={number}>
                            <Pagination.Item onClick={()=> paginate(number)}>
                           {number}
                           </Pagination.Item>
                        </Pagination>
                    ))
                }

            </div>
        )
    }
}
export default Paginate;