import React from 'react'
import ChartComponent from './ChartComponent'
import HostComponent from './HostComponent'
import TableComponent from './TableComponent'
import { Header,Grid, Segment } from 'semantic-ui-react'

const ReportComponent = (props) => {
    const { csv }=props

    return (
        <div style={{marginTop:'50px'}}>
            
            {csv.length===0 ?
             <div>
                 <hr/>
                 <Header size='huge'>Upload CSV file get Student result</Header>           
            </div>
            :(<div>
                <hr/>
                <h1>Report</h1>
                    <div style={{margin:'40px'}}>
                            <HostComponent csv={csv}/>
                    </div>
                    <div>
                    <Grid stackable columns={2}>
                            <Grid.Column>
                            <Segment>
                                <TableComponent csv={csv}/>
    
                            </Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment>
                                <ChartComponent csv={csv}/>
                            </Segment>
                            </Grid.Column>
                        </Grid>
                           
                    </div>
             </div>
            )
            }
            
        </div>
    )
}

export default ReportComponent
