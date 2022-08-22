<script>

    

    var cart_data_ar = jQuery("body").data("cart_data_ar");

    if (typeof cart_data_ar === "undefined"){

        jQuery("body").data("cart_data_ar",[]);

    cart_data_ar = jQuery("body").data("cart_data_ar");

    };



    jQuery(".cart-items .product-item").each(function(){

        

        //customer data

         var cmp1 = "";

         cmp1 = jQuery(".client-profile-email .email").text();

        

        //product data   

        var name = jQuery(this).find('img').attr("alt");

        var image = "https:" + jQuery(this).find('img').attr("src");

        var link = "https:" + jQuery(this).find('a').attr("href");

        var unitary_value = jQuery(this).find('.new-product-price').text();

            

         var cart_data = [{

             "amount":"1",

             "id":name,

             "image":image,

             "link":link,

             "name":name,

             "description":" ",

             "unitary_value":unitary_value

         }];



            if(cmp1!=""){

                  _dAutomationGtmAddTimer("paste here your website", "paste here Dinamize's hash", {"cmp1":cmp1, "cart_data":cart_data});

            }else{

              

            cart_data_ar.push(cart_data);

                  jQuery("body").data("cart_data_ar",cart_data_ar);

            };

        });

</script>

