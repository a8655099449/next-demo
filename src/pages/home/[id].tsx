import { useRouter } from 'next/router'
import React from 'react'
const HomeChild = () => {

  const { id ,name ,} = useRouter().query

  return (
    <div>
      HomeChild {id}:{name}
    </div>
  )
}


export default HomeChild