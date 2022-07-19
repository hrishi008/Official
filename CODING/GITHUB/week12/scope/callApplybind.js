
    var object1={me:100}

    function func1(){
        console.log(100+this.me);
    }
    func1.bind(object1);
    func1();
// unsuccessfull