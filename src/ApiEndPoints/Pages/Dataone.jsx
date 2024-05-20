import React from 'react'
import { mycontext } from '../../App'
import { useContext } from 'react'
function Dataone() {
    const api = useContext(mycontext)
  return (
    <div>
        <h1>Data One Component</h1>
          <div className="container">
              <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                      {
                         api.map((res)=>{
                             return(
                                 <div>
                                    <h1>Name: {res.name.first} {res.name.last}</h1>
                                    <img src={res.picture.large} alt="" />
                                 </div>
                             )
                         })
                      }
                  </div>
                  <div className="col-md-4"></div>
              </div>
          </div>
    </div>
  )
}

export default Dataone
