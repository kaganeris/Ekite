import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const EmployeeWorkInfo = ({setActiveFormNumber,activeFormNumber}) => {
const{darkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode ? "card" : "card bg-dark"}>
    <div className={darkMode ? "card-header" : "card-header bg-dark"}>
      <div className="row align-items-center">
        <div className="col-8">
          <h3 className={darkMode ? "mb-0" : "mb-0 text-white"}>
            Pozisyon Bilgileri
          </h3>
        </div>
      </div>
    </div>
    <div className="card-body">
      <form encType="multipart/form-data">
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  className={
                    darkMode
                      ? "form-control-label"
                      : "form-control-label text-white"
                  }
                  htmlFor="phone"
                >
                  Departman
                </label>
                <input
                  type="text"
                  // value={""}
                  id="phone"
                  className={
                    darkMode
                      ? "form-control"
                      : "form-control bg-secondary text-dark"
                  }
                  // onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>    
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  className={
                    darkMode
                      ? "form-control-label"
                      : "form-control-label text-white"
                  }
                  htmlFor="city"
                >
                 Meslek
                </label>
                <input
                  type="text"
                  // value={""}
                  id="city"
                  className={
                    darkMode
                      ? "form-control"
                      : "form-control bg-secondary text-dark"
                  }
                  // onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>    
          </div>



          <div className="row">
    

            <div className="col-lg-6">
              <div className="form-group">
                <label
                  className={
                    darkMode
                      ? "form-control-label"
                      : "form-control-label text-white"
                  }
                  htmlFor="district"
                >
                 Maaş
                </label>
                <input
                  type="text"
                  // value={""}
                  id="district"
                  className={
                    darkMode
                      ? "form-control"
                      : "form-control bg-secondary text-dark"
                  }
                  // onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  className={
                    darkMode
                      ? "form-control-label"
                      : "form-control-label text-white"
                  }
                  htmlFor="district"
                >
                 İşe Giriş Tarihi
                </label>
                <input
                  type="date"
                  // value={""}
                  id="district"
                  className={
                    darkMode
                      ? "form-control"
                      : "form-control bg-secondary text-dark"
                  }
                  // onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>           
          </div>      
        </div>
        <div className="main-content">
          <div className="container">
            <div className="row justify-content-between">
            <div className="col-auto ">
                  <input
                    type="submit"
                    value="Geri"
                    className="btn btn-m btn-primary"
                    onClick={()=>{setActiveFormNumber(activeFormNumber - 1)}}
                  />
                </div>
              <div className="col-auto ">
                <input
                  type="submit"
                  value="Kaydet"
                  className="btn btn-m btn-primary"        
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default EmployeeWorkInfo