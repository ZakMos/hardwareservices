import React from 'react';
import Select from 'react-select';

import {productsIphone} from '../jsonData/productsIphone';
import {productsSamsung} from '../jsonData/productsSamsung';

export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    document.addEventListener('touchstart', this.handler, true);

  }
state = {
  event: ""
}

handleChange = event => {
  this.setState({ event })
  console.log(`Option selected:`, event)
}


  render() {
    const productsSelected = this.state;
    const product = productsSelected.event;
    
    return (
        <>
        <div className="navMobile">
              <div className="select">
                <Select
                  id="standard-select"
                  placeholder="Apple"
                  value={this.state.data || ""}
                  onChange={this.handleChange}
                  options={productsIphone}
                />
              </div>

              <div className="select">
                  <Select
                    id="standard-select1"
                    placeholder="Samsung"
                    value={this.state.data || ""}
                    onChange={this.handleChange}
                    options={productsSamsung}
                  />
              </div>

          </div>


      <div>{product.name}</div>
      <div>{product.label} </div>
      <div>
        <img className="imageNone" src={product.mainPic} alt={product.value}/> 
      </div>
        <div>
            <img src={product.displayPic} alt={product.originalDisplay}/>
        </div>
        <h3>
            {product.items === true ? product.originalDisplay : ""}
        </h3>
            <div>{product.originalDisplayText}</div>
        <div>{product.items === true ?  "Price" + product.displayPrice : ""}</div>
      <h3>{product.copyDisplay}</h3>
        <div>{product.copyDisplayText}</div>
        <div>{product.copyDisplayPrice}</div>

      <h3>{product.backGlass}</h3>
        <div>{product.backGlassText}</div>
        <div>{product.backGlassPrice}</div>



      </>
    );
  }
}