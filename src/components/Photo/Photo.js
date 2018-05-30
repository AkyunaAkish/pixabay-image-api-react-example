import React, { PureComponent } from 'react';

class Photo extends PureComponent {
    render() {
        return (
            <div className='photo'>
                <img src={ `${this.props.data.previewURL}` } />
            </div>
        );
    }
}

export default Photo;