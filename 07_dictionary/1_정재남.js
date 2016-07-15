const Dictionary = (()=>{                                                            
    const DictData = Symbol('DictData');
    return class {
        constructor(){
            this[DictData] = {};
        }
        add(name, phone){
            this[DictData][name] = phone;
        }
        getPhoneNumber(name){
            return this[DictData][name];
        }
        getAllPhoneNumber(){
            return Object.keys(this[DictData]).map(k => this[DictData][k]);
        }
        removePhone(name){
            delete this[DictData][name];
        }
        clear(){
            this[DictData] = {};
        }
    }
})();