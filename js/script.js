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

      counter: 0,
      autoScroll: true

    }
  },

  methods:{

    // Funzione tasti prev e next
    nextPrev(isNext){
      isNext ? this.counter++ : this.counter--;
      if(this.counter === this.images.length) this.counter = 0;
      if(this.counter < 0) this.counter = this.images.length -1;
      console.log(this.counter)
    },

    // Funzione Autoscroll
    startAutoscroll(){
      setInterval(() => {
        if(this.autoScroll) this.nextPrev(true)
      },3000)
    }

  },

  mounted(){
    
    this.startAutoscroll()

  }



}).mount("#app")
