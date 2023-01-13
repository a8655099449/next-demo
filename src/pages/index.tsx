import { getPlayList } from '@/api'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { NextPageWithLayout } from './_app'
import Head from 'next/head'
const App: NextPageWithLayout<{
  playList: any[]
}> = ({ playList }) => {

  const { push, replace, back } = useRouter()
  return (
    <div>
      <Head>
        <title>next-demo</title>
      </Head>
      <h1>歌单列表</h1>
      <ul>
        {
          playList.map(item => <li key={item.id}>
            <Link href={`/playList/${item.id}`}>
              {item.name}</Link>
          </li>)
        }
      </ul>


      <button onClick={() => push(`/home`)}>跳转</button>
      <button onClick={() => replace(`/home`)}>删除当前的页面跳转</button>
      <button onClick={() => back()}>返回上一级</button>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const res = await getPlayList()

  return {
    props: {
      playList: res.playlists

    }
  }
}


export default App