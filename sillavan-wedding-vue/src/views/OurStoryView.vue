<template>
  <div>
    <nav-and-header />
    <div style="outerContainer">
      <div class="innerContainer">
        <h1>Our Story</h1>
        <div class="paragraphDiv">
          <p>
            Wyatt and Faith met during their freshman year at Arkansas Tech
            University in which they had two classes together--the one they
            remember most, however, is that of Calculus II. They quickly became
            friends, as it was quite nice to have a fellow "nerd" to talk to.
            Wyatt and Faith grew even closer during their junior year, having
            their first date and soon after that, started dating on March, 14th
            2022. Wyatt knew he had found the one and proposed to Faith at the
            Garvan Gardens Christmas Light show on December 21st, 2022. Now,
            Wyatt and Faith look forward to May 27th, as they will embark on the
            next chapter of their lives -- the gift of marriage.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavAndHeader from "@/components/navAndHeader.vue";
export default {
  components: { NavAndHeader },
};
</script>

<style scoped>
.paragraphDiv {
  padding: 0px;
  max-width: 550px;
  text-align: left;
  line-height: 1.75;
  margin: 32px 0px;
  font-family: Nunito;
  letter-spacing: 2px;
  color: black;
  font-size: 14px;
  font-weight: lighter;
}
.outerContainer {
  width: 100%;
}
.innerContainer {
  padding: 1px 20px;
  max-width: 550px;
  margin: 0px auto 12px;
  text-align: center;
}
h1,
h2 {
  font-family: "Pacifico", cursive;
}
p {
  text-align: justify;
}
</style>