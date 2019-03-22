
        new Vue({
            el: '#app',
            data: {
                question: '',
                answer: '',
                userInput: '',
                isVisible: 'hidden',
                attachShaker: false,
                fadeToggle: false 
            },
            methods: {
                ask() {
                    
                    this.attachShaker=true;
                    setTimeout(()=>{
                        this.attachShaker=false
                        this.isVisible='visible';
                        this.fadeToggle=true
                    },2000)

                    this.question = this.userInput
       
                    let rand = Math.floor((Math.random() * 20) + 1)

                    switch (rand) {

                        case 1:
                            this.answer = 'It is certain'
                            break
                        case 2:
                            this.answer = 'It is decidely so'
                            break
                        case 3:
                            this.answer = 'Without a doubt'
                            break
                        case 4:
                            this.answer = 'Yes - definitely'
                            break
                        case 5:
                            this.answer = 'You may rely on it'
                            break
                        case 6:
                            this.answer = 'As I see it, yes'
                            break
                        case 7:
                            this.answer = 'Most likely'
                            break
                        case 8:
                            this.answer = 'Outlook good'
                            break
                        case 9:
                            this.answer = 'Yes'
                            break
                        case 10:
                            this.answer = 'Signs point to yes'
                            break
                        case 11:
                            this.answer = 'Reply hazy, try again'
                            break
                        case 12:
                            this.answer = 'Ask again later'
                            break
                        case 13:
                            this.answer = 'Better not tell you now'
                            break
                        case 14:
                            this.answer = 'Cannot predict now'
                            break
                        case 15:
                            this.answer = 'Concentrate and ask again'
                            break
                        case 16:
                            this.answer = 'Don\'t count on it'
                            break
                        case 17:
                            this.answer = 'My reply is no'
                            break
                        case 18:
                            this.answer = 'My sources say no'
                            break
                        case 19:
                            this.answer = 'Outlook not so good'
                            break
                        case 20:
                            this.answer = 'Very doubtful'
                            break
                    }
                    
                    
                },
                reset(){
                    this.question= '',
                    this.answer= '',
                    this.userInput= '',
                    this.isVisible= 'hidden',
                    this.attachShaker= false,
                    this.fadeToggle= false 
                }
            }
        })
