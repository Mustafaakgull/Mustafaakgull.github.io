 type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
    
   t type="text/javascript"
        (function () {
            emailjs.init({
                publicKey: "4iiFy1GvLoP0ZViCR",
            });
        })();
    </t>
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">
        (function () {
            emailjs.init("4iiFy1GvLoP0ZViCR");
        })();
    </script>
    <script type="text/javascript">
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();

            emailjs.sendForm('service_gvoja7n', 'template_88p8msa', this)
                .then(function () {
                    console.log('SUCCESS!');
                    document.getElementById('status').innerHTML = "<p class='text-success'>Mesajınız başarıyla gönderildi!</p>";
                }, function (error) {
                    console.log('FAILED...', error);
                    document.getElementById('status').innerHTML = "<p class='text-danger'>Mesaj gönderilirken bir hata oluştu.</p>";
                });
        });
    </script>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>