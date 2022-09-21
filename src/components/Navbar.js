import React, { Component} from 'react'

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg text-white">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Premium<b>Core</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-white">
                            <a className="nav-link text-white active" href="#">Dashboard</a>
                            <a className="nav-link text-white" href="#">Chats</a>
                            <a className="nav-link text-white" href="#">Requests</a>
                            <a className="nav-link text-white" href="#">Announcements</a>
                        </div>
                    </div>
                    <div className='right'>
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                        <div>
                            <p>Vasma Graphix</p>
                            <p className="seller">Seller</p>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;