import React, { Component } from 'react';
import { HiOutlineSearch } from 'react-icons/hi'

class Home extends Component {

  render(){
    return(
      <div className="row mt-3">
        <div className="col-8 m-3 text-white"><h2><b>Welcome Vasma</b></h2></div>
        <div class="col-3 mt-3 form-group has-search">
          <span class="form-control-feedback"><HiOutlineSearch /></span>
          <input type="text" class="form-control" placeholder="Search"></input>
        </div>
      </div>
    )
  }
}

export default Home;