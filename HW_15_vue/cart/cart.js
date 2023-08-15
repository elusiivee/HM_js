const app = Vue.createApp({
    data () {
        return{
        instock: 5,
        incart:0,
        price:100,
        like:19344,
        userslike:0,
        total: 0
    }},
    methods:{
        toCart(){
            if (this.instock>0){
                this.instock--;
                this.incart++;
                this.total+=this.price;
            }
        },
        fromCart(){
            if (this.incart>0){
                this.instock++;
                this.incart--;
                this.total-=this.price;
            }
        },
        Like() {
            let btn=document.getElementById('btnlike');

            if (this.userslike === 0) {
                this.like++;
                this.userslike = 1;
                btn.innerText='Dislike';
            } else {
                this.like--;
                this.userslike = 0;
                btn.innerText='Like';
            }
        },
    
}});
app.mount('#app')