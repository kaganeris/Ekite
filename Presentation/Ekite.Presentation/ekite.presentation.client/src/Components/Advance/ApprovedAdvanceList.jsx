import React, { useContext } from 'react'
import { AdvanceContext } from '../../context/AdvanceContext';
import { ThemeContext } from '../../context/ThemeContext';
import Swal from "sweetalert2";

const ApprovedAdvanceList = ({ approvedAdvanceList, setApprovedAdvanceList }) => {

  const { rejectAdvanceProcess } = useContext(AdvanceContext)
  const {darkMode}=useContext(ThemeContext)


  const handleOperation = (id) => {
    const updatedAdvanceList = approvedAdvanceList.filter((advance) => advance.id !== id);
    setApprovedAdvanceList(updatedAdvanceList);

    try {
      rejectAdvanceProcess(id);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Avans Başarıyla Reddedildi",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => { }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Avans Reddetme İşlemi Başarısız!",
      });
    }
  }
  //fullname-onay durumu-avanstipi-tutar-parabirimi-onay tarihi
  return (
    <div className="table-responsive">

      {approvedAdvanceList && (
        <table 
        className={darkMode? "table align-items-center table-dark text-black table-flush":"table align-items-center bg-dark text-white table-flush"}>
          <thead className={darkMode ? "thead-dark" : "bg-dark"}>
            <tr>
              <th scope="col" className="sort">
                Ad Soyad
              </th>
              <th scope="col" className="sort" data-sort="budget">
                Onay Durumu
              </th>
              <th scope="col" className="sort" data-sort="completion">
                Avans Tipi
              </th>
              <th scope="col" className="sort" data-sort="name">
                Tutar
              </th>
              <th scope="col" className="sort" data-sort="status">
                Para Birimi
              </th>
              <th scope="col" className="sort" data-sort="completion">
                Onay Tarihi
              </th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody className='list'>
            {approvedAdvanceList.map((advance, index) => (
              <tr key={index}>
                <td>{advance.fullName}</td>

                <td>
                  <span className="badge badge-dot mr-4">

                    <i
                      className={
                        advance.approvalStatus === "Bekleniyor"
                          ? "bg-warning"
                          : advance.approvalStatus === "Reddedildi"
                            ? "bg-danger"
                            : "bg-success"
                      }
                    ></i>

                    <span className="status">{advance.approvalStatus}</span>
                  </span>
                </td>
                <td className='budget'>{advance.advanceType}</td>
                <td className='budget'>{advance.amount}</td>
                <td className='budget'>{advance.currency}</td>
                <td className='budget'>{advance.approvalDate}</td>
                {advance.approvalStatus === "Onaylandı" ? (
                  <td className="text-right" style={{ paddingLeft: '0px' }} >

                    <a
                      className="btn btn-outline-danger "
                      onClick={() => handleOperation(advance.id, false)}
                    >
                      Reddet
                    </a>

                  </td>
                ) : (
                  <td></td>
                )}



              </tr>

            ))}
          </tbody>

        </table>


      )}
    </div>

  )
}

export default ApprovedAdvanceList