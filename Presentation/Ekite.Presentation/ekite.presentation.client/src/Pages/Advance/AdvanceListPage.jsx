import React, { useContext, useEffect, useState } from 'react'
import { AdvanceContext } from '../../context/AdvanceContext'
import { AuthContext } from '../../context/AuthContext';
import AdvanceList from '../../Components/Advance/AdvanceList';
import AdvanceHeader from '../../Components/Advance/AdvanceHeader';
import { PageContext } from '../../context/PageContext';


const AdvanceListPage = () => {

    const { getAdvanceList } = useContext(AdvanceContext)
    const { id, setId, setIsAuthenticated } =
        useContext(AuthContext);
    const { handlePrevPage } = useContext(PageContext)
    const [advanceList, setAdvanceList] = useState(null);
    

    useEffect(() => {
        if (id !== 0) {
            (async () => {
                try {
                    handlePrevPage(location.pathname)
                  
                    let data = await getAdvanceList(id);
                    console.log(data);
                    setAdvanceList(data);
                } catch (error) { }
            })();

        } else {
            const storedEmployeeId = localStorage.getItem("id");
            if (storedEmployeeId) {
                setId(parseInt(storedEmployeeId));
            }
        }
    }, [id]);

    return (
        <>
            <div className="main-content" id="panel">
                <AdvanceHeader />
                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <AdvanceList advanceList={advanceList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvanceListPage