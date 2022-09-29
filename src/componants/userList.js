import React, { useState, useEffect } from 'react'

//import toast
import { toast } from 'react-toastify'

//import axios
import axios from 'axios'

//import component
import Data from "./data"

//import images
import IconSearch from '../assets/images/icon_search.png'

import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../Actions/index';

function UserList() {
  const [userList, setUserList] = useState()
  const [search, setSearch] = useState("")
  const [totalPages, setTotalPages] = useState()

  const myState = useSelector((state) => state.chnageTheNumber);
  const dispatch = useDispatch();


  const handleGetUserList = () => {
    axios({
      method: 'get',
      url: `https://reqres.in/api/users?page=${myState}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(response => {
        // console.log(response)
        setTotalPages(response?.data?.total_pages)
        if (response.data?.data) {
          setUserList(response?.data?.data)
        } else {
          toast.error(response.data.message)
        }
      }
      )
  }

  useEffect(() => {
    handleGetUserList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myState])


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div className='userlist-main'>
      <div style={{ padding: "0px 26px" }}>
        <h1 style={{ margin: 0 }}>Users</h1>
      </div>
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginTop: "12px", padding: "0px 26px"
      }}>
        <div style={{ position: "relative" }}>
          <img src={IconSearch} alt="search-img" className='search-img' />
          <input type="text" value={search} onChange={handleSearch} placeholder="search user" className='user-search' />
        </div>
        <div>
          <button className='userlist-page-btn'>Reputation</button>
          <button className='userlist-page-btns'>New users</button>
          <button className='userlist-page-btn'>Voters</button>
          <button className='userlist-page-btn'>Editors</button>
          <button className='userlist-page-btn'>Moderators</button>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "70px", justifyContent: "space-between" }}>
        {userList && userList.filter((user) => {
          if (search === '') {
            return user
          } else if (user.first_name.toLowerCase().includes(search.toLowerCase())) {
            return user
          }
        }).map((item, index) => {
          return (
            <Data key={index} email={item.email} fname={item.first_name} lname={item.last_name} id={item.id} avatar={item.avatar} />
          )
        })}
      </div>
      <div style={{ padding: "0px 26px" }}>
        <button className='userlist-pagination-btn' onClick={() => dispatch(decNumber())} disabled={myState === 1}>prev</button>
        <button className='userlist-pagination-btn'>{myState}</button>
        <button className='userlist-pagination-btn' onClick={() => dispatch(incNumber())} disabled={myState === totalPages}>next</button>
      </div>
    </div >
  )
}

export default UserList