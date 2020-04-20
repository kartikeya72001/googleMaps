import React , {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Application extends Component{
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 28.7041, lng: 77.1025}}
            />
        );
      }
}
const mapStyles = {
  width: '100%',
  height: '100%',
};
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCiXi6F4WNa2DyasWIPGMHGvkX2-y6Appw'
  })(Application);