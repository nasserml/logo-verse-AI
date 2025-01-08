import React from 'react'
import Info from './_components/Info'
import LogoList from './_components/LogoList'

function Dashboard() {
  return (
    <div className='mt-40 px-10 md:px-40 lg:px-64'>
        <Info />

        <LogoList />

    </div>
  )
}

export default Dashboard