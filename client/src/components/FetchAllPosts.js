import React from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import { Card, Loader, Segment, Dimmer, Header } from 'semantic-ui-react'
import { getPosts } from '../actions/posts'
import PostForm from './PostForm'
import { Link } from 'react-router-dom'

class FetchAllUsers extends React.Component {

  state = { renderNew: false }

  componentDidMount() {
    const { dispatch } = this.props
    const { id } = this.props.match.params
    dispatch( getPosts(id) )
  }

  displayPosts = () => {
    const { posts, user } = this.props
    if(user){
      if(posts.length > 0) {
<<<<<<< HEAD
        
        return posts.map( (post, i) =>
          <Card key={i}>
=======
        return posts.map( (post, i) =>
          <Card key={i}>
            { i + 1 }: {" "}
>>>>>>> single post and links to
            <Link to={`/users/${user.id}/posts/${post.id}`}>{ post.content }</Link>
          </Card>
        )
      }
      return<Header as='h3'>{`This user doesn't have any posts yet.`}</Header>
    } else {
        return(
          <Dimmer>
            <Loader>Loading User</Loader>
          </Dimmer>
        )
      }
<<<<<<< HEAD
  }

  checkUser = (userId, pageId) => {
    if( pageId ) {
      if( userId === pageId.id ) {
        this.setState({ renderNew: true })
      }
    }
=======
>>>>>>> single post and links to
  }

  render() {
    const { user, pageId } = this.props
    let email = pageId ? pageId.email : ''
    if( this.state.renderNew )
      return(
        <Segment basic>
          <PostForm />
          <Header as='h1'>{`${email}'s Posts`}</Header><br/>
          { this.displayPosts() }
        </Segment>
      )
    else
      return(<Segment basic>
        { this.checkUser(user.id, pageId) }
        <Header as='h1'>{`${email}'s Posts`}</Header><br/>
        { this.displayPosts() }
      </Segment>
      )
  }
}

const mapStateToProps = ( state, props ) => {
  const { id } = props.match.params
  const user = state.user
  const pageId = state.users.find( u => u.id == id)
  return { user, pageId, posts: state.post }
}

export default connect(mapStateToProps)(FetchAllUsers)
