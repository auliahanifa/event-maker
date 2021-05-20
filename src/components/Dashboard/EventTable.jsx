import React, { Component } from 'react';
import Navbar from '../Home/NavbarComponent';
import SearchBox from './SearchComponent';
import Pagination from './PaginationComponent';
import Header from './Header';


class EventTable extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="container">
                    {/* <SearchBox /> */}
                    <Pagination />
                </div>
            </div>
        )
    }
}

export default EventTable;