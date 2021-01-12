import { React, Component } from 'react';
import CounterOutput from '../../components/counteroutput/CounterOutput';
import CounterControl from '../../components/countercontrol/CounterControl';
import { connect } from 'react-redux';
import AppBar from '../../components/appbar/AppBar'
import SkeletonCard from '../../components/skeletoncard/SkeletonCard';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import FetchData from "../../components/fetchdata/FetchData";


class Counter extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    render() {
        return (
            <>
                <AppBar drawerToggleClicked={this.sideDrawerToggleHandler}></AppBar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <FetchData></FetchData>
                {/* <SkeletonCard></SkeletonCard> */}
                {/* <CounterOutput counter={this.props.ctr}></CounterOutput>
                <CounterControl name="Addition" clickHandler={this.props.updateMethod.bind(this, "Addition")}></CounterControl>
                <CounterControl name="Subtract" clickHandler={this.props.updateMethod.bind(this, "Subtraction")}></CounterControl> */}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMethod: (mytype) => {
            console.log(mytype);
            dispatch({ type: mytype });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

