<template>
       <header>
 <nav class="navbar">
     <img class="logo" src="logo.png" alt="cleanup">
     <div><a href="" class="toggle-button">
         <span class="bar"></span>
         <span class="bar"></span>
         <span class="bar"></span>
     </a></div>
     <div class="navbar-links">
    <ul> 
        <li><a href="#About">ABOUT</a></li>
        <li><a href="#SM"> SOCIAL MEDIA </a></li>
        <li><router-link to="BecomeAcontributer"> BECOME A CONTRIBUTE</router-link></li>
        <li><a href="#contact">CONTACT</a></li>
    </ul>
    </div>
        </nav>
</header>
</template>

<script>
export default {
 name:'AppHeader'
}
</script>

<style>

</style>