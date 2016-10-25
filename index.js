/*
 * @Author: KikyoMiao
 * @Date:   2016-10-25
 * @Description: 
 * 喵哥今天去魅族面试当时没做出的题～～～ 2333 怎么反向思考总会脑子瓦特调 
 *
 * 
 * usage:
 * sku(['16GB','32GB','64GB'],['金色','银色','黑色'],['移动','联通']);
 */
export default function sku(){
    var result = [];
    var arr = Array.prototype.slice.call(arguments);
    (function fn(parameter, array, len){
        if (len == 0) return result.push(parameter);
        for (var i = 0; i < array[len - 1].length; i++){
            fn(parameter.concat(array[len - 1][i]), array, len - 1)
        }
    })([], arr, arr.length);
    return result;
}