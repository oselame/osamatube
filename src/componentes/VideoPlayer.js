import React from 'react';
import { connect } from 'react-redux';

import { Advertisement } from 'semantic-ui-react';

const VideoPlayer = props => {
    return (
        <div className="video-player">
            <div>
                <p>{JSON.stringify(props)}</p>
            </div>
            <Advertisement style={{ 'height': '433px' }} unit='top banner' test="Escolha um vídeo para reproduzir">   
             </Advertisement>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        video: state.reproduzVideoReducer.video
    }
}

export default connect(mapStateToProps, null)(VideoPlayer);