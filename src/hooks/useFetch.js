import axios from "axios"
import React, { useEffect, useState } from "react"
import { Alert } from "react-native"


const useFetch = (end,id) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData () {
    try {
      const response = await axios.get(`http://192.168.1.33:8081/${end}`,)
      setData(response.data)
      
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