import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlogLayout from '../components/BlogLayout'
import PostList from '../components/PostList'

export default function Home() {
  return (
    <BlogLayout>
      <PostList />
    </BlogLayout>
  )
}
