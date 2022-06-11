import React, { useEffect, useState } from "react"

export const SearchPanel = (props) => {
    const {param, setParam, users} = props

    return <form>
        <div>
            <input type='text' value={param.name} onChange = {evt => setParam({
                ...param,
                name: evt
            })}/>
            <select value={param.personId} onChange = {evt => setParam({
                ...param,
                personId: evt
            })}>  
                <option value={''}>负责人</option>
                { 
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}