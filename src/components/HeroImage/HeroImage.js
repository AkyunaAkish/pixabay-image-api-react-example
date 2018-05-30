import React, { PureComponent } from 'react';

class HeroImage extends PureComponent {
    render() {
        const style = {
            border: '1px solid black',
            height: this.props.height || 400,
            width: this.props.width || '100%',
            background: `url(${this.props.imageSrc}) center no-repeat` || `url(https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center no-repeat`
        };
        
        const overlayStyle = {
            opacity: this.props.opacity || 0.5,
            backgroundColor: this.props.overlayColor || 'rgb(0,0,0)',
            position: 'relative',
            height: '100%',
            width: '100%'            
        };
 
        const overlayContentStyle = {
            color: 'white', 
            position: 'absolute',
            // margin: this.props.overlayContentCentered ? '0 auto' : '',
            // textAlignment: this.props.overlayContentCentered ? 'center' : '',
            // height: '100%',
            // width: '100%'    
        };

        return (
            <div className='hero-image' style={ style }>
                <div className='overlay' style={ overlayStyle }>
                    <div className='overlay-content' style={ overlayContentStyle }>
                        { this.props.overlayContent }
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroImage;