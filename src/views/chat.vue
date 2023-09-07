<template>
	<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center form_container">
					<h2>This app was made by {{ getUser(73833).name }}</h2>
					<form id="myForm" @submit="submitData">
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" v-model="email" name="" class="form-control input_user" value=""
								placeholder="email">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" v-model="password" class="form-control input_pass" value=""
								placeholder="password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
						<div class="d-flex justify-content-center mt-3 login_container">
							<button type="submit" name="button" class="btn login_btn">Login</button>
						</div>
					</form>
				</div>
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-center mt-3 login_container">
				<button type="button" name="button" class="btn login_btn" @click="getMsgs">Messages</button>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card">
				<div class="card-header">Online Users</div>
				<div v-for="(user, index) in getUsers" :key="user.id">
					{{user.name}}
					<!-- <span v-if="$route.params.user.id == user.id">(you)</span> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	let Pusher = require("pusher-js");
	export default {
		data() {
			return {
				email: null,
				password: null,
				token: null,
				users: [],
				pusher: null,
				channel: null
			}
		},
		mounted() {

		},
		created() {

		},
		computed: {
			currentUser() {
				return this.$store.state.users[0];
			},
			getUser() {
				return this.$store.getters.getUserById;
			}
		},
		methods: {
			submitData(e) {
				e.preventDefault();
				let data = {
					"email": this.email,
					"password": this.password
				};
				console.log(data);
				//axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:8080';
				axios.post("https://zementalist.azurewebsites.net/loginAPI",
					data).then(response => {
					this.token = response.data.access_token;
				}).then(() => {
					this.connectPusher();
				})
			},
			getMsgs(e) {
				e.preventDefault();

				console.log(this.token);
				//axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
				axios.get("https://zementalist.azurewebsites.net/messages", {
					headers: {
						'Content-Type': 'application/json',
						"Authorization": `Bearer ` + this.token
					},
				}).then(response => {
					console.log(response);
				})
			},
			connectPusher() {
				this.pusher = new Pusher('550e330b9283050b4c09', {
					cluster: 'mt1',
					authEndpoint: 'https://zementalist.azurewebsites.net/broadcasting/auth',
					auth: {
						headers: {
							"Authorization": `Bearer ` + this.token
						}
					}
				});
				this.channel = this.pusher.subscribe('presence-mylolchannel');
				let that = this;
				this.channel.bind("pusher:subscription_succeeded", function (members) {
					members.each(member => {
						that.users.push(member.info)
					})
				})
				this.channel.bind("pusher:member_added", function (member) {
					that.users.push(member.info);
				})
				this.channel.bind("pusher:member_removed", function (member) {
					that.users.splice(that.users.indexOf(member.info));
				})
			}
		}
	}
</script>

<style>

</style>