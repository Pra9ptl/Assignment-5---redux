import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor(Math.random() * 40)
    //     }
    //     this.setState((prevState) => {
    //         return { persons: prevState.persons.concat(newPerson) }
    //     });
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState((prevState) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId) }
    //     });
    // }

    render() {
        return (
            <div>
                {console.log(this.props.personStore)}
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.personStore.map(person => (
                    <Person
                        key={person.p.id}
                        name={person.p.name}
                        age={person.p.age}
                        clicked={() => this.props.onDeletePerson(person.p.id)}
                         />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personStore: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({ type: 'ADD_PERSON' }),
        onDeletePerson: (id) => dispatch({ type: 'DELETE_PERSON', delElId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);