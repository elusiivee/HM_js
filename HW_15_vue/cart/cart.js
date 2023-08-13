const app = Vue.createApp({
    data () {
        return{
        instock: 5,
        incart:0,
        price:100,
        like:19344,
    }},
    methods:{
        toCart(){
            if (this.instock>0){
                this.instock--;
                this.incart++;
            }
        },
        fromCart(){
            if (this.incart>0){
                this.instock++;
                this.incart--;
            }
        },
    }
});
app.mount('#app')