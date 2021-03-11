new Vue({
    el: '#challenge-1',
    data: {
        title: 'VueJS Challenge #1',
        name: 'Tibet Teixeira',
        age: 22,
        vuejs_img: 'https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg',
        input_value: 'Tibet'
    },
    methods: {
        rand_number() {
            return Math.floor(Math.random() * 10);
        },
        age_mult_3() {
            return this.age * 3;
        }
    },
})