import React, { Component } from 'react';
import './RenderProps.css';

function ContributorProfile({total, avatar, username}){
  return (<div className="contributor">
    <div className="profile">
      <img src={avatar} width="60px" />
      <p>{username}</p>
    </div>
    <div className="total">
      <p className="number">{total}</p> 
      commits
    </div>
  </div>);
}

ContributorProfile.defaultProps = {
  total: 0,
  avatar: 'https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif',
  username: 'unknown'
};

// Render props component
class FetchContributors extends React.Component {
  constructor(){
    super();
    this.state = {
      contributorList: []
    };
  }
  
  fetchContributors = (repoPath) => {
    fetch(`https://api.github.com/repos/${repoPath}/stats/contributors`)
      .then((data) => data.json())
      .then((data) => data.map(({ total, author }) => ({
            total: total,
            username: author.login,
            avatar: author.avatar_url,
            id: author.id
          })))
      .then((contributorList) => {
        this.setState({
          contributorList
        });
      });
  }
  
  componentDidMount(){
    this.fetchContributors(this.props.repoPath);
  }

  componentDidUpdate(prevProps){
    if(prevProps.repoPath !== this.props.repoPath)
      this.fetchContributors(this.props.repoPath);
  }
  
  render(){
    const { contributorList } = this.state;
    return (
      <React.Fragment>
        {this.props.children(contributorList)}
      </React.Fragment>
    )
  }
}

class RepoForm extends React.Component {
  constructor(){
    super();
    this.state ={
      repoPath: 'findmypast-oss/git-mob'
    };
  }
  
  handleChange = (event) => {
    this.setState({
      repoPath: event.target.value
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>Repo: <input name="repo-path" onChange={this.handleChange} value={this.state.repoPath} /></label>
          <button type="submit">Find</button>
        </p>
      </form>
    );
  }
}

class RenderProps extends Component {
  constructor(){
    super();
    this.state ={
      repoPath: 'findmypast-oss/git-mob'
    };
  }
  
  handleSubmit = ({ repoPath }) => {
    this.setState({
      repoPath
    });
  }
  
  render() {
    return (<div>
        <h1>Contributors to: </h1>
        <RepoForm onSubmit={this.handleSubmit} />
        <div className="contributors">
          <FetchContributors repoPath={this.state.repoPath}>{
            (contributorList) => contributorList.map((contributor) => {
              //return (<React.Fragment>{contributor.id}<br/></React.Fragment>)
              return <ContributorProfile key={contributor.id} {...contributor} />
            })
         }</FetchContributors>
        </div>
      </div>);
  }
}

export default RenderProps;