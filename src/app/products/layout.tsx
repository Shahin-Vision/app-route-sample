import React from 'react'

export default function ProductsLayout({children} : {
    children: React.ReactNode
}) {
  return (
    <div>
        <h3>This is products related page</h3>
        {children}
    </div>
  )
}