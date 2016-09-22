/**
 * Created by navjo on 9/21/2016.
 */
var ViewModel = function() {
    this.clickCount=ko.observable(0);
    this.name=ko.observable("BILLI");
    this.imgSrc=ko.observable("cat.jpg");

    this.incrementCounter=function () {
            this.clickCount(this.clickCount()+1);
    };
};
ko.applyBindings(new ViewModel());