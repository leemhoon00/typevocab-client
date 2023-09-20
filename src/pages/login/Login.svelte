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
  <h1 class="text-center">Welcome To TypeVocab!</h1>
  <br />
  <div class="text-center">
    <iframe
      width="1000rem"
      height="600rem"
      src="https://www.youtube.com/embed/6B8Yv5S6dSI?si=4HXIXRtNEw_41yrY"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
  <hr />
  <h3>1. TypeVocab을 쓰는 이유가 뭔가요??</h3>
  <p>
    <li>
      제가 토익사관학교에 있을 때 느낀건데 대부분 사람들이 단어를 외울 때 노트에
      직접 써가면서 외우더라구요. <br />
    </li>
    <li>
      근데 저는 한 10분 쓰고 나니까 손도 아프고 시간도 너무 오래걸려서 엑셀에
      키보드로 타이핑하며 외웠어요. <br />
    </li>
    <li>
      그렇게 외우다 보니 노트에 써서 외우는 것 보단 개인적으로 좋았지만 불편한
      부분들이 많아서 제가 쓰려고 직접 만들었습니다! <br />
    </li>
  </p>
  <hr />
  <h3>2. 어떤 부분이 불편했나요??</h3>
  <p>
    <li>
      우선 첫 번째로 영단어의 발음을 듣기 위해선 추가적인 노력이 필요했어요.
      이왕 단어를 외우는 거 발음까지 같이 들려주면 좋겠다고 생각했어요.
    </li>
    <li>
      두 번째로 제가 만든 단어, 단어장들을 엑셀에서 관리/사용하기가 불편했어요.
      그래서 손쉽게 단어나 단어장을 삭제하거나 추가할 수 있도록 만들었어요.
    </li>
    <li>
      그렇게 제가 만든 단어장들을 토대로 문제지를 만들어서 풀고 싶은데 그것
      마저도 키보드로 하고 싶었어요. 만드는 김에 pdf 파일로 다운받을 수 있게
      했어요.
    </li>
  </p>
  <hr />
  <h3>3. 어떻게 사용하나요??</h3>
  <p>
    <li>
      2분짜리 동영상으로 사용법을 익히시고 우측 상단에 카카오 로그인 버튼을
      누르시면 됩니다!
    </li>
    <li>
      사용자 정보를 기입할 수 있지만 아무 의미 없는 기능이라 사용 안 하시는걸
      추천드리고 카카오 로그인이라 제가 민감한 개인정보에 접근할 수 없으니
      안심하셔도 됩니다!
    </li>
  </p>
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
    padding-bottom: 5rem;
  }

  h3 {
    border-bottom: none;
  }

  p {
    font-size: 1.2rem;
  }

  li {
    margin-left: 1.5rem;
  }
</style>
