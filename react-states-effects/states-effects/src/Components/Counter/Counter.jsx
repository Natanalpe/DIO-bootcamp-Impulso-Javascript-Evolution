function Counter() {

    let quantity = 10;

    function increment() {
        quantity += 1
        document.getElementById('counter-num').innerHTML = quantity
    }

    return (
        <>
            <h1 id='counter-num'>{quantity}</h1>
            <button onClick={increment}>Aumentar</button>
        </>
    )
}

export default Counter;