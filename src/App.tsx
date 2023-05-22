import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './features/counter/counterSlice'
import { postsList, fetchPosts, isPostFetching, Post} from './features/posts/postsSlice'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const count = useSelector(selectCount)
  const posts: Post[] = useSelector(postsList)
  const isLoading = useSelector(isPostFetching)

  const dispatch = useDispatch<any>()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleGetPosts = () => {
    dispatch(fetchPosts())
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <p>
        count is {count}
        </p>
        <button onClick={handleGetPosts}>Получить посты</button>
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && posts?.map(post => <div key={post.id} style={{padding: '1rem'}}>{post.body}</div>)}
    </>
  )
}

export default App
