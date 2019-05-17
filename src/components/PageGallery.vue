<template>
      <div class="col-6 col-md-4">
        <a :href="link" target="_blank" v-b-tooltip="hover">
          <div class="holder">
        <div class="border col-12"  v-in-viewport.once>
          <div class="image">
            <slot name="image"></slot>
          </div>
          <div class="linktext">
            <slot name="link"></slot>
          </div>
        </div>
          </div>
        </a>
      </div>
</template>

<script>
export default {
  name: 'PageGallery',
  props: ['link', 'hover']
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .border{
    height: 330px;
    background-color: #ebebeb;
    text-align: center;
    position:relative;
    margin: 0 auto;
    padding: 0 0 0 0;
    overflow: hidden;
    transition: .6s;
    opacity: 0;
  }
  .col-md-4 {
    margin: 15px 0 15px;
  }
  .linktext{
    transform: translateY(35px);
  }
  .holder{
    transition: .3s;
  }
  .holder:hover{
    box-shadow:  0 0 18px -3px rgba(0,0,0,0.75);
    transform: scale(1.05)
  }
  .border.in-viewport{
    animation:flip 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  @keyframes flip
  {
    0% { transform:perspective(500px) rotate3d(1,1,0,220deg); }
    100% { transform:perspective(500px) rotate3d(2,2,1,360deg);
    opacity: 1;
    }
  }
  @media only screen and (max-width: 991px){
    .border{
      height: 300px;
    }
    .linktext{
      transform: translateY(10px);
    }
  }
</style>
