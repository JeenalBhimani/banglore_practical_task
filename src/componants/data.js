import React from 'react'

function Data({ avatar, id, lname, fname, email }) {

  return (
    <>
      <div className="userbox-main-div">
        <div className="list-div">
          <div>
            <img src={avatar} alt="user-img" className='user-img' />
          </div>
          <div className='box-user-list'>
            <h2>{fname} {lname}</h2>
            <h4>{email}</h4>
            <div >
              <button className='userbox-btn'>clothes</button>
              <button className='userbox-btn'>stem</button>
              <button className='userbox-btn'>headset</button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Data