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
    if(data.angle.degree > 180){
        myData.yDirection = "down";
    }
    if(data.angle.degree < 180){
        myData.yDirection = "up";
    }

    //calculate axis values
    if(myData.xDirection == "left"){
        if(myData.yDirection == "up"){
            myData.x = -((data.distance/50) - (180 - data.angle.degree)/90);
        }
        if(myData.yDirection == "down"){
            myData.x = -((data.distance/50) + (180 - data.angle.degree)/90);
        }
    }
    if(myData.xDirection == "right"){
        if(myData.yDirection == "up"){
            myData.x = (data.distance/50) + (0 - data.angle.degree)/90;
        }
        if(myData.yDirection == "down"){
            myData.x = (data.distance/50) - (360 - data.angle.degree)/90;
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