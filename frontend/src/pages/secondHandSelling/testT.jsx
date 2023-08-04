import React, { useEffect, useState } from "react"

const PassParam = () => {
  const [user, setUser] = useState([])
  const id = 1

  const fetchData = () => {
    fetch(`http://localhost:8000/api/selling${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data[0].name)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    Name: {user}
    </div>
}

export default PassParam