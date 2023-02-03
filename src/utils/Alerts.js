import Swal from "sweetalert2";

const SimpleAlert = (title, body, icon, confirmationText, callback) => {
  Swal.fire({
    title: title,
    text: body,
    icon: icon,
    confirmButtonText: confirmationText,
  }).then((result) =>{
    if (result.isConfirmed) {
      if(callback){
        callback();
      }
    }
  });
};

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timerProgressBar: true,
  didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

const ToastAlert = (icon, message, time, title) => {
  Toast.fire({
      icon: icon,
      title: title,
      text: message,
      timer: time,customClass: {
        container: 'w-auto',
        title: 'ws-nobreak',
      }
  });
};


export { SimpleAlert, ToastAlert };
