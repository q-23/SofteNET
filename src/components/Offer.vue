<template>
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <slot name="image"></slot>
      </div>
      <div class="col-md-8 col-xs-12">
        <div class="col-12 contentbox" v-in-viewport.once='{ top: -100}'>
          <table style="height: 200px;">
            <tbody>
            <tr>
              <td class="align-middle">
                <slot name="header"></slot>
              </td>
            </tr>
            <tr>
              <td class="align-middle">
                <slot name="content"></slot>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="content">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Offer'
}
</script>

<style scoped>
  .contentbox{
    transform: translate(160px,50px);
    background-color: #ebebeb;
    margin: 0 auto;
    opacity: 0;
  }
  .contentbox.in-viewport{
    animation: contentbox 1.2s;
    animation-fill-mode: forwards;
  }
  @keyframes contentbox {
    0%{
      opacity: 0;
      transform: translate(160px,50px);
    }
    75%{
      border-radius: 0;
      opacity: 1;
      transform: translate(0,50px);
    }
    100% {
      border-radius: 20px;
      opacity: 1;
      transform: translate(0,50px);
    }
  }
  .content{
    margin-left: 30px;
    padding-top: 30px;
  }
  @media only screen and (max-width: 1239px){
    div.col-md-8{
      transform: translateY(-30px);
    }
  }
  @media only screen and (max-width: 991px){
    .content{
      margin-left: 7px;
    }
  }
  @media only screen and (max-width: 767px){
    .content{
      text-align: justify;
    }
  }
</style>
