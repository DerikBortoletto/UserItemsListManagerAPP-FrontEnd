import React, { Component } from "react";

import ListComponent from "./ListComponent";

export default class UserLists extends Component{

    state = { lists: null, loading: true }

    async componentDidMount(){
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        config.headers["Authorization"] = "Token 79395728c39511654a037e9fa10838884ed15fb5"

        var url = "http://localhost:8000/list/";
        const response = await fetch(url, config);
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