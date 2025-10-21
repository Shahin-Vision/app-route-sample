import React from 'react'

export default function ModulesLayout({children} : {
    children: React.ReactNode
}) {
  return (
    <div>
        <h3>Modules</h3>
        {children}
    </div>
  )
}