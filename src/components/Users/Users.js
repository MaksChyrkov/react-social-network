//File where component Users is described

import React from "react";
import css from "./Users.module.scss";
import * as axios from 'axios';
import avatar from "../../assets/img/hotpng.com.png"

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div className={css.usersPage} key={u.id}>
                        <img src={u.imgUrl != null ? u.imgUrl : avatar}/>
                        <div>{u.name}</div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                        <div>{u.status}</div>
                        <div>
                            {
                                u.isFollowed ? <button onClick={() => {
                                    props.followToggle(u.id)
                                }}>Unfollow</button> : <button onClick={() => {
                                    props.followToggle(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Users;