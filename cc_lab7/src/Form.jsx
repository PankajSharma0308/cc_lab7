import React from "react";
import Axios from 'axios';
import { useState,useEffect } from "react";

function Form(){

    const [State_Name, setState_Name] = useState('');
    const [Date_of_Record, setDate_of_Record] = useState('');
    const [No_of_Samples, setNo_of_Samples] = useState('');
    const [No_of_Deaths, setNo_of_Deaths] = useState('');
    const [No_of_Discharge, setNo_of_Discharge] = useState('');
    const [No_of_Negative, setNo_of_Negative] = useState('');
    const [No_of_Positive, setNo_of_Positive] = useState('');


    // const register = async() => {
    //     let getData =  await Axios.post('http://127.0.0.1/add',{
    //         header:{
    //             'Content-type': 'application/json'
    //         },
    //         data:{
    //             State_Name: State_Name,
    //             Date_of_Record: Date_of_Record,
    //             No_of_Samples: No_of_Samples,
    //             No_of_Deaths: No_of_Deaths,
    //             No_of_Discharge: No_of_Discharge,
    //             No_of_Negative: No_of_Negative,
    //             No_of_Positive: No_of_Positive
    //         }
    //     })   ;
    // };

    const reg = async () => {
        try{
            const res = await Axios({
            method: "POST",
            header:{
                        'Content-type': 'application/json'
                },
            data: {
                    State_Name: State_Name,
                    Date_of_Record: Date_of_Record,
                    No_of_Samples: No_of_Samples,
                    No_of_Deaths: No_of_Deaths,
                    No_of_Discharge: No_of_Discharge,
                    No_of_Negative: No_of_Negative,
                    No_of_Positive: No_of_Positive
            },
            url: "http://localhost:3000/add",
            })
            console.log(res)
            return res;
        }catch{
            return err;
        }
      };


    return (
        <>
        <div className="mt-10 w-full p-10">
            <form className="flex flex-col m-5 justify-between items-stretch" method="POST" >
                <label> Input State Name </label>
                <input type='text' name="State_Name" value={State_Name} onChange={e => setState_Name(e.target.value)}/> 
                <label> Input Date_of_Record </label>
                <input type='Date' name="Date_of_Record"  value={Date_of_Record} onChange={e => setDate_of_Record(e.target.value)}/> 
                <label> Input No_of_Samples</label>
                <input type='number' name="No_of_Samples" value={No_of_Samples} onChange={e => setNo_of_Samples(e.target.value)}/> 
                <label> Input No_of_Deaths </label>
                <input type='number' name="No_of_Deaths" value={No_of_Deaths} onChange={e => setNo_of_Deaths(e.target.value)}/> 
                <label> Input No_of_Positive </label>
                <input type='number' name="No_of_Positive" value={No_of_Positive} onChange={e => setNo_of_Positive(e.target.value)}/> 
                <label> Input No_of_Negative </label>
                <input type='number' name="No_of_Negative" value={No_of_Negative} onChange={e => setNo_of_Negative(e.target.value)}/> 
                <label> Input No_of_Discharge </label>
                <input type='number' name="No_of_Discharge" value={No_of_Discharge} onChange={e => setNo_of_Discharge(e.target.value)}/> 
                <button type='submit' onSubmit={reg}>Submit</button>
            </form>
        </div>

        </>
    );

};

export default Form;


//axios async await for inserting?