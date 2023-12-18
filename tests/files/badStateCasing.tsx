import React, { useEffect, useState } from 'react'

export const App = () => {
  const [Data, setData] = useState()

  useEffect(() => {
    setData('test')
  }, [])

  return (
    <div>
      Hello World {Data}
    </div>
  )
}
