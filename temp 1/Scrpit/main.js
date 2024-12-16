let App={
    // --------------------------data-----------

    data : function(){

        return {
            products:products,
            path :   "Home",
            card : [],

        }
    },

    // --------------------------methods-----------
    methods :{
        addToCard : function(pro){
                let check= this.card.some(function(x){
                    return x.pro.id == pro.id
                })
            if (check == false){
                this.card.push({pro:pro , count : 1})  
            }else{
                let added=this.card.find(function(x){
                    return x.pro.id == pro.id
                })
                    added.count++
            }
                pro.count--
        }
    }
}

Vue.createApp(App).mount("#App")