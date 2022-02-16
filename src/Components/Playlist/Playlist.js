import React from "react";
import { TrackList } from '../TrackList/TrackList.js';
import './Playlist.css';

export class Playlist extends React.Component {
    render() {
        return (
            <div class="Playlist">
                <input defaultValue = {'New Playlist'}/>
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    };
};