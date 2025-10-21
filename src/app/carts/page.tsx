import Link from 'next/link'
import React from 'react'

export default function Cart() {
  return (
    <div>
        <h3>Cart</h3>
        <Link href="/products#recommended"
        >Goto Recommended Section</Link>
    </div>
  )
}