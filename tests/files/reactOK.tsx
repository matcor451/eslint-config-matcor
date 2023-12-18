import React, { useEffect, useState } from 'react'

export const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    setData('test')
  }, [])

  return (
    <div>
      Hello World {data}
    </div>
  )
}
