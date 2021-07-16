import React from 'react'

const HostComponent = (props) => {
        const {csv}=props
        
        //Total Participants
        const totalParticipants=csv.length -1
    
         //Get the Host name and Duration
        function hostName(csv){
            const result=csv.find((ele)=>{
                return ele.guest.toLowerCase()==="no"
            })
            return {
                hotName:result.name,
                duration:result.duration,
            }
        }
        const data=hostName(csv)

        //Converting to Hours and minutes
        
        function timeConvert(n) {
            let num = n;
                let hours = (num / 60);
                let rhours = Math.floor(hours);
                let minutes = (hours - rhours) * 60;
                let rminutes = Math.round(minutes);
                
            return `${rhours} hour and ${rminutes} minutes`  
        }  
        const timer=timeConvert(data.duration)

        return (
            <div>
                <h1>Host Name-{data.hotName}</h1>
                <h2>Total Participants-{totalParticipants}</h2>
                <h2>Duration-{data.duration} Minutes ({timer})</h2>
            </div>
        )
}

export default HostComponent
