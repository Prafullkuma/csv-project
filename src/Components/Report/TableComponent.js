import React from 'react'
import {Table} from 'semantic-ui-react'

const TableComponent = (props) => {
    const { csv }=props
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell >Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Duration</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                        {csv.map((ele,i)=>{
                            return (
                                <Table.Row key={i} error>
                                    <Table.Cell><h4>{ele.name}</h4></Table.Cell>
                                    <Table.Cell><h4>{ele.email}</h4></Table.Cell>
                                    <Table.Cell><h4>{ele.duration}</h4></Table.Cell>
                                </Table.Row>
                            )
                        })}
                </Table.Body>
            </Table>
            
        </div>
    )
}

export default TableComponent
