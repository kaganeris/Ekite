import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const ApprovedLeaveListHeader = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
        <div className={darkMode? "header bg-primary pb-6": "header bg-dark pb-6"}>
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4">
              <div className="col-lg-6 col-7">
                <h6 className="h2 text-white d-inline-block mb-0">Onaylanan İzin İstekleri</h6>
              </div>
            </div>
          </div>
        </div>
      </div>)
}

export default ApprovedLeaveListHeader