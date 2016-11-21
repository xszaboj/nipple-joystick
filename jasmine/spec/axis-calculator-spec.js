describe("Calculate direction.", function(){
  describe("X Axis direction.", function() {
    var data = null;
    beforeEach(function(){
        data = {
          angle:{
              degree: null
          },
          distance: 0
      };
    });

    it("0 deg is right", function() {
      data.angle.degree = 0;
      var myData = calculateHorizontalData(data);
      expect(myData.xDirection).toBe("right");
    });

    it("180 deg is left", function() {
      data.angle.degree = 180;
      var myData = calculateHorizontalData(data);
      expect(myData.xDirection).toBe("left");
    });

    it("90 deg is undefined", function() {
      data.angle.degree = 90;
      var myData = calculateHorizontalData(data);
      expect(myData.xDirection).toBe(undefined);
    });

    it("270 deg is undefined", function() {
      data.angle.degree = 270;
      var myData = calculateHorizontalData(data);
      expect(myData.xDirection).toBe(undefined);
    });
  });
  describe("Y Axis direction.", function() {
    var data = null;
    beforeEach(function(){
        data = {
          angle:{
              degree: null
          },
          distance: 0
      };
    });

    it("90 deg is up", function() {
      data.angle.degree = 90;
      var myData = calculateHorizontalData(data);
      expect(myData.yDirection).toBe("up");
    });

    it("270 deg is down", function() {
      data.angle.degree = 270;
      var myData = calculateHorizontalData(data);
      expect(myData.yDirection).toBe("down");
    });
    it("0 deg is undefined", function() {
      data.angle.degree = 0;
      var myData = calculateHorizontalData(data);
      expect(myData.yDirection).toBe(undefined);
    });

    it("180 deg is undefined", function() {
      data.angle.degree = 180;
      var myData = calculateHorizontalData(data);
      expect(myData.yDirection).toBe(undefined);
    });
    it("360 deg is undefined", function() {
      data.angle.degree = 0;
      var myData = calculateHorizontalData(data);
      expect(myData.yDirection).toBe(undefined);
    });

    it("361 deg is undefined", function() {
      data.angle.degree = 180;
      var myData = calculateHorizontalData(data);
      expect(myData.yDirection).toBe(undefined);
    });
  });
});

describe("Calculate direction strength.", function(){
  describe("X Axis direction. And max distance is 50.", function() {
    var data = null;
    beforeEach(function(){
        data = {
          angle:{
              degree: null
          },
          distance: null
      };
    });

    describe("right", function(){
        it("angle:0deg, distance:50 is x:1", function() {
            data.angle.degree = 0;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(1);
        });

        it("angle:0deg, distance:0 is x:0", function() {
            data.angle.degree = 0;
            data.distance = 0;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0);
        });

        it("angle:0deg, distance:25 is x:0.5", function() {
            data.angle.degree = 0;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.5);
        });

        it("angle:360deg, distance:50 is x:1", function() {
            data.angle.degree = 360;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(1);
        });

        it("angle:360deg, distance:0 is x:0", function() {
            data.angle.degree = 360;
            data.distance = 0;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0);
        });

        it("angle:360deg, distance:25 is x:0.5", function() {
            data.angle.degree = 360;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.5);
        });
    });

    describe("right up", function(){
        it("angle:22.5deg, distance:50 is x:0.25", function() {
            data.angle.degree = 22.5;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.75);
        });

        it("angle:22.5deg, distance:25 is x:0.125", function() {
            data.angle.degree = 22.5;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.375);
        });

        it("angle:45deg, distance:50 is x:0.5", function() {
            data.angle.degree = 45;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.5);
        });

        it("angle:45deg, distance:25 is x:0.25", function() {
            data.angle.degree = 45;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.25);
        });

        it("angle:45deg, distance:10 is x:0.1", function() {
            data.angle.degree = 45;
            data.distance = 10;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.1);
        });

        it("angle:67.5deg, distance:50 is x:0.75", function() {
            data.angle.degree = 67.5;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.25);
        });

        it("angle:67.5deg, distance:25 is x:0.375", function() {
            data.angle.degree = 67.5;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.125);
        });

        it("angle:89.9deg, distance:50 is x:0", function() {
            data.angle.degree = 89.9;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.0011111111111110628);
        });
    });

    describe("right down", function(){
        it("angle:337.5deg, distance:50 is x:0.25", function() {
            data.angle.degree = 337.5;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.75);
        });

        it("angle:337.5deg, distance:25 is x:0.125", function() {
            data.angle.degree = 337.5;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.375);
        });

        it("angle:315deg, distance:50 is x:0.5", function() {
            data.angle.degree = 315;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.5);
        });

        it("angle:315deg, distance:25 is x:0.25", function() {
            data.angle.degree = 315;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.25);
        });

        it("angle:315deg, distance:10 is x:0.1", function() {
            data.angle.degree = 315;
            data.distance = 10;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.1);
        });

        it("angle:292.5deg, distance:50 is x:0.75", function() {
            data.angle.degree = 292.5;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.25);
        });

        it("angle:292.5deg, distance:25 is x:0.375", function() {
            data.angle.degree = 292.5;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.125);
        });

        it("angle:270deg, distance:50 is x:0", function() {
            data.angle.degree = 270.1;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("right");
            expect(myData.x).toBe(0.0011111111111113958);
        });
    });

    describe("left", function(){
        it("angle:180deg, distance:50 is x:-1", function() {
            data.angle.degree = 180;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-1);
        });

        it("angle:180deg, distance:0 is x:0", function() {
            data.angle.degree = 180;
            data.distance = 0;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(0);
        });

        it("angle:180deg, distance:25 is x:-0.5", function() {
            data.angle.degree = 180;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.5);
        });
    });

    describe("left up", function(){
         it("angle:90.1deg, distance:50 is x:~0", function() {
            data.angle.degree = 90.1;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.0011111111111110628);
        });

        it("angle:112.5deg, distance:50 is x:-0.25", function() {
            data.angle.degree = 112.5;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.25);
        });

        it("angle:112.5deg, distance:25 is x:-0.125", function() {
            data.angle.degree = 112.5;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.125);
        });

        it("angle:135deg, distance:50 is x:-0.5", function() {
            data.angle.degree = 135;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.5);
        });

        it("angle:135deg, distance:25 is x:-0.25", function() {
            data.angle.degree = 135;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.25);
        });

        it("angle:135deg, distance:10 is x:-0.1", function() {
            data.angle.degree = 135;
            data.distance = 10;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.1);
        });

        it("angle:157.5deg, distance:50 is x:-0.75", function() {
            data.angle.degree = 157.5;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.75);
        });

        it("angle:157.5deg, distance:25 is x:-0.375", function() {
            data.angle.degree = 157.5;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.375);
        });

        it("angle:179.9deg, distance:50 is x:~-1", function() {
            data.angle.degree = 179.9;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.9988888888888889);
        });
    });

    describe("left down", function(){
        it("angle:180.1deg, distance:50 is x:~-1", function() {
            data.angle.degree = 180.1;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.9988888888888889);
        });

        it("angle:202.5deg, distance:50 is x:-0.75", function() {
            data.angle.degree = 202.5;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.75);
        });

        it("angle:202.5deg, distance:25 is x:-0.375", function() {
            data.angle.degree = 202.5;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.375);
        });

        it("angle:225deg, distance:50 is x:-0.5", function() {
            data.angle.degree = 225;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.5);
        });

        it("angle:225deg, distance:25 is x:-0.25", function() {
            data.angle.degree = 225;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.25);
        });

        it("angle:225deg, distance:10 is x:-0.1", function() {
            data.angle.degree = 225;
            data.distance = 10;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.1);
        });        

        it("angle:247.5deg, distance:50 is x:-0.25", function() {
            data.angle.degree = 247.5;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.25);
        });

        it("angle:247.5deg, distance:25 is x:-0.125", function() {
            data.angle.degree = 247.5;
            data.distance = 25;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.125);
        });

        it("angle:269.9deg, distance:50 is x:~0", function() {
            data.angle.degree = 269.9;
            data.distance = 50;
            var myData = calculateHorizontalData(data);
            expect(myData.xDirection).toBe("left");
            expect(myData.x).toBe(-0.0011111111111113958);
        });
    });

  });
  describe("Y Axis direction.", function() {
    var data = null;
    beforeEach(function(){
        data = {
          angle:{
              degree: null
          },
          distance: 0
      };
    });
    describe("up", function(){
        it("angle:0.1deg, distance:50 is y:~0", function() {
            data.angle.degree = 0.1;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("up");
            expect(myData.y).toBe(0.0011111111111110628);
        });

        it("angle:22.5deg, distance:50 is y:0.25", function() {
            data.angle.degree = 22.5;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("up");
            expect(myData.y).toBe(0.25);
        });

        it("angle:45deg, distance:50 is y:0.5", function() {
            data.angle.degree = 45;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("up");
            expect(myData.y).toBe(0.5);
        });

        it("angle:90deg, distance:50 is y:1", function() {
            data.angle.degree = 90;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("up");
            expect(myData.y).toBe(1);
        });

        it("angle:135deg, distance:50 is y:0.5", function() {
            data.angle.degree = 135;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("up");
            expect(myData.y).toBe(0.5);
        });

        it("angle:157.5deg, distance:50 is y:0.25", function() {
            data.angle.degree = 157.5;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("up");
            expect(myData.y).toBe(0.25);
        });

        it("angle:179.9deg, distance:50 is y:~0", function() {
            data.angle.degree = 179.9;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("up");
            expect(myData.y).toBe(0.0011111111111110628);
        });   
    });

    describe("down", function(){
        it("angle:359.9deg, distance:50 is y:~0", function() {
            data.angle.degree = 359.9;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("down");
            expect(myData.y).toBe(-0.0011111111111113958);
        });

        it("angle:337.5deg, distance:50 is y:-0.25", function() {
            data.angle.degree = 337.5;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("down");
            expect(myData.y).toBe(-0.25);
        });

        it("angle:315deg, distance:50 is y:-0.5", function() {
            data.angle.degree = 315;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("down");
            expect(myData.y).toBe(-0.5);
        });

        it("angle:270deg, distance:50 is y:-1", function() {
            data.angle.degree = 270;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("down");
            expect(myData.y).toBe(-1);
        });

        it("angle:225deg, distance:50 is y:-0.5", function() {
            data.angle.degree = 225;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("down");
            expect(myData.y).toBe(-0.5);
        });

        it("angle:202.5deg, distance:50 is y:-0.25", function() {
            data.angle.degree = 202.5;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("down");
            expect(myData.y).toBe(-0.25);
        });

        it("angle:180.1deg, distance:50 is y:~0", function() {
            data.angle.degree = 180.1;
            data.distance = 50;
            var myData = calculateVerticalData(data);
            expect(myData.yDirection).toBe("down");
            expect(myData.y).toBe(-0.0011111111111110628);
        });        
    });
  });
});