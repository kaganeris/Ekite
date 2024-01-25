import React, { useContext } from 'react'
import { AdvanceContext } from '../../context/AdvanceContext'
import { ThemeContext } from '../../context/ThemeContext'
import Swal from 'sweetalert2';

const RejectAdvanceList = ({rejectAdvanceList,setRejectAdvanceList}) => {
const {approveAdvanceProcess}= useContext(AdvanceContext)
const {darkMode}=useContext(ThemeContext)


console.log(rejectAdvanceList);

const handleOperation=(id) => {
 
 const updatedAdvanceList = rejectAdvanceList.filter((advance)=> advance.id !== id);
 setRejectAdvanceList(updatedAdvanceList);

 try {
  
  approveAdvanceProcess(id);
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Avans Başarıyla Onaylandı",
    showConfirmButton: false,
    timer: 2000,
  });
  setTimeout(() => { }, 2000);
} catch (error) {
  Swal.fire({
    icon: "error",
    title: "Avans Onaylama İşlemi Başarısız!",
  });
}

}
return (
  <div className="table-responsive">

    {rejectAdvanceList && (
      <table 
      className={darkMode? "table-dark table align-items-center text-black table-flush":"table align-items-center bg-dark text-white table-flush"}>
        <thead className={darkMode? "thead-dark": "bg-dark"}>
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
              Reddedilme Tarihi
            </th>
            <th scope="col"></th>
            <th scope="col"></th>

          </tr>
        </thead>

        <tbody className='list'>
          {rejectAdvanceList.map((advance, index) => (
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
             
              {advance.approvalStatus === "Reddedildi" ? (
                <td className="text-right" style={{ paddingLeft: '0px' }} >

                  <a
                    className="btn btn-outline-primary "
                    onClick={() => handleOperation(advance.id)}
                  >
                    Onayla
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

export default RejectAdvanceList