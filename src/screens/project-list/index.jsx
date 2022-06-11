import React, { useEffect, useState } from "react"
import * as qs from "qs"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useDebounce, useMount } from "utils"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personID: ''
    })
    const debouncedParam = useDebounce(param, {time: 2000})
    const [users, setUsers] = useState([])
    const [list, setList] = useState(undefined)

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(JSON.stringify(debouncedParam)))}`).then(async response => {
            if(response.ok) {
                setList(await response.json())
            }
        })
    },[debouncedParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok) {
                setUsers(await response.json())
            }
        })
    },[])
    return (
        <div>
            <SearchPanel param={param} setParam={setParam}/>
            <List list={list} users={users}></List>
        </div>
    )
}
