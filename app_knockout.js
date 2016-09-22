/**
 * Created by navjo on 9/21/2016.
 */

var catsDatabase=[
    {
        count:0,
        name:"Billi",
        img:"cat.jpg"
    },
    {
        count: 0,
        name: "Billu",
        img: "cat2.jpg"
    }
];

var model= function (data) {

    var self=this;
    self.clickCount=ko.observable(data.count);
    self.name=ko.observable(data.name);
    self.imgSrc=ko.observable(data.img);
    self.nicknames=ko.observableArray(["meiu","Meeiooo"]);
    console.log(self.name);
    self.level=ko.computed(function () {
        if (self.clickCount() < 5){
            console.log("2");
            return "Baby";}
        else{
            return "Adult";}
    });

}

var ViewModel = function() {
    var self=this;
    self.list=ko.observableArray([]);
    for(i=0; i<catsDatabase.length;i++) {
        self.list.push(new model(catsDatabase[i]));
    }
    self.current=ko.observable( self.list()[0]);
   self.incrementCounter=function () {
            //console.log(self)
            //self.clickCount(self.clickCount()+1);
            self.current().clickCount(self.current().clickCount()+1);
    };
    self.changeCat=function(model){
        self.current(model);
    }
};
ko.applyBindings(new ViewModel());