//File where component Users is described

import React from "react";
import css from "./Users.module.scss";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    name: "Maks",
                    status: "I'm learning react!",
                    location: {
                        city: "Kyiv",
                        country: "Ukraine"
                    },
                    isFollowed: true,
                    imgUrl: "https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg"
                },
                {
                    id: 2,
                    name: "Sasha",
                    status: "I'm learning react too!",
                    location: {
                        city: "Minsk",
                        country: "Belarus"
                    },
                    isFollowed: false,
                    imgUrl: "https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg"
                }, {
                    id: 3,
                    name: "Roma",
                    status: "I'm learning react too!",
                    location: {
                        city: "New York",
                        country: "America"
                    },
                    isFollowed: true,
                    imgUrl: "https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg"
                }, {
                    id: 4,
                    name: "Dema",
                    status: "I'm learning react too!",
                    location: {
                        city: "Krakow",
                        country: "Poland"
                    },
                    isFollowed: false,
                    imgUrl: "https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg"
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div className={css.usersPage} key={u.id}>
                        <img src={u.imgUrl}/>
                        <div>{u.name}</div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
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