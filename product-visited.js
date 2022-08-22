<script>

  var email=jQuery(".tipbar__login__email").text();

  var name= jQuery(".productName").text();

  var image= jQuery("#image-main").attr("src");

  var link= jQuery(location).attr("href");

  var description= jQuery(".productDescription").text();

  var price= jQuery(".valor-por").text();  

 

  _dAutomationGtmAccess("paste here your webiste", "paste here the Dinamize hash", {

  

    "cmp1":email, 


    "cart_data":[{

      "amount":"1",

      "id":name,

      "image":image,

      "link":link,

      "name":name,

      "description":description,

      "unitary_value":price



    }]})



</script>


