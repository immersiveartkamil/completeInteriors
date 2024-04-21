<footer class="footer" id="kontakt">
    <div class="container">
        <p class="footer__main_heading">Skontaktuj się z nami!</p>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 footer__col">
                <p class="footer__heading">Email</p>
                <p><a href="mailto:biuro@izidesign.pl">biuro@izidesign.pl</a></p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 footer__col ">
                <p class="footer__heading">Kontakt</p>
                <p> <a href="tel:+48692426739">+ 48 692 426 739</a> <br>
                </p>
            </div>
        </div>
        <!-- Sekcja Formularza Kontaktowego -->
        <div class="row">
            <div class="col-lg-12">
                <div class="form">
                    <h3>Co możemy dla Ciebie zrobić?</h3>
                    <form action="/submit_contact_form" method="post">
                        <div class="form-wrapper">
                            <div class="form-group">
                                <input type="text" id="name" name="name" class="form-control" placeholder="Twoje imię i nazwisko" required>
                            </div>
                            <div class="form-group">
                                <input type="email" id="email" name="email" class="form-control" placeholder="Twój adres e-mail" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" id="phone" name="phone" class="form-control" placeholder="Twój numer telefonu" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Wyślij</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</footer>