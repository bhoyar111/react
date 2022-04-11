import React, { useState } from 'react';

function Registration() {

    const [userName, setUserName] = useState({
        full_name   :'',
        address     : '',
        email_id    : '',
        mobile_no   : ''
    })
    const [records, setRecords] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserName({...userName, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userName, id: new Date().getTime().toString() }
        setRecords([...records, newRecord]);
        setUserName({full_name: '', address: '', email_id: '', mobile_no: ''})
    }

    return(
        <>
            <div className='container-fluit m-5'>
                <form action=''>
                    <div className='row'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input 
                            id="full_name" 
                            className="form-control" 
                            type="text" 
                            name='full_name'
                            value={userName.full_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email_id" 
                            name='email_id'
                            value={userName.email_id}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                        <textarea
                            type='textarea' 
                            className="form-control" 
                            id="address" 
                            name='address'
                            value={userName.address} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label">Mobile No.</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="mobile_no" 
                            placeholder="Phone"
                            name='mobile_no' 
                            value={userName.mobile_no}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className='container-fluit m-5 bm-10'>
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Full Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">mobile No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        { records.map((curna) => {
                                return(
                                    <tr key={curna.id}>
                                        <td>{curna.full_name}</td>
                                        <td>{curna.address}</td>
                                        <td>{curna.email_id}</td>
                                        <td>{curna.mobile_no}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            </div>
        </> 
    )
}
export default Registration;