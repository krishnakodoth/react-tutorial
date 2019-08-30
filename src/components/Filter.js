import React, { Component } from 'react';
import axios from 'axios';

class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            posts : '',
            filterdPost : '',
            searchText:''
        }
        this.filterTable = this.filterTable.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }
    componentDidMount(){
        this.fetchPost();       
    }
    fetchPost = async () =>{
        this.setState({
            loading:true
        });
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setTimeout(()=>{
            this.setState({
                loading:false,
                posts:res.data,
                filterdPost: res.data,
                searchField : '',
                searchString : '',
                search_title : '',
                search_body : '',
                search_userId : ''
            });
        },1000);
    }
    filterTable = (e) => {
        let searchField = e.target.name;
        let searchString = e.target.value;
        
        this.setState({
           //  [`search_${searchField}`] : searchString,
            searchString: searchString,
            searchField : searchField,
            search_title : searchField!=='title'?'':searchString,
            search_body : searchField!=='body'?'':searchString,
            search_userId : searchField!=='userId'?'':searchString,
            // filterdPost : filterdPost
        })
    }
    sortBy = (e) => {
        let key = e.target.name;
        const newPosts =  this.state.posts;

        //newPosts.sort((a,b)=>(a.id > b.id))
        console.log(newPosts)
        console.log(newPosts.sort((a,b)=>{
            return a.title < b.title
        }))


        //let sortedPosts = newPosts.sort((a,b)=>(a.id > b.id));
        //console.log(sortedPosts)
        /* this.setState({
            posts:newPosts.sort((a,b)=>(a.id > b.id))
        }) */
       /*  this.setState({
            //  [`search_${searchField}`] : searchString,
             searchString: '',
             searchField : '',
             search_title : '',
             search_body : '',
             search_userId : '',
             posts : sortedPosts
         })        */ 
    }
    render() {
        const {loading,posts,searchField,searchString} = this.state;
        let filterdPost = posts;
        /* if(searchField && searchString){
            filterdPost = posts.filter((post)=>{
                return post[searchField].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
            });
        } */
        
        return (
            <div className="container mt-5">
            <h2 className="text-primary mb-3">Table filter</h2>
            { 
                loading &&
                <div className="paging-loader">Loading...</div>
            }
            { 
                filterdPost &&
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Id</th>
                            <th scope="col">
                                <button name="id" onClick={this.sortBy }>ID</button>
                            </th>
                            <th scope="col">
                            Title
                            </th>
                            <th scope="col">
                            Post
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">
                            {/* <input typ='text' name="userId" value={this.state.search_userId} onChange={ this.filterTable } /> */}
                            </th>
                            <th scope="col"></th>
                            <th scope="col">
                            <input typ='text' name="title" value={this.state.search_title} onChange={ this.filterTable } />
                            </th>
                            <th scope="col">
                            <input typ='text' name="body" value={this.state.search_body} onChange={ this.filterTable } />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterdPost.map((row)=>(
                            <tr key={`tbl-tr-${row.id}`}>
                                <th scope="row">1</th>
                                <td>{row.userId}</td>
                                <td>{row.id}</td>
                                <td>{row.title}</td>
                                <td>{row.body}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                    </table>
            }
        </div>
        );
    }
}

export default Filter;