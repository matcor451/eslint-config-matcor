import React, { useEffect, useState } from 'react'

export const App = () => {
  const [data, setTestData] = useState()

  useEffect(() => {
    setTestData('test')
  }, [])

  return (
    <div>
      Hello World {data}
    </div>
  )
}
