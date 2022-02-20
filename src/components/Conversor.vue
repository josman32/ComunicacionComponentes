<template>
    <div class="container">
        <div class="row">        
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="cantidad">INGRESE CANTIDAD</label>
                    <input type="number" class="form-control"
                        v-model="cantidad"
                        v-on:keyup="converMod"
                        id="cantidad" placeholder="Ingrese Cantidad">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="form-group">
                    <label for="tengo">Tengo</label>
                    <select class="form-control" id="tengo" v-model="tengo" 
                    v-on:change="converMod">
                    <option v-for="(moneda, index) in monedas" v-bind:key="index">
                        {{moneda}}
                    </option>
                    </select>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-group">
                    <label for="quiero">Quiero</label>
                    <select class="form-control" id="quiero" v-model="quiero"
                    v-on:change="converMod">
                    <option v-for="(moneda, index) in monedas" v-bind:key="index">
                        {{moneda}}
                    </option>
                    </select>
                </div>  
            </div>
        </div>
        <div class="text-center">
           <h4>
               <span class="badge badge-success">{{cantidad}} {{tengo}}</span>
               <span class="badge badge-dark">SON</span>
               <span class="badge badge-success">{{getTotal(total)}} {{quiero}}</span>
           </h4>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            monedas:['USD', 'EUR', 'LIBRA'],
            cantidad: 0,
            tengo: 'USD',
            quiero: 'EUR',
            total: 0
        }
    },
    methods:{
        converMod(){
            switch(this.tengo){
                case 'USD':
                    if(this.quiero === 'USD'){
                        this.total = this.cantidad;
                    }
                    if(this.quiero === 'EUR'){
                        this.total = this.cantidad * 0.88;
                    }
                    if(this.quiero === 'LIBRA'){
                        this.total = this.cantidad * 0.73;
                    }
                    break;
                case 'EUR':
                    if(this.quiero === 'USD'){
                        this.total = this.cantidad * 1.13;
                    }
                    if(this.quiero === 'EUR'){
                        this.total = this.cantidad;
                    }
                    if(this.quiero === 'LIBRA'){
                        this.total = this.cantidad * 0.83;
                    }
                    break;
                case 'LIBRA':
                    if(this.quiero === 'USD'){
                        this.total = this.cantidad * 1.36;
                    }
                    if(this.quiero === 'EUR'){
                        this.total = this.cantidad * 1.20;
                    }
                    if(this.quiero === 'LIBRA'){
                        this.total = this.cantidad;
                    }
                    break;
                default:
            }
        },
        getTotal(valor){
            return Math.round(valor)
        }
    },
};
</script>