import React, { useEffect, useState } from "react";

/* 
  mount =>  useEffect(function(){}, [])
  update =>  useEffect(function(){}, [dependancy])
  unmount => useEffect(function(){
      return () => {
        }
  }, [dep])
*/

const URL = "https://dummyjson.com"

const Page4 = (props) => {
  const [users,setUsers] = useState([])

  const readUsers = async () => {
      await fetch(`${URL}/users`)
            .then(out => out.json())
            .then(res => {
                console.log(`output =`, res)
                setUsers(res?.users)
            }).catch(err => console.error(err.message))
  }

    // mount
    useEffect(function(){
        readUsers()
    },[])


  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12">
              <h1 className="display-1 text-success text-center">Page-4</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
              <div className="table table-responsive">
                  <table className="table table-bordered table-striped table-hover text-center">
                      <thead>
                        <tr>
                          <th>FirstName</th>
                          <th>lastName</th>
                          <th>Image</th>
                          <th>Gender</th>
                          <th>Email</th>
                          <th>Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                          {
                              users?.map((item,index) => {
                                return (
                                  <tr key={index}>
                                      <td> {item.firstName} </td>
                                      <td> {item.lastName} </td>
                                      <td> 
                                          <img src={item?.image} className="img-fluid" />
                                        </td>
                                      <td> { item.gender } </td>
                                      <td> { item.email } </td>
                                      <td> { item.phone } </td>
                                  </tr>
                                )
                              })
                          }
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Page4
