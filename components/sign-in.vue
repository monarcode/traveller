<template>
  <div class="min-h-[500px]">
    <div class="p-5 bg-primary/10">
      <h2 class="text-2xl font-semibold">Good to see you again!</h2>
      <p>Please enter your account details below</p>
    </div>

    <form
      @submit.prevent="
        signIn('credentials', {
          email,
          password,
        })
      "
      class="p-5 space-y-6"
    >
      <input-text
        v-model="email"
        label="Email address"
        name="login-email-address"
        full-width
      />
      <input-password
        v-model="password"
        label="Password"
        name="login-password"
        full-width
      />

      <div class="flex items-center justify-between">
        <div class="form-control">
          <label class="justify-start gap-4 cursor-pointer label">
            <input type="checkbox" class="border-gray-500 checkbox" />
            <span class="text-gray-500 label-text">Remember me</span>
          </label>
        </div>

        <p>Forgot password?</p>
      </div>

      <input-btn fullwidth>Sign in</input-btn>
    </form>
  </div>
</template>

<script setup>
import { isAxiosError } from 'axios'
import { useToast } from 'vue-toast-notification'

const { signIn } = useSession()
const $toast = useToast()

const email = ref('')
const password = ref('')

async function doLogin() {
  try {
    const { error } = await signIn('credentials', {
      email: email.value,
      password: password.value,
      redirect: false,
    })

    if (error) {
      console.log(error)
    } else {
      $toast.success('Welcome back!')
    }
  } catch (e) {
    console.log(error)
    if (isAxiosError(error)) {
      $toast.error(error.response?.data.message)
    } else {
      $toast.error(err.message)
    }
  }
}
</script>
