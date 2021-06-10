import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase,decrease } from '../redux/actions/counterAction'
class CounterConnect extends Component {
  render() {
    return (
      <>
         <h1>Connect Counter: {this.props.count}</h1>
         <button onClick={this.props.increase}>Increase</button>{" "}
         <button onClick={this.props.decrease}>Decrease</button>
      </>
    )
  }
}
const mapStateToProps = (state)=> {
    return {
        count: state.counterReducer.count
    }
}
const mapDispatchToProps = {
    increase,
    decrease
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterConnect)
