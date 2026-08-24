<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <meta name="theme-color" content="#0e090d">

    <title>Bizim Hikâyemiz ♥</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet">

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- LOADER -->

    <div id="loader">
        <div class="loader-heart">♥</div>
        <p>bizim hikâyemiz hazırlanıyor...</p>
    </div>


    <!-- ARKA PLAN EFEKTLERİ -->

    <div class="grain"></div>
    <div id="hearts"></div>
    <div id="sparkles"></div>


    <!-- MÜZİK -->

    <button class="music-btn" id="musicBtn" type="button">
        ♫
    </button>

    <audio id="bgMusic" loop preload="auto">
        <source src="music/music.mp3" type="audio/mpeg">
    </audio>


    <!-- NAV -->

    <nav id="nav">

        <div class="nav-logo">
            S <span>♥</span> E
        </div>

        <div class="nav-dots">

            <button type="button" data-target="story">
                01
            </button>

            <i></i>

            <button type="button" data-target="memories">
                02
            </button>

            <i></i>

            <button type="button" data-target="final">
                03
            </button>

        </div>

    </nav>


    <main>

        <!-- ================= HERO ================= -->

        <section class="hero" id="hero">

            <div class="orb orb1"></div>
            <div class="orb orb2"></div>

            <div class="hero-content">

                <p class="eyebrow">
                    24.08.2025 — 24.08.2026
                </p>

                <h1>
                    Bir yıl.<br>
                    <em>Binlerce anı.</em>
                </h1>

                <p class="sub">
                    Ve hâlâ anlatacak çok güzel bir hikâyemiz var.
                </p>


                <!-- ANA BUTON -->

                <button
                    class="open-btn"
                    id="openBtn"
                    type="button"
                    aria-label="Hikâyemizi aç">

                    <span class="ring"></span>

                    <span class="heart">
                        ♥
                    </span>

                    <b>
                        Hikâyemizi aç
                    </b>

                </button>


                <div class="scroll">
                    aşağıda küçük bir sürpriz var
                    <span>↓</span>
                </div>

            </div>

        </section>


        <!-- ================= MEKTUP ================= -->

        <section class="story" id="story">

            <div class="section-label">
                01 — BİR MEKTUP
            </div>


            <div class="paper-wrap">

                <div class="paper-shadow"></div>

                <article class="paper">

                    <div class="paper-top">

                        <span>♥</span>

                        <small>
                            27 AĞUSTOS 2025
                        </small>

                        <span>♥</span>

                    </div>


                    <h2>
                        Sevgilime,
                    </h2>


                    <div id="typed"></div>


                    <p class="signature">
                        Seni seven biri, <span>hep.</span>
                    </p>


                    <button
                        class="continue"
                        id="continueBtn"
                        type="button">

                        Anılarımıza geç
                        <b>→</b>

                    </button>

                </article>

            </div>

        </section>


        <!-- ================= ANILAR ================= -->

        <section class="memories" id="memories">

            <div class="section-label">
                02 — ANILARIMIZ
            </div>


            <header>

                <p class="eyebrow">
                    KÜÇÜK BİR ZAMAN KAPSÜLÜ
                </p>

                <h2>
                    Birlikte geçen<br>
                    <em>güzel günler.</em>
                </h2>

                <p>
                    Birlikte geçirdiğimiz güzel anlar...
                </p>

            </header>


            <div class="counter-row">

                <div>
                    <strong>365</strong>
                    <span>GÜN</span>
                </div>

                <div>
                    <strong>12</strong>
                    <span>AY</span>
                </div>

                <div>
                    <strong>∞</strong>
                    <span>ANI</span>
                </div>

            </div>


            <!-- FOTOĞRAFLAR BURAYA GELECEK -->

            <div
                class="polaroids"
                id="gallery">
            </div>


            <!-- ZAMAN TÜNELİ -->

            <div class="timeline">

                <div class="line"></div>


                <div class="moment">

                    <span>01</span>

                    <div>

                        <small>
                            İLK ANILAR
                        </small>

                        <h3>
                            Her şeyin başladığı zaman.
                        </h3>

                        <p>
                            Belki o gün bunun bir yıl sonra
                            burada olacağını bilmiyorduk.
                            Ama iyi ki o gün vardı.
                        </p>

                    </div>

                </div>


                <div class="moment reverse">

                    <span>02</span>

                    <div>

                        <small>
                            SONRA...
                        </small>

                        <h3>
                            Birlikte daha çok güldük.
                        </h3>

                        <p>
                            Sıradan günleri bile özel yapan
                            şey, onları beraber yaşamamızdı.
                        </p>

                    </div>

                </div>


                <div class="moment">

                    <span>03</span>

                    <div>

                        <small>
                            BUGÜN
                        </small>

                        <h3>
                            Birinci yılımız.
                        </h3>

                        <p>
                            Ve bu sadece bir son değil.
                            Hikâyenin yeni bölümünün başlangıcı.
                        </p>

                    </div>

                </div>

            </div>

        </section>


        <!-- ================= FİNAL ================= -->

        <section class="final" id="final">

            <div class="final-stars"></div>


            <div class="final-content">

                <p class="eyebrow">
                    03 — SON BİR ŞEY
                </p>


                <div class="big-heart">
                    ♥
                </div>


                <h2>
                    İyi ki<br>
                    <em>sen.</em>
                </h2>


                <p class="final-text">

                    İlk yılımız kutlu olsun.<br>

                    İyi ki hayatımdasın,
                    iyi ki bizim hikâyemiz var.

                </p>


                <div class="date-line">

                    <span></span>

                    24 · 08 · 2026

                    <span></span>

                </div>


                <button
                    id="replay"
                    class="replay"
                    type="button">

                    Hikâyeyi baştan izle ↻

                </button>

            </div>


            <div class="forever">
                S &nbsp; ♥ &nbsp; E
            </div>

        </section>

    </main>


    <script src="script.js"></script>

</body>
</html>
