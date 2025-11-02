import React, { Component } from "react";

import ListComponent from "./ListComponent";
import LoginComponent from "./LoginComponent";

export default class UserLists extends Component{

    state = { lists: [], loading: true }

    async componentDidMount(){
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        config.headers["Authorization"] = "Token bd1084beede7a0c0f8db404527ac7daa7d1a1c69"

        var url = "http://localhost:8000/list/";
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data)
        this.setState({lists: data, loading: false});
    }

    render()
    {

        const listsApi = this.state.lists;
        var token = '';

        if(token==='')
            {
                return <LoginComponent />
            }
        else
            return (
                <div>
                    {listsApi.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set} />)}
                </div>
            )
    }
    
}