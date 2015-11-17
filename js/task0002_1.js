(function () {
  var task01 = function () {
    var $input = $("#input01"),
    $button = $("#button01"),
    $render_text = $("#intre"),
    intre_arr = [];

    $.click($button,function () {
      var text = $input.value;
      intre_arr = uniqArray(text.split(","));
      var result_arr = [];
      each(intre_arr,function (item,index) {
        var res_str = trim(item);
        if (res_str.length !== 0) result_arr.push(res_str);
      });
      var result = result_arr.join(" ");
      $render_text.innerHTML = result;
    });
  };

  var task02 = function () {
    var $input = $("#textarea01"),
    $button = $("#button02"),
    $render_text = $("#intre02"),
    intre_arr = [],
    reg = /\s|,|，|,|，|、|;|；/;

    $.click($button,function () {
      var text = $input.value;
      intre_arr = uniqArray(text.split(reg));
      var result_arr = [];
      each(intre_arr,function (item,index) {
        var res_str = trim(item);
        if (res_str.length !== 0) result_arr.push(res_str);
      });
      var result = result_arr.join(" ");
      $render_text.innerHTML = result;
    });
  };

  var task03 = function () {
    var $input = $("#textarea02"),
    $button = $("#button03"),
    $error_text = $("#error"),
    $result = $("#result01"),
    intre_arr = [],
    result_str = "",
    count = 0,
    reg = /\s|,|，|,|，|、|;|；/;

    var concat_str = function (value) {
      var label = "<label name='intres' for=''>" + value + "</label>";
      var input = '<input type="checkbox" name="intres" value="' + value + '">';
      return label + input;
    };

    $.click($button,function () {
      var text = $input.value;
      result_str = "";
      error_str = "";
      count = 0;
      intre_arr = uniqArray(text.split(reg));

      var result_arr = [];
      each(intre_arr,function (item,index) {
        var sub_str = trim(item);
        if (sub_str.length !== 0 ) {
          if(count < 10) {
            result_str += concat_str(sub_str);
            count++;
          } else {
            error_str = "不能超过10个！";
            result_str = "";
            return false;
          }

        }
      });
      if(count === 0) {
        error_str = "输入不能为空！";
      }
      $error_text.innerHTML = error_str;
      $result.innerHTML = result_str;
    });


  };

  task01();
  task02();
  task03();
})();
