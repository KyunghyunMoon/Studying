const { odd, even } =require('./var'); 
    function checkOddOrEven(num) {
        if(num % 2) {
            return odd;
        }
        return even;
    }

module.export = checkOddOrEven;
// export default checkOddOrEven; -> 확장자 mjs일 때