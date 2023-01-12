

import { getPlayList, getPlayListDetail } from '@/api';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getPlayList()
  return {
    paths: res.playlists.map((item) => {
      return {
        params: {
          id: item.id.toString(),
        },
      }
    }),
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params

  const res = await getPlayListDetail(id as string)

  return {
    props: {
      data: res.playlist
    }
  }
}

type PlayListDetailProps = {
  data: PlayList
}
const PlayListDetail: NextPage<PlayListDetailProps> = ({ data }): ReactElement => {

  console.log('👴2023-01-12 14:35:22 [id].tsx line:28', data)
  return <div>
    <Head>
      <title>{data.name}</title>
    </Head>
    <h1>{data.name}</h1>
    <img src={data.coverImgUrl} alt={data.name} width={500} height={500} />

  </div>;
};


export default PlayListDetail;


