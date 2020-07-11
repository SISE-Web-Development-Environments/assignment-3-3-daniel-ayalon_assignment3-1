<template>
  <div class="container">
    <h1 class="title">Register</h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">


<!-----------------------------------------------------------------------User Name-------------------------------------------------------------------------------->
      <b-form-group id="input-group-username" label-cols-sm="3" label="Username:" label-for="username">
        <b-form-input id="username" v-model="$v.form.username.$model" type="text" placeholder="Enter user name..." :state="validateState('username')" ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">Username is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">Username length should be between 3-8 characters long</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">Username can include only letters</b-form-invalid-feedback>
      </b-form-group>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------------->






<!------------------------------------------------------------------------First Name------------------------------------------------------------------------------>
      <b-form-group id="input-group-firstName" label-cols-sm="3" label="First Name:" label-for="firstName">
        <b-form-input id="firstName" v-model="$v.form.firstName.$model" type="text" :state="validateState('firstName')" placeholder="Enter first name..."></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.firstName.required">First name is required</b-form-invalid-feedback>
      </b-form-group>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------------->





<!-------------------------------------------------------------------------Last Name------------------------------------------------------------------------------->
      <b-form-group id="input-group-lastName" label-cols-sm="3" label="Last Name:" label-for="lastName">
        <b-form-input id="lastName" v-model="$v.form.lastName.$model" type="text" :state="validateState('lastName')" placeholder="Enter last name..."> </b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.lastName.required">Last name is required</b-form-invalid-feedback>
      </b-form-group>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------------->






<!-----------------------------------------------------------------------------Email------------------------------------------------------------------------------>

      <b-form-group id="input-group-email" label-cols-sm="3" label="Email:" label-for="email">
        <b-form-input id="email" v-model="$v.form.email.$model" type="email" :state="validateState('email')" placeholder="Enter email..."></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.email.required">Email is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.email.email">Email must be valid</b-form-invalid-feedback>
      </b-form-group>
<!----------------------------------------------------------------------------------------------------------------------------------------------------------------->






<!----------------------------------------------------------------------------Country------------------------------------------------------------------------------>

      <b-form-group id="input-group-country" label-cols-sm="3" label="Country:" label-for="country">
        <b-form-select id="country" v-model="$v.form.country.$model" :options="countries" :state="validateState('country')"></b-form-select>
        <b-form-invalid-feedback>Country is required</b-form-invalid-feedback>
      </b-form-group>
<!------------------------------------------------------------------------------------------------------------------------------------------------------------------>







<!-- ------------------------------------------------------------------------ Password------------------------------------------------------------------------------>
      <b-form-group id="input-group-Password" label-cols-sm="3" label="Password:" label-for="password">
        <b-form-input id="password" type="password" placeholder="Enter strong password..." v-model="$v.form.password.$model" :state="validateState('password')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">Password is required</b-form-invalid-feedback>
        <b-form-text v-else-if="$v.form.password.$error" text-variant="info">Your password should be<strong> strong</strong>.<br/></b-form-text>
        <b-form-invalid-feedback v-if="$v.form.password.required && !$v.form.password.length">Have length between 5-10 characters long</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.password.special">
          Your password should have at least one number  and one special character
        </b-form-invalid-feedback> 
      </b-form-group>
<!-------------------------------------------------------------------------------------------------------------------------------------------------------------------->






<!-----------------------------------------------------------------------------Confirm Password----------------------------------------------------------------------->
      <b-form-group id="input-group-confirmPassword" label-cols-sm="3" label="Confirm Password:" label-for="confirmPassword">
        <b-form-input id="confirmPassword" 
                      type="password" 
                      placeholder="Enetr again same password..." 
                      v-model="$v.form.confirmPassword.$model" 
                      :state="validateState('confirmPassword')"
        >
        </b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.confirmPassword.required">Password confirmation is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.confirmPassword.sameAsPassword">The confirmed password is not equal to the original password</b-form-invalid-feedback>
      </b-form-group>
<!----------------------------------------------------------------------------------------------------------------------------------------------------------------------->





<!--------------------------------------------------------------------------------Image----------------------------------------------------------------------------------->

      <b-form-group id="input-group-Image" label-cols-sm="3" label="Image:" label-for="image">
        <b-form-input
          id="image"
          type="image"
          placeholder="Enter"
          v-model="$v.form.image.$model"
          :state="validateState('image')"
        ></b-form-input>
      </b-form-group>
<!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------->


      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button type="submit" variant="primary" style="width:250px;" class="ml-5 w-75">Register</b-button>
      <div class="mt-2">
        You have an account already?
        <router-link to="login">Log in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >Register failed: {{ form.submitError }}</b-alert>
 
  </div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmPassword: "",
        email: "",
        image:"",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: u => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      country: {
        required
      },
      password: {
        required,
        length: p => minLength(5)(p) && maxLength(10)(p),
        special: u =>
          new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])").test(u)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      firstName: {
        required,
        alpha
      },
      lastName: {
        required,
        alpha
      },
      email: {
        required,
        email
      },
      image: {

      }
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },

    async Register() {
      try {
        const response = await this.axios.post(
          "http://localhost:3000/auth/register",
          {
            username: this.form.username,
            password: this.form.password,
            confirmPassword: this.form.confirmPassword,
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            country: this.form.country,
            email: this.form.email,
            image: this.form.image
          }
        );
        this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmPassword: "",
        email: "",
        image: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 500px;
  text-align: center;
}
</style>
