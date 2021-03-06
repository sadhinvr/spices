const htmlmockup = `

<header>
<div class="row top">
    <div class="logo">
        <img src="images/logo.svg" alt="">
    </div>
    <nav class="main_nav">
        <ul>
            <li><a href="#">About me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Learn</a></li>
        </ul>
    </nav>
</div>

<div class="row">
    <div class="col header_col">

        <div class="header_content">
            <h1 class="site_heading">
                <span style="color: #FBA24F;background: linear-gradient(to right, #FBA24F,#ff5200);-webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">Skip</span> The Diet,
                Just Eat Healthy
                With Food Network
            </h1>
            <p>
                Imagine you don't need a diet because we provide
                healthy and delicious food for you!
            </p>

            <a href="#" class="btn">Order Food</a>
        </div>
    </div>
    <div class="col">
        <div class="banner_img">
            <img src="images/female/banner.png" alt="">
        </div>
    </div>
</div>
</header>
<main>
<section class="about_us">
    <div class="row">
        <div class="col person_img_col">
            <img src="images/female/Person Image.png" alt="" class="person_img">
        </div>
        <div class="col">
            <h2>
                About Me
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a
                pharetra,
                feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
                suscipit
                non. Non commodo volutpat, pharetra, vel.
            </p>

            <a href="#" class="btn">Order Food</a>
        </div>
    </div>
</section>

<section>
    <div class="row center">
        <div class="col middle_content">
            <h2>
                My recipies
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a
                pharetra,
                feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
                suscipit
                non. Non commodo volutpat, pharetra.
            </p>
        </div>
    </div>

    <div class="row boxes">
        <div class="col box">
            <img src="images/food/Project Cover.jpg" alt="">
            <h3>Recipie Title</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id
                nisi
                lectus at.
            </p>
        </div>
        <div class="col box">
            <img src="images/food/Project Cover.jpg" alt="">
            <h3>Recipie Title</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id
                nisi
                lectus at.
            </p>
        </div>
        <div class="col box">
            <img src="images/food/Project Cover.jpg" alt="">
            <h3>Recipie Title</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id
                nisi
                lectus at.
            </p>
        </div>
    </div>
</section>

<section class="testomonial">
    <div class="row">
        <div class="col">
            <div class="">
                <h2>700k</h2>
                <p>Youtube Subscribers</p>
            </div>
        </div>
        <div class="col">
            <div class="">
                <h2>700k</h2>
                <p>Youtube Subscribers</p>
            </div>
        </div>
        <div class="col">
            <div class="">
                <h2>700k</h2>
                <p>Youtube Subscribers</p>
            </div>
        </div>
    </div>
</section>
</main>
<footer>
<div class="row center">
    <div class="col">
        <div class="logo">
        <img src="images/logo-w.svg" alt="">
    </div>

    <p>
        Eat healthy to live healthy. Live healthy to live happy.
    </p>
    </div>
</div>
</footer>

`


document.body.innerHTML=htmlmockup;