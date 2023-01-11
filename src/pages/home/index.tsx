import React from 'react'
import { NextPageWithLayout } from '../_app'
const home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>home page</h1>
    </div>
  )
}



home.getLayout = (page) => {

  return <div>
    <h1>home layou666t</h1>
    {page}
  </div>
}

export default home