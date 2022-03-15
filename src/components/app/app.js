import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../serch-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';



const App = () => {

const data = [
    {label: 'Going to lern React', important: true, id: 'eweewe'},
    {label: 'That is so goog', important: false, id: 'esweewe'},
    {label: 'I need a break..', important: false, id: 'eweewes'}
]

    return (
      <div className="app">
            <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
     </div>
        
    )
}
export default App;