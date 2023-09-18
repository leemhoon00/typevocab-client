<script>
  import { KAKAO_CLIENT_KEY, BACKEND_URL } from "@src/config";
</script>

<nav class="navbar fixed-top navbar-expand-sm bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#/">TypeVocab</a>

    <div class="collapse navbar-collapse" id="navbarNav">
      <a
        class="imgA"
        href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={KAKAO_CLIENT_KEY}&redirect_uri={BACKEND_URL}/auth/kakao"
        ><img src="./images/kakao_login_small.png" alt="" /></a
      >
    </div>
  </div>
</nav>

<main>
  <h1>Welcome TypeVocab!</h1>
  <br /><br />
  <h2>Features</h2>
  <hr />
  <h3>1. 단어장 생성 기능!</h3>
</main>

<style>
  .imgA {
    margin-left: auto;
    margin-right: 2rem;
  }

  .navbar-brand {
    margin-left: 2rem;
  }

  main {
    margin-top: 5rem;
    padding: 0 4rem;
  }

  h1 {
    text-align: center;
  }

  h3 {
    border-bottom: none;
  }
</style>
