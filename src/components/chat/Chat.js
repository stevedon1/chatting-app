import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import io from 'socket.io-client'
import './Chat.css'

const Chat = () => {
  const location = useLocation()
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  useEffect(()=>{
    const {name, room} = queryString.parse(location.search)
    setName(name)
    setRoom(room)
  })
  return (
    <div>Chat</div>
  )
}

export default Chat