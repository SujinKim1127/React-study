export const Buttons = ({ setZero, getResult, getNum, getOper, getPoint }) => {
    return (
        <div className="calculator__buttons">
        <div className="clear__and__enter">
            <button onClick={setZero} className="clear">AC</button>
            <button className="calculate" onClick={getResult}>Enter</button>
        </div>
        <div className="button__row">
            <button value={9} onClick={getNum} className="number">9</button>
            <button value={8} onClick={getNum} className="number">8</button>
            <button value={7} onClick={getNum} className="number">7</button>
            <button value="+" onClick={getOper} className="operator">+</button>
        </div>
        <div className="button__row">
            <button value={4}  onClick={getNum} className="number">4</button>
            <button value={5}  onClick={getNum} className="number">5</button>
            <button value={6}  onClick={getNum} className="number">6</button>
            <button value="-"  onClick={getOper} className="operator">-</button>
        </div>
        <div className="button__row">
            <button value={1} onClick={getNum} className="number">1</button>
            <button value={2} onClick={getNum} className="number">2</button>
            <button value={3} onClick={getNum} className="number">3</button>
            <button value="*" onClick={getOper} className="operator">*</button>
        </div>
        <div className="button__row">
            <button value="." onClick={getPoint} className="decimal">.</button>
            <button value={0} onClick={getNum} className="number double">0</button>
            <button value="/" onClick={getOper} className="operator">/</button>
        </div>
    </div>
);
}