
(function ($) {
    "use strict";
    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })
})(jQuery);

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

function newUser(username, userphone, useraddress){
  // A post entry.
  var postData = {
    name: username,
    phone: userphone,
    address: useraddress,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/users/' + newPostKey] = postData;
  console.log('wahtef');
  return firebase.database().ref().update(updates);

}

$('#signup').click(function(event){
  console.log("clicked ree")
  var $form = $(this);
  console.log("submit to Firebase");

  //make the submit disabled
  $form.find("#submit").prop('disabled', true);

  //get the actual values that we will send to firebase
  var name = $('#name').val();
  console.log(name);
  var phone = $('#phone').val();
  console.log(phone);
  var address = $('#address').val();
  console.log(address);

  newUser(name, phone, address);
})
