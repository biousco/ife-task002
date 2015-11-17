(function (window,document) {
  var TimeC = function () {
    var input = $("#time"),
    button = $("#confirm"),
    t_time = $("#target_time"),
    l_time = $("#last_time"),
    tips = $("#tips"),
    reg = /^[0-9]{4}-[01]?[0-9]{1}-[012]?[0-9]{1}$/,
    t_date_arr = [],
    timer = null,
    object_count = -1,
    c_time = new Date();

    this.reg = reg;
    var input_str = "",
    target_str = "",
    last_str = "";

    var _init = function () {
      tips.innerHTML = "";
      object_count++;
      if(timer) {
        clearInterval(timer);
      }
      last_time.innerHTML = "";
    };
    var _validate = function (input_str) {
      return reg.test(input_str);
    };
    var _format_time = function (input_str) {
      var arr = input_str.split("-");
      t_date_arr = arr;
      return arr[0] + "年" + arr[1] + "月" + arr[2] + "日";
    };
    var _getlast_time = function () {
      var t_year = t_date_arr[0],
          t_month = t_date_arr[1],
          t_day = t_date_arr[2],
          c_year = c_time.getYear(),
          c_month = c_time.getMonth(),
          c_day = c_time.getDay(),
          l_year = t_year - c_year,
          l_month = t_month - c_month,
          l_day = t_day - c_day;

      var target_date = new Date();
      target_date.setFullYear(t_date_arr[0],t_date_arr[1] - 1,t_date_arr[2]);
      target_date.setHours(0);
      target_date.setMinutes(0);
      target_date.setSeconds(0);
      target_date.setMilliseconds(0);
      if(c_time > target_date) {
        last_time.innerHTML =  "已经过去了啦";
        return false;
      }

      var target_mms = target_date.getTime(),
          current_mms = c_time.getTime(),
          dis_s = (target_mms - current_mms)/1000;

      var compute_time = function (dis_s) {
        l_day = Math.floor(dis_s/86400);
        l_hour = Math.floor((dis_s - l_day*86400) / (3600));
        l_minutes = Math.floor((dis_s - l_day*86400 - l_hour*3600) / 60);
        l_sec = Math.floor((dis_s - l_day*86400 - l_hour*3600 - l_minutes*60));
        return [l_day,l_hour,l_minutes,l_sec];
      };

      var render = function () {
        current_mms += 1000;
        dis_s = (target_mms - current_mms)/1000;
        var result = compute_time(dis_s);
        if(result[0] === 0 && result[1] === 0 && result[2] === 0 && result[3] === 0) {
          clearInterval(timer[i]);
        }
        last_time.innerHTML = "还有" + result[0] + "天" + result[1] + "小时" + result[2] + "分" + result[3] +  "秒";
      };

      render();
      timer = setInterval(render,1000);


    };
    var render_fun = function () {
      _init();
      input_str = input.value;
      if(_validate(input_str) === false) {
        tips.innerHTML = "输入的格式不正确喔~";
        return false;
      }
      target_str = _format_time(input_str);
      t_time.innerHTML = target_str;
       _getlast_time();
    };
    $.click(button,render_fun);
  };

  window.TimeC = TimeC;

  TimeC();
})(window,document);
