
      $(document).ready(function () {
        $(".ya").click( //이벤트:사용자의 행위,동작:마우스를 눌렀다 떼는 행위
          function () {
            $("body").addClass("night");
            $("body").removeClass("day");
            return false;
          }
        );
        //사이드메뉴 클릭시 보이게
        $("aside span").click(function () {
          // $("aside").addClass("show");
          $("aside").toggleClass("show"); //클래스를 붙였다 띄었다 함
        });
      });
