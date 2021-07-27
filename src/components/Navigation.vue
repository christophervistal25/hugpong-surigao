<template>
  <div>
    <button class="toTop" id="myBtn" title="Go to top">
      <a title="Go to top"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
    </button>
    <div class="m-nav lg-hidden sticky-top">
      <a>
        <i class="fa fa-bars" aria-hidden="true"></i>
        <i class="fa fa-times" aria-hidden="true"></i
      ></a>
    </div>
    <div class="nav sticky-top">
      <div class="nav-option">
        <div>
          <router-link to="/"> <i class="fa fa-home"></i></router-link>
        </div>
        <div>
          <a @click="display = !display" href="javascript:;" class="sublevel2"
            >KILALANIN</a
          >
          <div
            class="subnav2"
            id="kilalanin"
            :class="display ? 'd-block' : 'd-none'"
          >
            <p>
              <router-link to="/ayek-t-pimentel">Ayek T. Pimentel</router-link>
              <router-link to="/romeo-s-momo">Romeo S. Momo Sr.</router-link>
              <router-link to="/johny-t-pimentel"
                >Johnny T. Pimentel</router-link
              >
              <router-link to="/">Vj Pimentel</router-link>
              <router-link to="/">Philip Pichay</router-link>
              <router-link to="/">Mary Grace S. Kimura</router-link>
              <router-link to="/">Jane V. Plaza</router-link>
              <router-link to="/">Marvin T. Azarcon</router-link>
              <router-link to="/">Dennis Yu</router-link>
              <router-link to="/">Roxanne Pimentel</router-link>
              <router-link to="/">Henrich Pimentel</router-link>
              <router-link to="/">Michael T. Corilla</router-link>
              <router-link to="/">Poly Lozada</router-link>
              <router-link to="/">Glenn Batiansila</router-link>
              <router-link to="/">Dodoy Fazon</router-link>
              <router-link to="/">Nicolas Alameda</router-link>
              <router-link to="/">Kid Pedrozo</router-link>
              <router-link to="/">Joey Pama</router-link>
              <router-link to="/">Shem Garay</router-link>
              <router-link to="/">Enciong Garay</router-link>
              <router-link to="/">Boyet Evangelio</router-link>
              <router-link to="/">Evelyn Naraiso</router-link>
            </p>
          </div>
        </div>
        <div>
          <a href="#" class="sublevel" data-target="kumilos-nav"></a>
          <div class="subnav2" id="kumilos-nav2" style="display: none">
            <p>
              <a href="" target=""></a>
              <a href="" class=""></a>
              <a href=""></a>
              <a href="" target=""></a>
              <a href="" class=""></a>
              <a href="" target=""></a>
              <a href="" target=""></a>
            </p>
          </div>
        </div>
        <div class="nav-hidden-lg">
          <a
            href="https://www.facebook.com/hugpongsurigao"
            target="_blank"
            class="icon"
            ><i class="fa fa-facebook" aria-hidden="true"></i
          ></a>
          <a href="https://twitter.com/OtsoDiretso" class="icon"
            ><i class="fa fa-twitter" aria-hidden="true"></i
          ></a>
          <a href="https://www.instagram.com/OtsoDiretso.PH" class="icon"
            ><i class="fa fa-instagram" aria-hidden="true"></i
          ></a>
        </div>
        <div class="nav-hidden-xs">
          <a
            href="https://www.facebook.com/hugpongsurigao"
            target="_blank"
            class="icon"
            ><i class="fa fa-facebook" aria-hidden="true"></i
          ></a>
        </div>
        <div class="nav-hidden-xs">
          <a href="" class="icon"
            ><i class="fa fa-twitter" aria-hidden="true"></i
          ></a>
        </div>
        <div class="nav-hidden-xs">
          <a href="" class="icon"
            ><i class="fa fa-instagram" aria-hidden="true"></i
          ></a>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
  <div>
    <div class="nav sticky-top lg-hidden">
      <div class="nav-option">
        <div>
          <a href="http://51.79.242.246/plataporma"
            ><i class="fa fa-home"></i
          ></a>
        </div>
        <div>
          <a
            href="javascript:;"
            @click="display = !display"
            class="sublevel2"
            data-target="kilalanin"
            >KILALANIN</a
          >
          <div
            class="subnav2"
            id="kilalanin"
            :class="display ? 'd-block' : 'd-none'"
          >
            <p>
              <a href="http://51.79.242.246/plataporma/alexander-t-pimentel"
                >Ayek T. Pimentel</a
              >
              <a href="http://51.79.242.246/plataporma/romeo-s-momo"
                >Romeo S. Momo Sr.</a
              >
              <a href="http://51.79.242.246/plataporma/johnny-t-pimentel"
                >Johnny T. Pimentel</a
              >
              <a href="http://51.79.242.246/plataporma/vj-pimentel"
                >Vj Pimentel</a
              >
              <a href="http://51.79.242.246/plataporma/philip-pichay"
                >Philip Pichay</a
              >
              <a href="http://51.79.242.246/plataporma/mary-grace-kimura"
                >Mary Grace S. Kimura</a
              >
              <a href="http://51.79.242.246/plataporma/jane-plaza"
                >Jane V. Plaza</a
              >
              <a href="http://51.79.242.246/plataporma/marvin-azarcon"
                >Marvin T. Azarcon</a
              >
              <a href="http://51.79.242.246/plataporma/dennis-yu">Dennis Yu</a>
              <a href="http://51.79.242.246/plataporma/roxanne-pimentel"
                >Roxanne Pimentel</a
              >
              <a href="http://51.79.242.246/plataporma/henrich-pimentel"
                >Henrich Pimentel</a
              >
              <a href="http://51.79.242.246/plataporma/michael-corilla"
                >Michael T. Corilla</a
              >
              <a href="http://51.79.242.246/plataporma/poly-lozada"
                >Poly Lozada</a
              >
              <a href="http://51.79.242.246/plataporma/glenn-batiansila"
                >Glenn Batiansila</a
              >
              <a href="http://51.79.242.246/plataporma/dodoy-fazon"
                >Dodoy Fazon</a
              >
              <a href="http://51.79.242.246/plataporma/nicolas-alameda"
                >Nicolas Alameda</a
              >
              <a href="http://51.79.242.246/plataporma/kid-pedrozo"
                >Kid Pedrozo</a
              >
              <a href="http://51.79.242.246/plataporma/joey-pama">Joey Pama</a>
              <a href="http://51.79.242.246/plataporma/shem-garay"
                >Shem Garay</a
              >
              <a href="http://51.79.242.246/plataporma/enchiong-garay"
                >Enciong Garay</a
              >
              <a href="http://51.79.242.246/plataporma/boyet-evangelio"
                >Boyet Evangelio</a
              >
              <a href="http://51.79.242.246/plataporma/evelyn-naraiso"
                >Evelyn Naraiso</a
              >
            </p>
          </div>
        </div>
        <div>
          <a href="#" class="sublevel" data-target="kumilos-nav"></a>
          <div class="subnav2" id="kumilos-nav2" style="display: none">
            <p>
              <a href="" target=""></a>
              <a href="" class=""></a>
              <a href=""></a>
              <a href="" target=""></a>
              <a href="" class=""></a>
              <a href="" target=""></a>
              <a href="" target=""></a>
            </p>
          </div>
        </div>
        <div class="nav-hidden-lg">
          <a href="https://www.facebook.com/hugpongsurigao" class="icon"
            ><i class="fa fa-facebook" aria-hidden="true"></i
          ></a>
          <a href="https://twitter.com/OtsoDiretso" class="icon"
            ><i class="fa fa-twitter" aria-hidden="true"></i
          ></a>
          <a href="https://www.instagram.com/OtsoDiretso.PH" class="icon"
            ><i class="fa fa-instagram" aria-hidden="true"></i
          ></a>
        </div>
        <div class="nav-hidden-xs">
          <a href="https://www.facebook.com/hugpongsurigao" class="icon"
            ><i class="fa fa-facebook" aria-hidden="true"></i
          ></a>
        </div>
        <div class="nav-hidden-xs">
          <a href="" class="icon"
            ><i class="fa fa-twitter" aria-hidden="true"></i
          ></a>
        </div>
        <div class="nav-hidden-xs">
          <a href="" class="icon"
            ><i class="fa fa-instagram" aria-hidden="true"></i
          ></a>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      display: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>