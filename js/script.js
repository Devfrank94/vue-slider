const {createApp} = Vue;
createApp({

data(){
    return{
      images: [
      'img/01.webp',
      'img/02.webp',
      'img/03.webp',
      'img/04.webp',
      'img/05.webp',
      ],

      counter:0


    }
  },

  methods:{
    nextPrev(isNext){
      isNext ? this.counter++ : this.counter--;
      if(this.counter === this.counter.length) this.counter = 0;
      if(this.counter < 0) this.counter = this.counter.length - 1;
      console.log(this.counter)
    }

  },



}).mount("#app")
