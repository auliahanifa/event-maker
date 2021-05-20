import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../../components/Home/NavbarComponent';
import { TableHeader, Pagination, Search } from '../../components/Dashboard';
import MasterData from '../../data.json';
import { Row, Col, Table } from 'react-bootstrap';


const DataTable = () => {
    const [inputText, setInputText] = useState([]);
    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 5;

    const headers = [
        { name: "No.", field: "eventId", sortable: true},
        { name: "Title", field: "eventTitle", sortable: true },
        { name: "Date", field: "date", sortable: true },
        { name: "Location", field: "location", sortable: false },
        { name: "Participants", field: "participants", sortable: false },
        { name: "Note", field: "note", sortable: false }    
    ];

    useEffect(() => {
        const getData = () => {
            fetch('../../data.json')
            fetch(MasterData)
            .then(function(resp) {
                return resp.json();
            })
            .then(function(data) {
                console.log(data.items)
                setData(data)
            });
            // fetch(MasterData, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     }
            // }).then(function(response) {
            //     console.log(response)
            //     return response.json();
            // }).then(function(datajson) {
            //     setData(datajson)
            // });
        }

        getData();

    }, []); 

    const eventsData = useMemo(() => {
        let computedEvents = data;

        if (search) {
            computedEvents = computedEvents.filter(
                eventData =>
                    eventData.eventTitle.toLowerCase().includes(search.toLowerCase()) ||
                    eventData.date.toLowerCase().includes(search.toLowerCase()) ||
                    eventData.location.toLowerCase().includes(search.toLowerCase())       
            );
        }

        setTotalItems(computedEvents.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedEvents = computedEvents.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedEvents.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [data, currentPage, search, sorting]);

    return(
        <div>
            <Navbar />
            <div className="container">
                
                <Row style={{ marginTop: "4rem"}}>
                    <Col>
                        <Pagination 
                            total={totalItems}
                            itemsPerPage={ITEMS_PER_PAGE}
                            currentPage={currentPage}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </Col>
                    <Col className="mr-auto">
                        <Search 
                            onSearch={value => {
                                setSearch(value);
                                setCurrentPage(1);
                            }}
                        />
                    </Col>
                </Row>
                <Table responsive>
                    <TableHeader headers={headers}
                        onSorting={(field, order) =>
                            setSorting({ field, order })
                        }
                    />
                    <tbody>
                        {eventsData.map(event => (
                            <tr>
                                <th scope="row" key={event.eventId}>
                                    {event.eventId}
                                </th>
                                <td>{event.eventTitle}</td>
                                <td>{event.date}</td>
                                <td>{event.location}</td>
                                <td>{event.participants}</td>
                                <td>{event.note}</td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
            </div>
        </div>
    )
}

export default DataTable;