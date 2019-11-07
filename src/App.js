import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addItem, removeItem } from './actions/index';

const App = props => {
  const removeFeature = item => {
    props.removeItem(item);
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    props.addItem(item);
    // dipsatch an action here to add an item
  };

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className='box'>
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
};

export default connect(
  mapStateToProps,
  { addItem, removeItem },
)(App);
