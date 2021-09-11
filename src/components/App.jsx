import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';


class App extends Component {
    constructor(props){
        super(props);
        this.names = [
            'Mike', 'John', 'Travis', 'Akeem'
        ];

        this.super = [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            }
        ]

        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
        };
    }

    display(message){
        alert(message);
    }

    render(){
        return (
            <div className="container-fluid">
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <NamesList names={this.names}/>
                <AlertUser 
                    buttonClick={(message) => this.display(message)}
                />
            </div>
        )
    }
}

export default App;