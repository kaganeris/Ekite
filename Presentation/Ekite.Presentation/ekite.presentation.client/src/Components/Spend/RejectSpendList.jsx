import React, { useContext } from 'react'
import { SpendContext } from '../../context/SpendContext';
import Swal from 'sweetalert2';

const RejectSpendList = ({ rejectSpendList, setRejectSpendList }) => {

    const { approveSpendProcess } = useContext(SpendContext)

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
        return formattedDate;
    };

    const handleOperation = (id) => {
        const updatedSpendList = rejectSpendList.filter(
            (spend) => spend.id !== id
        );
        setRejectSpendList(updatedSpendList);


        try {
            approveSpendProcess(id);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Harcama Baþarýyla Onaylandý",
                showConfirmButton: false,
                timer: 2000,
            });
            setTimeout(() => { }, 2000)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Harcama Onaylama Ýþlemi Baþarýsýz",
            });
        }
    };

    return (
        <div className="table-responsive">
            {rejectSpendList && (
                <table className="table align-items-center bg-dark text-white table-flush">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className="sort">
                                Ad Soyad
                            </th>
                            <th scope="col" className="sort" data-sort="budget">
                                Onay Durumu
                            </th>
                            <th scope="col" className="sort" data-sort="name">
                                Harcama Tipi
                            </th>
                            <th scope="col" className="sort" data-sort="status">
                                Tutar
                            </th>
                            <th scope="col" className="sort" data-sort="completion">
                                Para Birimi
                            </th>
                            <th scope="col" className="sort" data-sort="completion">
                                Fatura
                            </th>
                            <th scope="col" className="sort" data-sort="completion">
                                Açýklama
                            </th>
                            <th scope="col" className="sort" data-sort="completion">
                                Reddedilme Tarihi
                            </th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className="list">
                        {rejectSpendList.map((spend, index) => (
                            <tr key={index}>
                                <td>{spend.fullName}</td>
                                <td>
                                    <span className="badge badge-dot mr-4">

                                        <i
                                            className={
                                                spend.approvalStatus === "Bekleniyor"
                                                    ? "bg-warning"
                                                    : spend.approvalStatus === "Reddedildi"
                                                        ? "bg-danger"
                                                        : "bg-success"
                                            }
                                        ></i>

                                        <span className="status">{spend.approvalStatus}</span>
                                    </span>
                                </td>
                                <td className="budget">{spend.spendType}</td>
                                <td className="budget">{spend.price}</td>
                                <td className="budget">{spend.currency}</td>
                                <td>
                                    <a
                                        className="btn btn-outline-primary text-white"
                                        href={spend.imagePath}
                                        target="_blank"
                                    >
                                        Görüntüle
                                    </a>
                                </td>

                                <td className="budget">{spend.description}</td>


                                {spend.approvedDate ? (
                                    <td>{formatDate(spend.approvedDate)}</td>
                                ) : (
                                    <td></td>
                                )}
                                {spend.approvalStatus === "Reddedildi" ? (
                                    <td className="text-right" style={{ paddingLeft: '0px' }} >

                                        <a
                                            className="btn btn-outline-primary "
                                            onClick={() => handleOperation(spend.id)}
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
    );
}
export default RejectSpendList