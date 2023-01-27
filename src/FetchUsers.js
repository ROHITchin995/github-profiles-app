import React, { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/fabpot/followers?per_page=100'

export const FetchUsers = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getProfiles = async ()=>{
        const response = await fetch(url)
        const data = await response.json()
        setData(paginate(data))
        setLoading(false)
    }
    useEffect(() => {
      getProfiles()
    
    }, [])
    
  return { loading, data }
}
