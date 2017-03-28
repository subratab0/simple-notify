# simple-notify
Show message simply using less configuration with bootstrap css.
Include jquery library
Include bootstrap css file
Include simple-notify.js

call like this
$().notify();

default option value: 
{
  text: "please wiat...",
  show: true,
  class: 'success',
  delay: false
}

Example: 
$().notify({
  text: "please wiat...",
  show: hide, // hide already shown message when set to hide
  class: 'success', // bootstrap class excluding 'alert' of 'alert-success/alert-info'
  delay: false // if set x , will hide after x ms
});


Thank you
