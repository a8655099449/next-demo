import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
const App = () => {

  const { push, replace, back } = useRouter()

  return (
    <div>
      <h1>hello word</h1>
      <button onClick={() => push(`/home`)}>跳转</button>
      <button onClick={() => replace(`/home`)}>删除当前的页面跳转</button>
      <button onClick={() => back()}>返回上一级</button>
    </div>
  )
}

export default App