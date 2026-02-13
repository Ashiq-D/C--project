import React from 'react'
import { Search } from 'lucide-react'
const SearchBar = () => {
  return (
    <div className="p-2 rounded-full hover:bg-shop-light-blue/10 transition-all duration-300">
        <Search className="w-5 h-5 text-gray-600 hover:text-shop-light-blue transition-colors duration-300" />
    </div>
  )
}

export default SearchBar