function calculateAxisData(data){
    var myData = {
        // {axis, value} kde to axis je int 0,1,.. a value od -1 do 1
    }
    if(data.angle.degree > 90 && data.angle.degree <= 180 || (data.angle.degree >= 180 && data.angle.degree < 270)){
        myData.xDirection = "left";
    }
    if( (data.angle.degree >= 0 && data.angle.degree < 90) || (data.angle.degree <= 360 && data.angle.degree > 270) ){
            myData.xDirection = "right";
    }
    if(data.angle.degree > 180 && data.angle.degree < 360){
        myData.yDirection = "down";
    }
    if(data.angle.degree > 0 && data.angle.degree < 180){
        myData.yDirection = "up";
    }

    //calculate axis values
    if(myData.xDirection == "left"){
        if(myData.yDirection == "up"){
            var angleDownSize = 0;
            if(data.angle.degree < 135){
                angleDownSize = (135 - data.angle.degree)/45;
            }
            if(data.angle.degree > 135){
                angleDownSize = (data.angle.degree - 135)/45;
            }
            if(data.angle.degree == 135){
                angleDownSize = 0;
            }
            myData.x = -(data.distance/50) * (1 - angleDownSize);
        }
        if(myData.yDirection == "down"){
            var angleDownSize = 0;
            if(data.angle.degree < 225){
                angleDownSize = (225 - data.angle.degree)/45;
            }
            if(data.angle.degree > 225){
                angleDownSize = (data.angle.degree- 225)/45;
            }
            if(data.angle.degree == 225){
                angleDownSize = 0;
            }
            myData.x = -(data.distance/50) * (1 - angleDownSize);
        }
        if(myData.yDirection != "up" && myData.yDirection != "down"){
            myData.x = -(data.distance/50);
        }
    }
    if(myData.xDirection == "right"){
        if(myData.yDirection == "up"){
            var angleDownSize = 0;
            if(data.angle.degree < 45){
                angleDownSize = (0 + data.angle.degree)/45;
            }
            if(data.angle.degree > 45){
                angleDownSize = (90 - data.angle.degree)/45;
            }
            if(data.angle.degree == 45){
                angleDownSize = 0;
            }
            myData.x = (data.distance/50) * (1 - angleDownSize);
        }
        if(myData.yDirection == "down"){
            var angleDownSize = 0;
            if(data.angle.degree > 315){
                angleDownSize = (360 - data.angle.degree)/45;
            }
            if(data.angle.degree < 315){
                angleDownSize = (data.angle.degree- 270)/45;
            }
            if(data.angle.degree == 315){
                angleDownSize = 0;
            }
            myData.x = (data.distance/50) * (1 - angleDownSize);
        }
        if(myData.yDirection != "up" && myData.yDirection != "down"){
            myData.x = (data.distance/50);
        }
    }
    if(myData.yDirection == "up"){
        if(myData.xDirection == "left"){
            myData.y = (data.distance/50) - (-(90 - data.angle.degree)/90);
        }
        if(myData.xDirection == "right"){
            myData.y = (data.distance/50) - (90 - data.angle.degree)/90;
        }
    }
    if(myData.yDirection == "down"){
        if(myData.xDirection == "left"){
            myData.y = -((data.distance/50) - (270 - data.angle.degree)/90);
        }
        if(myData.xDirection == "right"){
            myData.y = -((data.distance/50) - (-(270 - data.angle.degree)/90));
        }
    }
    return myData;
}