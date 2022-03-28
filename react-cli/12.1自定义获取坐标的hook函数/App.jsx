import React from 'react'
import { usePosition } from './hooks/usePosition'
export default function App() {
  const point = usePosition();
  return (
    <div>
      <div>x:{point.x}</div>
      <div>y:{point.y}</div>
    </div>
  )
}
