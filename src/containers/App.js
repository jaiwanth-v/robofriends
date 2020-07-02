import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css'
import  Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';
// import {robots} from '../components/robots'; (for offline apps)

const mapStateToProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()),
    }
}

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            robots: [],
        }
    }

    componentDidMount(){
        this.props.onRequestRobots()
    }

//as soon as the above function runs the function renders again

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ? <h1 className = 'tc'>Loading...</h1> :    
            (
                <div className='tc'>
                    <h1 className='f1' >Robofriends</h1>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>    
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>    
            );
        }
    }



export default connect(mapStateToProps,mapDispatchToProps)(App);

