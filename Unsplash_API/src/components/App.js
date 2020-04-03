import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from './api/unsplash';
// axios acces key tc2SMEfYiaGBklh7kqMD8Nk44zxdlNev4UZQnqzwliM
//axios secret key goXfiziQxMWHwuxXG3KR8hVsULshgxk4nK0egLfWSiI

class App extends React.Component {
    state = { images: [] };
    
     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });

        this.setState({ images: response.data.results });
    }
   
    render() {
        return (
            <div className='ui container' style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;