<template>
<div>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo">
        <i class="fab fa-twitch"></i>
      </div>
      <div class="navbar__item">Following</div>
      <div class="navbar__item">Browse</div>
      <div class="navbar__item text__desktop">Get Desktop</div>
      <div class="navbar__item text__prime">Try Prime</div>
      <div class="navbar__icon">
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="navbar__search">
        <i class="fas fa-search navbar__search-icon"></i>
        <input type="text" class="navbar__searchbar" placeholder="Search">
      </div>
      <div class="navbar__left">

      </div>
      <div class="navbar__icon navbar__icon--crown">
        <div class="counter">
          3
        </div>
        <i class="fas fa-crown"></i>
      </div>
      <div class="navbar__icon">
        <i class="fas fa-bell"></i>
        <div class="counter">
          2
        </div>
      </div>
      <div class="navbar__bits">
        <div class="dropdown">
          <i class="fas fa-gem"></i>
          <span class="navbar__bits-text">
          Get Bits
        </span>
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
      <div class="navbar__profile">
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/sparlos-profile_image-885a2096e30cffab-300x300.jpeg" alt="" class="navbar__profile-image">
        <div class="navbar__profile-status"></div>
        <div class="navbar__profile-text">
          <span class="navbar__profile-text--user">
          Sparlos
        </span>
          <span class="navbar__profile-text--description">
          Away
        </span>
        </div>
        <i class="fas fa-caret-down"></i>
      </div>
    </div>
  </div>

  <div class="content">
    
    <div class="sidebar">
      <div class="sidebar__title">
        <span class="sidebar__title-text">
          Followed Channels
        </span>
          <span class="sidebar__title-icon">
          <i class="fas fa-heart"></i>
        </span>
      </div>
      <hr class="sidebar__hr">
      <div class="sidebar__users">
        <div v-for="(user, index) in users" :id="user.id" :key="index" class="sidebar__user">
          <div class="sidebar__user-image">
            <img :src="user.imageLink" alt="">
          </div>
          <div class="sidebar__user-text">
            <div class="sidebar__user-username">
              {{user.username}}
            </div>
            <div class="sidebar__user-playing">
              {{user.playingDisplay}}
            </div>
            <div class="sidebar__user-viewers">
              <div class="record-button"></div>
              {{user.viewers}}
            </div>
          </div>
        </div>
      </div>
      
      <div class="sidebar__search">
        <div class="sidebar__search-bar">
          <div class="sidebar__search-icon">
            <i class="fas fa-search"></i>
          </div>
          <input class="sidebar__search-input" type="text" placeholder="Search to Add Friends">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TwitchNavTest',
  data() {
    return {
      users: []
    }
  },
	methods: {
		
	},
	mounted: function() {
		let self = this;
		let faker =  self.$faker();
		// Generate array of fake users
		for(let i=0;i<15; i++) {
			//generate random user
			let user = {
				imageLink: faker.internet.avatar(),
				username: faker.internet.userName(),
				playing: faker.company.companyName(),
				playingDisplay: null,
				viewers: 100,
				id: null
			}
			user.id = user.username;
			if(user.playing.length > 20) {
				user.playingDisplay = user.playing.slice(0,20) + "...";
			} else {
				user.playingDisplay = user.playing;
			}
			self.users.push(user);
		}

		console.log('fuckMyLife');
	}
}
</script>

<style>
/* 
carousel animation is a little jank, might fix it at some point. Most buttons and links do not do anything; this was done for layout recreation, not functionailty :) Hope you like it, I learned a whole lot in the process!
*/

$color-primary: #4b367c;
$color-inactive: #d2c9e8;
$color-hovered: hsla(0, 0%, 100%, 0.05);
$color-hovered-primary: #a991d4;
$color-grey: grey;
$color-description: #898395;
$color-black: #19171c;
$color-grey-light: hsla(0, 0%, 100%, 0.05);
$color-white: #fff;

.html,
body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

input {
	outline: none;
	background: none;
	border: none;
	padding-left: 10px;
}

a {
	color: inherit;
}

.content {
	/*display: flex;*/
}

// =========== NAVBAR ===========

.navbar {
	width: 100vw;
	background-color: $color-primary;
	height: 50px;
	position: fixed;
	z-index: 100;
	color: $color-white;

	&__container {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		margin: 0 1rem;
		width: 98%;
		white-space: nowrap;
		display: flex;
		align-items: center;
	}

	&__logo {
		margin-right: 1.4rem;
		font-size: 1.7rem;
	}

	&__item {
		margin-right: 1.4rem;
		font-size: 0.9rem;
		color: $color-inactive;

		&:hover {
			color: $color-white;
			text-decoration: underline;
			cursor: pointer;
		}
	}

	&__icon {
		margin-right: 1rem;
		padding: 0.5rem;
		position: relative;

		& .counter {
			padding: 2px 4px;
			position: absolute;
			background-color: red;
			border-radius: 2px;
			top: 0;
			right: 0;
			font-size: 0.6rem;
			font-weight: 600;

			display: flex;
			justify-content: center;
			align-items: center;
		}

		&:hover {
			background-color: $color-hovered;
			cursor: pointer;
			border-radius: 5px;
		}

		&--crown {
			margin-left: auto;
		}
	}

	&__search {
		margin-right: 1.5rem;
		display: flex;
		flex: 0 1 22rem;

		&bar {
			height: 1.7rem;
			border-radius: 4px;
			background-color: $color-white;
			padding-left: 2rem;
			width: 100%;
			font-size: 0.9rem;

			&::placeholder {
				color: $color-inactive;
			}
		}

		&-icon {
			position: absolute;
			color: $color-grey;
			top: 50%;
			transform: translateY(-50%);
			margin-left: 10px;
		}
	}

	&__bits {
		flex: 0 0 7rem;
		margin-right: 0.3rem;
		border: 1px solid $color-white;
		border-radius: 5px;
		position: relative;
		padding: 7px 0px;
		font-size: 0.95rem;

		&-text {
			font-size: 0.75rem;
		}

		&:hover {
			cursor: pointer;
			background-color: $color-hovered;
		}
	}

	&__profile {
		flex: 0 0 14rem;
		display: flex;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-right: 0.5rem;
		align-items: center;
		position: relative;

		&:hover {
			background-color: $color-hovered;
			cursor: pointer;
		}

		&-status {
			width: 7px;
			height: 7px;
			position: absolute;
			background-color: orange;
			left: 2.5rem;
			bottom: 5px;
		}

		&-text {
			margin-left: 0.5rem;
			flex: 0 1 50%;
			display: flex;
			flex-wrap: wrap;
			font-size: 0.8rem;

			&--user {
				flex: 0 1 100%;
			}

			&--description {
				margin-top: 2px;
				font-size: 0.6rem;
			}
		}

		&-image {
			height: 2rem;
			border-radius: 5px;
			margin-left: 10px;
		}

		& i {
			margin-left: auto;
		}
	}
}

.dropdown {
	display: flex;
	flex: 1 0 auto;
	justify-content: space-around;
	align-items: center;
}

// ============ SIDEBAR ================

.sidebar {
	height: calc(100vh - 50px - 3.5rem);
	width: 15rem;
	overflow: scroll;
	background-color: $color-black;
	color: $color-inactive;
	position: fixed;
	top: 50px;
	padding-bottom: 3.5rem;
	flex: 0 0 auto;

	&__title {
		font-size: 0.9rem;
		margin-left: 10px;
		margin-top: 1.1rem;
		margin-bottom: 0.8rem;

		&-icon {
			display: none;
		}
	}

	&__user {
		display: flex;
		flex: 0 0 auto;
		padding: 5px 8px;
		margin: 0 auto;
		height: 30px;
		position: relative;

		&:hover {
			background-color: $color-hovered;
			cursor: pointer;

			& .sidebar__user-text {
				color: $color-white;
			}
		}

		&-image {
			height: 100%;
			display: inline-block;

			& img {
				height: 100%;
				border-radius: 3px;
			}
		}

		&-text {
			flex: 0 1 100%;
			display: flex;
			flex-wrap: wrap;
			color: $color-description;
			margin-left: 10px;
		}

		&-username {
			flex: 0 0 100%;
			font-size: 0.9rem;
			margin-bottom: 2px;
			color: $color-white;
		}

		&-playing {
			font-size: 0.75rem;
			white-space: nowrap;
			flex: 0 0 80%;
			overflow: hidden;
		}

		&-viewers {
			font-size: 0.75rem;
			margin-left: auto;
			display: flex;
			align-items: center;
		}
	}

	&__hr {
		width: 95%;
		border: 0.5px solid $color-grey-light;
	}

	&__search {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 15rem;
		height: 3rem;
		border-top: 1px solid $color-grey-light;
		background-color: $color-black;
		display: flex;
		justify-content: center;
		align-items: center;

		&-bar {
			width: 0;
			flex: 0 0 92%;
			height: 28px;
			background-color: darken($color-black, 5%);
			border: 1px solid darken($color-primary, 5%);
			border-radius: 3px;
			font-size: 0.8rem;
			display: flex;
			align-items: center;
		}

		&-icon {
			color: $color-description;
			margin-left: 7px;
			font-size: 1rem;
		}

		&-input {
			color: $color-description;
			margin: 0;
			font-size: 0.75rem;
		}
	}
}

.record-button {
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background-color: red;
	margin-right: 4px;
}

// ============ PRIME BANNER ==============

.prime-banner {
	position: fixed;
	width: calc(100vw - 15rem);
	margin-left: 15rem;
	height: 13px;
	top: 50px;
	z-index: 100;
	/*flex: 1 1 auto;*/
	display: flex;
	align-items: center;
	padding: 1rem 0;
	font-size: 0.75rem;
	background-color: #0e9bd8;

	& i {
		color: $color-white;
		margin-right: 8px;
	}

	&__prime {
		font-weight: 700;
		white-space: nowrap;
		flex: 0 1 20%;
		margin-right: 10px;
		text-align: right;
	}
	
	&__text {
		flex: 0 1 60%;
	}

	&__trial {
		font-weight: 700;
		white-space: nowrap;
		flex: 0 1 20%;
	}
}

.main-content {
	position: relative;
	width: calc(100vw - 15rem);
	margin-left: 15rem;
	padding-top: 92px;
	padding-bottom: 3rem;
	display: flex;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;
}

// ========== VIDEO CAROUSEL ============
.carousel {
	margin-top: -.4rem;
	flex: 0 1 100%;
	display: flex;
	justify-content: center;
	height: 23rem;
	position: relative;
	align-items: center;
	justify-content: space-evenly;

	&__chevron {
		font-size: 1.6rem;
		color: $color-description;
		padding: 1rem 1.4rem;
		border-radius: 50%;

		&:hover {
			background-color: lighten($color-description, 30%);
			cursor: pointer;
		}
	}

	&__content {
		flex: 0 0 80%;
		height: 100%;
		position: relative;
	}

	&__overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
		height: 90%;
		border-radius: 5px;
		color: $color-white;
		z-index: 2;
		
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		
		& i {
			&:hover {
				cursor: pointer;
				color: $color-hovered-primary;
			}
		}
		
		&-top {
			flex: 0 1 100%;
			display: flex;
		}
		
		&-picture {
			flex: 0 0 16%;
			
			& img {
				height: 70px;
			}
		}
		
		&-text {
			flex: 0 0 70%;
			font-size: .9rem;
		}
		
		&-name {
			font-weight: 700;
			font-size: 1.2rem;
		}
		
		&-title {
			margin-top: 2px;
		}
		
		&-views {
			margin-top: 2px;
		}
		
		&-live {
			flex: 0 0 15%;
			font-size: 16px;
			text-align: right;
			
			& .record-button {
				height: 11px;
				width: 11px;
				display: inline-block;
				margin-right: 0;
			}
			
			& .u-inline-text {
				display: inline-block;
			}
		}
		
		&-bottom {
			flex: 0 1 100%;
			display: flex;
		}
		
		&-icon {
			font-size: 1.2rem;
			&--volume {
				margin-left: 1rem;
			}
			&--settings {
				margin-left: auto;
				margin-right: 1rem;
			}
			&--fullscreen {
				transform: rotate(-45deg);
			}
		}

		& .big-play {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: $color-white;
			font-size: 4rem;

			&:hover {
				cursor: pointer;
				color: $color-hovered-primary;
			}
		}
	}

	&__video {
		width: 550px;
		height: 310px;
		position: absolute;
		transition: all 0.5s;
		
		& .inactive {
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.6);
			border-radius: 5px;
			transition: all .2s ease-out;
			
			& + img {
				transition: all .2s ease-out;
			}
			
			&:hover {
				cursor: pointer;
				transform: scale(1.02);
				background-color: rgba(0, 0, 0, 0.4);
			}
			
			&:hover + img {
				transform: scale(1.02);
			}
		}

		&-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 1);
			z-index: 3;
		}

		& iframe {
			z-index: 100;
		}

		&.main {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 3;
			
			& .inactive {
				
				& + img {
					transition: none;
				}

				&:hover {
					cursor: initial;
					transform: scale(1);
				background-color: rgba(0, 0, 0, 0.6);
				}

				&:hover + img {
					transform: scale(1);
				}
			}
			
		}

		&.hidden {
			display: none;
		}

		&.secondary {
			width: 467.5px;
			height: 263.5px;
			z-index: 2;
			&-left {
				top: 50%;
				left: 20%;
				transform: translate(-20%, -50%);
			}
			&-right {
				top: 50%;
				left: 80%;
				transform: translate(-80%, -50%);
			}
		}

		&.tertiary {
			width: 385px;
			height: 217px;
			z-index: 1;
			&-left {
				top: 50%;
				left: 0;
				transform: translate(0, -50%);
			}
			&-right {
				top: 50%;
				left: 100%;
				transform: translate(-100%, -50%);
			}
		}

		&-picture {
			width: 100%;
			height: 100%;
			border-radius: 5px;
		}
	}
}

// ============ VIDEO ROW ==============

.video-row {
	flex: 0 1 95%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	
	&__title {
		flex: 0 1 100%;
		margin-bottom: 10px;
	}
	
	&__item {
		position: relative;
		flex: 0 1 32%;
	}
}

// ======== RECOMMENDED VIDEO ==========

.recommended-video {
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	
	&__thumbnail {
		flex: 0 1 100%;
		position: relative;
		
		&:hover {
			cursor: pointer;
		}
		
		& img {
			width: 100%;
			height: 100%;
			border-radius: 4px;
		}
	}
	
	
	&__overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
		color: $color-white;
		background-image: linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.9));
		
		&-live {
			background-color: rgba(0,0,0,0.6);
			border-radius: 2px;
			position: absolute;
			top: 6%;
			left: 3%;
			width: 50px;
			height: 17px;
			font-size: 12px;
			
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			
			& .record-button {
				width: 8px;
				height: 8px;
			}
		}
		
		&-viewers {
			position: absolute;
			bottom: 5%;
			left: 3%;
			font-size: 12px;
		}
	}
	
	&__info {
		font-size: 12px;
		flex: 0 1 100%;
		display: flex;
		margin-top: 5px;
		
		&-content {
			flex: 0 1 80%;
		}
	}
	
	&__channel-pic {
		flex: 0 1 15%;
		position: relative;
		
		img {
			height: 40px;
			border-radius: 2px;
		}
	}
	
	&__title {
		font-size: 14px;
	}
	
	&__channel {
		margin-top: 5px;
		color: rgb(50,47,55);
	}
	
	&__game {
		margin-top: 5px;
		color: rgb(50,47,55);
	}
	
	&__tags {
		margin-top: 5px;
		display: flex;
	}
	&__menu {
		flex: 0 1 5%;
		
		& i {
			margin-top: 6px;
		}
	}
}

// ============== TAG ==================

.tag {
	margin-right: 5px;
	font-size: 11px;
	border: 1px solid rgb(218, 216, 222);
	padding: 3px;
	border-radius: 3px;
	
	&:hover {
		cursor: pointer;
		background-color: rgb(241, 238, 241);
		color: red;
		color: rgb(100,65,164);
	}
}

// ========== CATEGORY ROW =============

.category-row {
	flex: 0 1 95%;
	display: flex;
	margin-top: 25px;
	flex-wrap: wrap;
	
	&__title {
		flex: 0 1 100%;
	}
	&__content {
		flex: 0 1 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		position: relative;
	}
	
}

.boxart {
	color: inherit;
	flex: 0 1 16%;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	
	&__image {
		flex: 0 1 100%;
		position: relative;
		
		&:hover {
			cursor: pointer;
			color: $color-primary;
		}
		
		&:hover + .boxart__content .boxart__title {
			color: $color-primary;
		}
		
		& img {
			border-radius: 5px;
			width: 100%;
		}
	}
	
	&__content {
		flex: 0 1 100%;
		display: flex;
		margin-top: 5px;
	}
	
	&__text {
		flex: 0 1 95%;
		font-size: 12px;
	}
	
	&__title {
		font-size: 14px;
		
		&:hover {
			cursor: pointer;
			color: $color-primary;
		}
	}
	
	&__viewers {
		margin-top: 5px;
		color: $color-description;
	}
	
	&__tags {
		margin-top: 5px;
		display: flex;
	}
	
	&__menu {
		flex: 0 1 5%;
		font-size: 12px;
		
		& i {
			margin-top: 5px;
		}
	}
}

// ========= UTILITY CLASSES ===========

.u-bold {
	font-weight: 700;
}

.u-purple-link {
	text-decoration: none;
	color: $color-primary;
	font-weight: 700;
	
	&:hover {
		text-decoration: underline;
	}
}

.u-purple-hover {
	&:hover {
		text-decoration: underline;
		color: $color-primary;	
		cursor: pointer;
	}
}

// ============ MESSAGES ===============

.messages {
	position: fixed;
	bottom: 0;
	right: 10px;
	width: 40px;
	height: 35px;
	border: 1px solid rgb(218,216,222);
	border-radius: 3px;
	background-color: #faf9fa;
	z-index: 2000;
	display: flex;
	justify-content: center;
	align-items: center;
	
	&:hover {
		cursor: pointer;
		background-color: #f1eef1;
	}
	
	& i {
		color: lighten($color-primary, 10%);
	}
}


// =========== ANIMATIONS ==============

// ========== MEDIA QUERIES ============

@media only screen and (max-width: 1150px) {
	.navbar {
		&__search {
			&bar {
				display: none;
			}

			&-icon {
				color: $color-white;
				margin-left: auto;
				position: relative;
				top: 0;
				transform: none;
				padding: 0.5rem;

				&:hover {
					background-color: $color-hovered;
					cursor: pointer;
					border-radius: 5px;
				}
			}
		}
	}

	.text {
		&__desktop {
			display: none;
		}
	}
	
	.main-content, .prime-banner {
		width: calc(100vw - 3rem);
		margin-left: 3rem;
	}
	
	.video-row__item {
		flex: 0 1 49%;
		
		&:last-of-type {
			display: none;
		}
	}
	
	.boxart {
		flex: 0 1 24%;
		
		&:last-of-type {
			display: none;
		}
		
		&:nth-last-of-type(2) {
			display: none;
		}
	}

	.sidebar {
		width: 3rem;
		padding-bottom: 0;
		height: calc(100vh - 50px);
		&__title {
			margin-left: 0;
			margin-top: 1.2rem;
			display: flex;
			justify-content: center;
			&-text {
				display: none;
			}
			&-icon {
				display: inline-block;
				color: $color-description;
				font-size: 1rem;
			}
		}

		&__user {
			display: flex;
			justify-content: center;
			&-text {
				display: none;
			}
		}

		&__search {
			display: none;
		}
	}
}

@media only screen and (max-width: 870px) {
	.text {
		&__prime {
			display: none;
		}
	}
}

@media only screen and (max-width: 810px) {
	.navbar {
		&__profile {
			flex: none;
			&-text {
				&--user {
					display: none;
				}
				&--description {
					display: none;
				}
			}

			& i {
				margin: auto;
			}
		}
	}
}
</style>