import axios from "axios"
import React, { useEffect, useState } from "react"
import { Alert } from "react-native"


const useFetch = (id) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  async function fetchData () {
    try {
      const response = await axios.get(`http://10.0.2.2:3000/movies/${id}`,)
      setData(response.data)
      console.log(data)
      
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return {data, loading}
}
export default useFetch