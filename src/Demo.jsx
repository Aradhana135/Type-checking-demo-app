import React, {Component} from 'react';
import PropTypes from 'prop-types';
  
// Sample class
class Sample {
   constructor(value) {
     this.price = value.price;
   }
}
  
// Component
 class SamplePrice extends Component { 
   render() {
     return (
        <div>
          <h1>
            {this.props.priceProp}
          </h1>
        </div>
     )
   }
 }
   
// Creating default props
SamplePrice.defaultProps = {
  priceProp: "Hello guys!!"
}
   
 // Validating the props
 SamplePrice.propTypes = {
   priceProp: PropTypes.instanceOf(Sample)
 }
   
 // Export the Component
 export default SamplePrice;