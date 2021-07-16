import React from 'react'
import CsvComponent from './Components/CsvComponent'
import { Grid, Segment,Container } from 'semantic-ui-react'


const App = () => {
    return (
        <div style={{marginTop:'20px'}}>
            <Container>
                <Grid columns='equal'>
                    <Grid.Row>
                    <Grid.Column>
                        <Segment><h1 style={{margin:'10px'}}>File Upload + CSV-parser</h1></Segment>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                
                <CsvComponent/>

            </Container>
        </div>
    )
}

export default App
