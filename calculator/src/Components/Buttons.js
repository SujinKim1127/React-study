export const Buttons = ({ num }) => {
    return (
        <div className="calculator__buttons">
            <div className="clear__and__enter">
                <button className="clear">AC</button>
                <button className="calculate">Enter</button>
            </div>
            <div className="button__row">
                <button className="number">7</button>
                <button className="number">9</button>
                <button className="number">8</button>
                <button className="operator">+</button>
            </div>
            <div className="button__row">
                <button className="number">4</button>
                <button className="number">5</button>
                <button className="number">6</button>
                <button className="operator">-</button>
            </div>
            <div className="button__row">
                <button className="number">1</button>
                <button className="number">2</button>
                <button className="number">3</button>
                <button className="operator">*</button>
            </div>
            <div className="button__row">
                <button className="number double">0</button>
                <button className="decimal">.</button>
                <button className="operator">/</button>
            </div>
        </div>
);
}