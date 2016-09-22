/**
 * Created by navjo on 9/21/2016.
 */
var ViewModel = function() {
    self=this;
    self.clickCount=ko.observable(0);
    self.name=ko.observable("BILLI");
    self.imgSrc=ko.observable("cat.jpg");
    self.nicknames=ko.observableArray(["Meau","Meiai","Meiuiiiii"]);

    self.level=ko.computed(function () {
        if (self.clickCount() < 5){
            return "Baby";}
        else{
            return "Adult";}
    });

    self.incrementCounter=function () {
            self.clickCount(self.clickCount()+1);
    };
};
ko.applyBindings(new ViewModel());