function determineDirections(data){
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
    return myData;
}

function calculateAxisData(data){
    var myData = {};
    myData.x = calculateHorizontalData(data).x;
    myData.y = calculateVerticalData(data).y;
    return myData;
}

function calculateHorizontalData(data){
    var myData = {
        // {axis, value} kde to axis je int 0,1,.. a value od -1 do 1
    }
    var directions = determineDirections(data);
    myData.xDirection = directions.xDirection;
    myData.yDirection = directions.yDirection;

    if(myData.xDirection == "left"){
        if(myData.yDirection == "up"){
            var angleDownSize = 0;
            angleDownSize = (180-data.angle.degree)/90
            myData.x = -(data.distance/50) * (1 - angleDownSize);
        }
        if(myData.yDirection == "down"){
            var angleDownSize = 0;
            angleDownSize = 1-(270-data.angle.degree)/90
            myData.x = -(data.distance/50) * (1 - angleDownSize);
        }
        if(myData.yDirection != "up" && myData.yDirection != "down"){
            myData.x = -(data.distance/50);
        }
    }
    if(myData.xDirection == "right"){
        if(myData.yDirection == "up"){
            var angleDownSize = 0;
            angleDownSize = 1-(90-data.angle.degree)/90;
            myData.x = (data.distance/50) * (1 - angleDownSize);
        }
        if(myData.yDirection == "down"){
            var angleDownSize = 0;
            angleDownSize = (360 - data.angle.degree)/90;
            myData.x = (data.distance/50) * (1-angleDownSize);
        }
        if(myData.yDirection != "up" && myData.yDirection != "down"){
            myData.x = (data.distance/50);
        }
    }
    return myData;
}

function calculateVerticalData(data){
    var myData = {
        // {axis, value} kde to axis je int 0,1,.. a value od -1 do 1
    }
    var directions = determineDirections(data);
    myData.xDirection = directions.xDirection;
    myData.yDirection = directions.yDirection;

    if(myData.yDirection == "up"){
        if(myData.xDirection == "right"){
            var angleDownSize = 0;
            angleDownSize = (90-data.angle.degree)/90;
            myData.y = (data.distance/50) * (1 - angleDownSize);
        }
        if(myData.xDirection == "left"){
            var angleDownSize = 0;
            angleDownSize = (data.angle.degree-90)/90;
            myData.y = (data.distance/50) * (1 - angleDownSize);
        }
        if(myData.xDirection != "left" && myData.xDirection != "right"){
            myData.y = (data.distance/50);
        }
    }
    if(myData.yDirection == "down"){
        if(myData.xDirection == "left"){
            var angleDownSize = 0;
            angleDownSize = (270-data.angle.degree)/90;
            myData.y = -(data.distance/50) * (1 - angleDownSize);
        }
        if(myData.xDirection == "right"){
            var angleDownSize = 0;
            angleDownSize = (data.angle.degree-270)/90;
            myData.y = -(data.distance/50) * (1 - angleDownSize);
        }
        if(myData.xDirection != "left" && myData.xDirection != "right"){
            myData.y = -(data.distance/50);
        }
    }
    return myData;
}