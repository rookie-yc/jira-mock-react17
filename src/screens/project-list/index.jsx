import React, { useEffect, useState } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"

const apiUrl = process.env.REACT_APP_AOI_URL

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects`).then(async response => {
            if(response.ok) {
                setList(await response.json())
            }
        })
    },[param])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok) {
                setUsers(await response.json())
            }
        })
    },[])
    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users}/>
            <List list={list} users={users}></List>
        </div>
    )
}
