import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';



export default function Home ({ posts } : { posts: any}) {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray">
      <Head>
        <title>HowToFintech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div>
          { posts.map((post: any) => (
            <PostCard 
              post={ post.node }
              key={post.title}
            />
          ))}
        </div>

        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget categories={undefined} slug={undefined}/>
              <Categories />
            </div>
        </div>
      </div>
    </div>
  ) 
}


export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

