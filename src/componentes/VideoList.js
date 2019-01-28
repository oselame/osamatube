import React from 'react';

import { List, Image } from 'semantic-ui-react';

const VideoList = props => {
    return (
        <div className="video-list">
            <List animated verticalAlign='middle'>
                <List.Item>
                    <Image avatar src='http://lorempixel.com/output/cats-q-c-640-480-9.jpg' />
                    <List.Content>
                        <List.Header>Título do Video</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    );
}

export default VideoList;