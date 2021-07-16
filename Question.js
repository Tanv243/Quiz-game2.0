class Question {
    constructor() {
        this.greeting=createElement('h2');
        this.input1=createInput1('name');
        this.input2=createInput2('name2');
        this.button=createButton('play');
        this.option1=createOption1('1)');
        this.option2=createOption1('2)');
        this.option3=createOption1('3)');
        this.option4=createOption1('4)');

    }
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.greeting.hide();
        this.button.hide();
    }
    display(){
        var title = createElement('h2')
        this.title.html("My Interesting Quiz Game");
        this.title.position(350,0);

        
        var question = createInput1('name');
        this.question.html("Question: Which is the planet in our Solar system on which it rains of diamonds");
        this.question.position(150,80);



        this.option1.html("Neptune");
        this.option1.position("150,100");
        this.option2.html("Pluto");
        this.option2.position("150,120");
        this.option3.html("Jupitar");
        this.option3.position("150,140");
        this.option4.html("Mercury");
        this.option4.position("150,160");
        this.option5.html("Earth");
        this.option5.position("150,180");
    }
}