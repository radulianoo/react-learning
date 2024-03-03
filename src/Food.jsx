function Food() {
    //create js constants to be used inside the return statement
    const food1 = "Orange";
    const food2 = "Banana";

    return(
        <div>
            <ul>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
                <li>Apple</li>
            </ul>
            <hr />
        </div>
    );
}

export default Food