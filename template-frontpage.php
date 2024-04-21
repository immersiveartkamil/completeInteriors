<?php /* Template Name: Strona Główna */ ?>
<?php get_header(); ?>
<div id="primary" class="content-area ">
	<?php include 'template-parts/hero.php'; ?>
	<section id="about-us" class="container-fluid about_us">
		<div class="row">
			<div class="col-lg-6 cold-md-6 col-sm-12  about_us__image"><img class="hero-image" src="https://completeinterior.pl/wp-content/uploads/2024/04/about-us-1.png" alt=""></div>
			<div class="col-lg-6 cold-md-6 col-sm-12 about_us__content">
				<div class="about_us__heading_wrapper">
					<p>COMPLETE INTERIORS</p>
					<h2 class="about_us__header">Specjalizujemy się w wnętrzach hoteli, biur i restauracji.
					</h2>
				</div>
				<p class="about_us__description">Stawiamy na profesjonalizm – począwszy od komunikacji z klientem , odpowiedzią na jego potrzeby, zaprojektowaniem przestrzeni i jej wyposażeniem. Dbamy aby projekt już od fazy pomysłu był możliwy do zrealizowania jak najkrótszym czasie.
				</p>
			</div>
		</div>
	</section>
	<?php include 'template-parts/logo.php'; ?>
	<?php include 'template-parts/services.php'; ?>
	<?php include 'template-parts/advantages.php'; ?>
	<?php include 'template-parts/values.php'; ?>
	<?php include 'template-parts/portfolio.php'; ?>
</div>


<?php get_footer(); ?>