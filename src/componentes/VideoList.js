import React, { Component } from 'react';
import { connect } from 'react-redux';

import { reproduzVideo } from '../store/actions/reproduz-video';

import { List, Image, Dimmer, Loader } from 'semantic-ui-react';
import { dispatch } from 'rxjs/internal/observable/range';

class VideoList extends Component {

    renderVideo(video) {
        return (
            <List animated verticalAlign='middle' key={video.etag}>
                <List.Item onClick={() => this.props.reproduz(video)}>
                    <Image src={video.snippet.thumbnails.default.url} />
                    <List.Content>
                        <List.Header>{video.snippet.title}</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        )
    }


    render() {
        return (
            <div className='video-list'>
                {
                    this.props.carregando && (<Dimmer active inverted>
                        <Loader size='medium'>Carregando</Loader>
                    </Dimmer>)
                }
                {
                    this.props.videos.map(video => {
                        console.log('xxx', video);
                        return this.renderVideo(video);
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.buscaReducer.videos,
        carregando: state.buscaReducer.carregando,
        erro: state.buscaReducer.erro
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reproduz: (video) => dispatch(reproduzVideo(video))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);