$(document).ready(function(){
    var link = "http://158.108.165.223/data/CEEDney/order";



    //  var link = "http://158.108.165.76";

    // $('#lang').click(function () {
    //     var open = "";
    //     $.ajax({
    //         url: link + "set/" + open
    //     }).done(function () {
    //         console.log(open);
    //         console.log("Done");
    //     }).fail(function () {
    //         console.log("Failed");
    //     });
    // });

    var showtext = 0;


    $('#pure').mouseover(function(){
      console.log($('#talktalk').text("Hold to water the mushroom"));
      showtext = 1;
      console.log(showtext);
    });
    $('#pure').mouseout(function(){
      console.log($('#talktalk').text("^w^"));
      showtext = 0;
    });

    $('#pure').mousedown(function(){
      $('#pure').attr("src","img/PureBut2.png");
      var water = "c";
      $.ajax({
        // url: link + "/set.php?key=order&value=" + water
        url: link + "/set/" + water
      }).done(function(){
        console.log(water);
      }).fail(function(){
        console.log(water);
      });
    });
    //
    $('#pure').mouseup(function(){
      $('#pure').attr("src","img/valve.png");
      var water = "d";
      $.ajax({
        // url: link + "/set.php?key=order&value=" + water
        url: link + "/set/" + water
      }).done(function(){
        console.log(water);
      }).fail(function(){
        console.log(water);
      });
    });

    var fanstatus = 0;
    var onoff = "a";
    $('#fan').click(function () {
        if(fanstatus==0){
          onoff = "a";
          fanstatus = 1;
        } else {
          onoff = "b";
          fanstatus = 0;
        }
        $.ajax({
          // url: link + "/set.php?key=order&value=" + onoff
          url: link + "/set/" + onoff
        }).done(function () {
            console.log(onoff);
        }).fail(function () {
            console.log("Failed");
        });
    });
    var status = 0;
    $('#fan').mousedown(function(){
      $('#fan').attr("src","img/FanBut3.png");
      if(status == 0) {
        status = 1;
      } else {
        status = 0;
      }


    });
    $('#fan').mouseup(function(){
      if(status!=0){
        $('#fan').attr("src","img/FanBut.png");
      } else {
        $('#fan').attr("src","img/FanBut2.png");
      }
    });

    $('#fan').mouseover(function(){
      showtext = 1;
      if(status == 0){
        console.log($('#talktalk').text("Fan is Off"));
      } else {
        console.log($('#talktalk').text("Fan is On"));
      }
    });
    $('#fan').mouseout(function(){
      showtext = 0;
      console.log($('#talktalk').text("^w^"));
    });

    $('#play').mousedown(function(){
      $('#play').attr("src","img/play2.png");
      var walk = "e";
      $.ajax({
        // url: link +"/set.php?key=order&value="+ walk
        url: link + "/set/" + walk

      }).done(function(){
        console.log(walk);
      }).fail(function(){
        console.log("fail");
      });
    });
    $('#play').mouseup(function(){
      $('#play').attr("src","img/play.png");
      var walk = "f";
      $.ajax({
        // url: link +"/set.php?key=order&value="+ walk
        url: link + "/set/" + walk

      }).done(function(){
        console.log(walk);
      }).fail(function(){
        console.log("fail");
      });
    });

    // $('#slider').slider({
	  //    formatter: function(value) {
		//      return 'Current value: ' + value;
	  //    }
    // });
    // $('#water').click(function () {
    //     var open = "1";
    //     $.ajax({
    //         url: link + "set/" + open
    //     }).done(function () {
    //         console.log(open)
    //         console.log("Done");
    //     }).fail(function () {
    //         console.log("Failed");
    //     });
    // });


    var Lstatus = 0;
    var Lswitch = "g";
    $('#lightbulb').mouseover(function(){
      showtext = 1;
      if(Lstatus == 0){
        console.log($('#talkltalk').text("Click to turn on the LED"));
      } else {
        console.log($('#talkltalk').text("Click to turn off the LED"));
      }
    });
    $('#lightbulb').mouseout(function(){
      showtext = 0;
      console.log($('#talktalk').text("^w^"));
    });
    $('#lightbulb').mousedown(function(){
      $('#lightbulb').attr("src","img/light3.png");
      if(Lstatus == 0) {
        Lstatus = 1;
        Lswitch = "g";
      } else {
        Lstatus = 0;
        Lswitch = "h";
      }
      $.ajax({
        // url: link + "/set.php?key=order&value=" + Lswitch
        url: link + "/set/" + Lswitch
        //"/get.php?key=temperaturer&value=3"
        //"/get.php?key=humidity&value=3"
        //"/get.php?key=ultrdwater&value=3"
        //"/get.php?key=ultradis&value=3"
        //"/get.php?key=light&value=3"

      }).done(function(){
        console.log(Lswitch);
      }).fail(function(){
        console.log(Lswitch);
      });

    });

    $('#lightbulb').mouseup(function(){
      if(Lstatus!=0){
        $('#lightbulb').attr("src","img/light2.png");
      } else {
        $('#lightbulb').attr("src","img/light1.png");
      }
    });

    var isOk = true;
    var allText = "";
    var tempText = "";
    var huText = "";
    var waterText = "";
    setInterval(function () {
        // $.ajax({
        //     url: link
        // }).done(function (data) {
        //     var code = data.split("-")
        //     var text = "";
        //     var distance = code[1] / 29.1 /2; //centimeter
        //     var volume = (Math.PI * Math.pow(3,2)) * (22.5-distance);
        //     console.log($('#temp').text(code[0]));
        //     console.log($('#tank').text(distance.toFixed(2)));
        //     console.log($('#light').text(code[2]));
        //     console.log($('#moist').text(code[3]));
        //     // if(code[4] === 1){
        //     //     console.log($('#servo').text("Open"));
        //     // }else{
        //     //     console.log($('#servo').text("Close"));
        //     // }
        //
            // if(code[0]<25){
            //   tempText = "หนาวอะ";
            //   if(isOk){
            //     $('#mush').attr("src","SMr.gif");
            //     isOk = false;
            //   }
            // }
            // // if(code[0]>=25&&code[0]<30){
            // //   tempText = "";
            // //   $('#mush').attr("src","GMr.gif");
            // //   isOk = true;
            // // }
            // if(code[0]>=30){
            //     tempText = "ร้อนจังงง";
            //     if(isOk){
            //       $('#mush').attr("src","SMr.gif");
            //       isOk = false;
            //     }
            // }
        //     //if(code[3])
        //     //     console.log($('#talk').text("B"));
        //     // }
        //     if (distance <= 3 ) {
        //         waterText = "ถังน้ำเต็มจ้าา"
        //     } //else if(distance >= 15){
        //     //     console.log($('#talk').text("C"));
        //     //     console.log($('#tank').text(volume));
        //     // }else{
        //     //     console.log($('#talk').text("d"));
        //     //     console.log($('#tank').text(volume));
        //     // }
        //
        // }).fail(function (data) {
        //     console.error("failed");

        var Tpath = "http://158.108.165.223/data/CEEDney/temperature"
        $.ajax({
          url: Tpath
        }).done(function(data){
          console.log($('#temp').text(data+"  ํc"))
          if(data<25){
            if(showtext == 0){
              tempText = "หนาวอะ";
            }
            if(isOk){
              $('#mush').attr("src","SMr.gif");
              isOk = false;
            }
          }
          if(data>=25&&data<30){
            tempText = "^w^";
            $('#mush').attr("src","GMr.gif");
            isOk = true;
          }
          if(data>=30){
              if(showtext==0){
                tempText = "ร้อนจังงง";
              }
              if(isOk){
                $('#mush').attr("src","SMr.gif");
                isOk = false;
              }
          };
        }).fail(function(data){

        });

        var Hpath = "http://158.108.165.223/data/CEEDney/humidity"
        $.ajax({
          url: Hpath
        }).done(function(data){
          console.log($('#moist').text(data+"%"));
          if(data<80){
            if(showtext==0){
              hutext = "แห้งจังง"
            }
            if(isOk){
              $('#mush').attr("src","SMr.gif");
              isOk = false;
            }
          }
          if(data>=80&&data<=90){
            hutext = "^w^"
            $('#mush').attr("src","GMr.gif");
            isOk = true;
          }
          if(data>90){
              if(showtext==0){
                tempText = "ชื้นไปป";
              }
              if(isOk){
                $('#mush').attr("src","SMr.gif");
                isOk = false;
              }
          };
        }).fail(function(data){

        });



        var Wpath = "http://158.108.165.223/data/CEEDney/ultradis"
        $.ajax({
          url: Wpath
        }).done(function(data){
          console.log($('#tank').text(data+"%"));
        }).fail(function(data){

        });

        var Lpath = "http://158.108.165.223/data/CEEDney/light"
        $.ajax({
          url: Lpath
        }).done(function(data){
          console.log($('#light').text(data));
        }).fail(function(data){

        });

        allText = tempText + huText + waterText;
        console.log($('#talktalk').text(allText));
    }, 1000 * 2);
});
