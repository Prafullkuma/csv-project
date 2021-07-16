import React,{useState} from 'react'
import Upload from './Upload/Upload'
import ReportComponent from './Report/ReportComponent'
const CsvComponent = () => {
    const [csv,setCsv]=useState([])
    const [flag,setFlag]=useState(false)

    const addItem=(csvData)=>{
        const result=[...csv,...csvData]
        setCsv(result)
        setFlag(true)
    } 
    
    return (
        <div>
            <Upload addItem={addItem}/>
            <ReportComponent csv={csv} />
        </div>
    )
}

export default CsvComponent
