import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func,
  };

  createFish = e => {
    // 1. Stop the form from submitting
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
    }
    this.props.addFish(fish);
    // 2. Refresh the form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className='fish-edit' onSubmit={this.createFish}>
        <input name ='name' ref={this.nameRef} type='text' placeholder='Name' />
        <input name ='price' ref={this.priceRef} type='text' placeholder='Price' />
        <select name ='status' ref={this.statusRef} >
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>

        <textarea name ='desc' ref={this.descRef} placeholder='Desc' />
        <input name ='image' type='text' placeholder='Image' />
        <button type='submit'>+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;