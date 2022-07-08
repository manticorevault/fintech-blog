import type { NextPage } from 'next';
import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';

const posts = [
  { title: "Fintech explanation", excerpt: "This is explaining how Fintech works"},
  { title: "I am learning Fintech", excerpt: "I am learning Fintech, so this is the space" }
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray">
      <Head>
        <title>HowToFintech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div>
          { posts.map((post) => (
            <PostCard 
              post={ post }
              key={post.title}
            />
          ))}
        </div>

        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>
    </div>
  ) 
}

export default Home
