<script>
  import { KAKAO_CLIENT_KEY, BACKEND_URL } from "../../store";
</script>

<a
  href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_KEY}&redirect_uri=${BACKEND_URL}"
  ><img src="./images/kakao_login_small.png" alt="" /></a
>

<style>
  a {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
