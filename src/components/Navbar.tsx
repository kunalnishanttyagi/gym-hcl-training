import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
    <div className="container mx-auto flex justify-between justify-around items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold">The Gym</h1>

        {/* Navigation Links */}
        <div className="space-x-4">
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/signin" className="hover:text-gray-400">Signin</Link>
            <Link href="/signup" className="hover:text-gray-400">Signup</Link>
        </div>
    </div>
</nav>
  )
}

export default Navbar
