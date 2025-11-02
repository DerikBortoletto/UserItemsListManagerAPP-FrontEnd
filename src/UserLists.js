import React, { Component } from "react";

import ListComponent from "./ListComponent";

export default class UserLists extends Component{
    state = { lists: null, loading: true }
    async componentDidMount(){
        var url = "http://localhost:8000/list/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({lists: data, loading: false});
    }

    render()
    {
        return (
            <div>
                <ListComponent listName={"Minha Lista"} />
                <ListComponent listName={"Minha Lista 2"} />
            </div>
        )
    }
    
}