<template>
    <div class="row">
      <div class="col-12">
        <slot></slot>
        <div class="line" v-in-viewport.once.fully></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderText'
}
</script>

<style scoped>
  .col-12{
    padding: 100px 0 100px 0;
  }
  h1{
    color: #4791ff;
    font-family:'Alegreya Sans SC', sans-serif;
    font-weight: 700;
    font-size: 72px;
    text-align: center;
  }
  .line{
    background-color: #4791ff;
    height: 3px;
    transition: 1s;
    width: 0px;
    margin: 0 auto;
    transform: translateY(30px);
  }
  .line.in-viewport{
    width: 150px;
    transform: translateY(-10px);
  }
  @media only screen and (max-width: 1239px){
    h1.headertext{
      font-size: 50px;
    }
  }
  @media only screen and (max-width: 992px) {
    h1.headertext{
      font-size: 45px;
    }
  }
</style>
