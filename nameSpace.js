/**
 * Created by shenyong on 2017/6/27.
 */
var nameSpace = {
    myNameSpace:this.myNameSpace || {},
    register:function( space ){
        if(typeof space==="undefined" || space===null){
            try{
                throw new Error("you can't enter an empty param");
            }catch(e){
                console.error(e);
                return;
            }
        }

        var scope = space.split('\.'),
             _key,
             _myNameSpace = this.myNameSpace;

        for(_key in scope){
            if(scope.hasOwnProperty(_key)){
                if(typeof _myNameSpace[scope[_key]] === "undefined" || _myNameSpace[scope[_key]] === null) {
                    _myNameSpace[scope[_key]] = {};
                }
                _myNameSpace = _myNameSpace[scope[_key]];
            }
        }
    }
}

module.exports = nameSpace;