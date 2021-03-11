new Vue({
    el: '#challenge-2',
    data: {
        title: 'VueJS Challenge #2',
        value: '',
        value_enter: '',
    },
    methods: {
        show_alert() {
            alert('Button clicked!')
        },
        input_event(event){
            this.value = event.target.value
        },
        input_enter_event(event) {
            this.value_enter = event.target.value
        }
    },
})