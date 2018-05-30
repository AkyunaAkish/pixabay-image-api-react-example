import React, { PureComponent } from 'react';
import axios from 'axios';

import Photo from '../Photo/Photo';

class App extends PureComponent {
    state = {
        photos: [],
        searchTerm: ''
    }
    
    componentDidMount() {
        this.fetchPhotos('cat');
    }

    fetchPhotos(searchTerm, e) {
        if(e) {
            e.preventDefault();
        }

        if(searchTerm && searchTerm.length) {
            document.querySelector('#search-input').value = '';
            
            this.setState({
                photos: []
            });

            axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${searchTerm.split(' ').join('+')}&image_type=photo`)
                 .then((photos) => {
                     console.log('photos', photos);
     
                     const photoComponents = photos.data.hits.map((hit, ind) => {
                        return <Photo key={ ind } data={ hit }  />;
                     });
     
                     this.setState({
                         photos: photoComponents
                     });
                 });
        }
    }

    render() {
        return (
            <div className='app'>   
                <div className='searchBar'>
                    <form onSubmit={ (e) => this.fetchPhotos(this.state.searchTerm, e) }>
                        <input id='search-input' type='text' placeholder='Seach Images' onChange={ (e) => this.setState({ searchTerm: e.target.value } )} />
                        <button type='submit'>Search</button>
                    </form>
                </div>

                <div className='photos'>
                    { this.state.photos.length ? this.state.photos : 'Loading photos...' }
                </div>
            </div>
        );
    }
}

export default App;