import axios from "axios"
import React, { useEffect, useState } from "react"
import { Alert } from "react-native"


const useFetch = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchData () {
    try {
      setLoading(true)
      const {data:response} = await axios.get("http://localhost:8081/movies", )
      setData(response)
      console.log(response)
      
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return {data, loading}
}
export default useFetch