import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import  { readAllUser, userDelete } from '../Redux/Actions/UserAction'
import { toast } from 'react-toastify'
import UserCard from '../Component/UserCard'

function Home() {
  const [users,setUsers] = useState([])
  const dispatch = useDispatch()

  const readData = useCallback(async function(){
      await dispatch(readAllUser())
            .unwrap()
            .then(res => {
                console.log(`home =`, res)
                setUsers(res?.users)
            })
            .catch(err => {
              toast.error(err?.response?.data?.msg)
            })
  },[])

  useEffect(() => {
      return () => {
        readData()
      }
  }, [])

     
  // delete user
    const deleteHandler = async (id) => {
        if(window.confirm(`Are you sure to delete user?`)) {
            await dispatch(userDelete(id))
              .unwrap()
              .then(res => {
                toast.success(res?.data?.msg)
                readData()
              })
              .catch(err => {
                toast.error(err?.response?.msg)
              })
        }
    }


  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6 className="display-6 text-dark">Home</h6>
          </div>
        </div>

        <div className="row">
            {
                users?.map((item,index)=> {
                  return (
                      <UserCard key={index} {...item} deleteHandler={deleteHandler}  />
                  )
                })
            }
        </div>
    </div>
  )
}

export default Home
