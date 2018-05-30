import React, { PureComponent } from 'react';

import HeroImage from '../HeroImage/HeroImage';

class App extends PureComponent {
    render() {
        return (
            <div className='app'>
                <HeroImage height={ 500 }
                           width='100%'
                           opacity={ 0.3 }
                           overlayColor='rgb(0,0,0)'
                           imageSrc='https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                           overlayContent={
                               <div>
                                    <h1>Hello World!</h1>
                               </div>
                           }
                           overlayContentCentered={ true } />
            </div>
        );
    }
}

export default App;