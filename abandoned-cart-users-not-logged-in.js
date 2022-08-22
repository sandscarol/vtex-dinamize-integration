<script>

       var cmp1 = jQuery(".client-profile-email .email").text();

  

    if(cmp1!=""){

        var cart_data_ar = $("body").data("cart_data_ar");

            if (typeof cart_data_ar !== "undefined"){

                 for (var i in cart_data_ar) {

                     cart_data = cart_data_ar[i];

                  

        _dAutomationGtmAddTimer("Cole seu site aqui", "Cole sua hash aqui", {"cmp1":cmp1, "cart_data":cart_data});

                  

                 };

               };

        cart_data_ar=[];

        $("body").data("cart_data_ar",[]);

    };

    </script>

