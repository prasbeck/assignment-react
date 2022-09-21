import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdSchedule } from "react-icons/md"

class Dashboard extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const dashboard = this.props.games.map((game) => {
            return(
                <div className="col-12 col-md-3 mt-4 ">
                    <Card key={game.id} className="card text-white">
                        <CardTitle className="mt-4 mb-0">{game.heading}</CardTitle>
                        <CardBody className="mt-0 pt-2">
                            <p>{game.tagline}</p>
                            <button className="btn btn-sm">
                                <b>{game.game}</b>
                            </button>
                        </CardBody>
                        <CardFooter className="card-footer">
                            <div className="row m-0">
                                <div className="col-6">
                                    <a href="#"><HiOutlineChatAlt2 size="25" /> Chat</a>
                                </div>
                                <div className="col-6">
                                    <a href="#"><MdSchedule size="25px"/>  Schedule</a>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>

                </div>
            )
        });
        return(
            <div className="container">
                <div className="row text-center">
                    {dashboard}
                </div>
            </div>
        )
    }
}

export default Dashboard;