import PropTypes from "prop-types";

const Counter = ({ count, children, increas, decrease, reset }) => {
  return (
    <div>
      <h3 style={{ color: count === 0 ? "red" : "green" }}>{count}</h3>
      {/* <h3 style={count === 0 ? {color: 'red'} : {color: 'green'}}>{count}</h3> */}
      <button onClick={increas}>+</button>
      <button
        style={{
          backgroundColor: count === 0 ? "red" : "",
          cursor: count === 0 ? "default" : "",
        }}
        onClick={decrease}
        disabled={count === 0}
      >
        -
      </button>
      <br />
      <button onClick={reset}>reset</button>

      <p>{children}</p>
    </div>
  );
};

Counter.propTypes = {
  increas: PropTypes.func,
  decrease: PropTypes.func,
  reset: PropTypes.func,
  count: PropTypes.number,
};

// a way for init default props
// Counter.defaultProps = {
//     count: 9,
// }

export default Counter;
