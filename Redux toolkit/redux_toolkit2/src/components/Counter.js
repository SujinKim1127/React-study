import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
// useStore: 저장소에 직접 액세스 가능
// useSelector: 사용하기 더 편리. 저장소가 관리하는 상태 부분을 우리가 자동으로 선택 가능

// 함수형 컴포넌트를 사용하지 않을 경우 `connect` 사용

const Counter = () => {
    const dispatch = useDispatch();         // redux store에 대한 action을 보낸다.
    const counter = useSelector(state => state.counter); // 저장소가 관리하는 데이터에 액세스
    // 함수는 `react-redux`가 실행
    // 매번 최신의 데이터를 받는다
    const show = useSelector(state => state.showCounter);

    const incrementHandler = () => {
        dispatch({ type: 'increment' })
    }

    const increseHandler = () => {
        dispatch({ type: 'increase', amount: 5})
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement' });

    }

    const toggleCounterHandler = () => {
        dispatch({ type: 'toggle' })
    };

    return (
        <main className="classes.counter">
            <h1>Redux Counter</h1>
            {show && <h3 className="classes.value">{counter}</h3>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}

export default Counter;

// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }

//     decrementHandler() {
//         this.props.decrement();
//     }

//     toggleCounterHandler() {}

//     render() {
//         return (
//             <main className="classes.counter">
//                 <h1>Redux Counter</h1>
//                 <h3 className="classes.value">{this.props.counter}</h3>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         )
    
//     }
// }

// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({ type: 'increment' }),
//         decrement: () => dispatch({ type: 'decrement' }),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);