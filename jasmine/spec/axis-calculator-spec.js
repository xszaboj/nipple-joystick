describe("Calculate direction.", function(){
  describe("X Axis.", function() {
    it("0 deg is right", function() {
      var data = {
          angle:{
              degree: 0
          },
          distance: 0
      }
      var myData = calculateAxisData(data);
      expect(myData.xDirection).toBe("right");
    });

    it("180 deg is left", function() {
      var data = {
          angle:{
              degree: 180
          },
          distance: 0
      }
      var myData = calculateAxisData(data);
      expect(myData.xDirection).toBe("left");
    });
  });
  describe("Y Axis.", function() {
    it("90 deg is up", function() {
      var data = {
          angle:{
              degree: 90
          },
          distance: 0
      }
      var myData = calculateAxisData(data);
      expect(myData.yDirection).toBe("up");
    });

    it("270 deg is down", function() {
      var data = {
          angle:{
              degree: 270
          },
          distance: 0
      }
      var myData = calculateAxisData(data);
      expect(myData.yDirection).toBe("down");
    });
  });
})
