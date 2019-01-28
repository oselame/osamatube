import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        videos: state.buscaReducer.videos,
        carregando: state.buscaReducer.carregando,
        erro: state.buscaReducer.erro
    }
}

export default connect(mapStateToProps, null)(VideoList);