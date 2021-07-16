import React, { useState } from 'react'
import CSVReader from 'react-csv-reader'
import { Button } from 'semantic-ui-react'


const Upload = (props) => {

    const {addItem}=props

    const [data,setData]=useState([])
    
    const loadFiles=(data)=>{
      
        const result=data.map((ele)=>{
            return { ...{name:ele["Name (Original Name)"]},
                     ...{email:ele["User Email"]},
                     ...{duration:ele["Total Duration (Minutes)"]},
                     ...{guest:ele["Guest"]} 
                  }
        })
        setData(result)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
       
        addItem(data)
    }
    

    return (
        <div style={{marginTop:'40px'}}>
            <form onSubmit={handleSubmit}>
             <div style={{display:'flex',justifyContent:'center'}}>

                <CSVReader
                    inputStyle={{color: 'red',width:'300px'}}
                    inputId="selectFile"
                    parserOptions={{ header: true }}
                    onFileLoaded={loadFiles}
                />
                <Button primary content="upload" type="submit"/>

             </div>
            </form>
        </div>
    )
}

export default Upload