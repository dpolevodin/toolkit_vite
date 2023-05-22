import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const fetchPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            return data
        }
)

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const initialState = {
    posts: [] as Post[],
    loading: false,
  }

export const postsSlice = createSlice({
  name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(fetchPosts.pending, (state) => {state.loading = true})
      builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {state.loading = false, state.posts = payload })
      builder.addCase(fetchPosts.rejected, (state) => {state.loading = false})
    }
}
)

export const postsList = (state: RootState) => state.posts.posts
export const isPostFetching = (state: RootState) => state.posts.loading

export default postsSlice.reducer