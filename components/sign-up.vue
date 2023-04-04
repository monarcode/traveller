<template>
  <div class="grid w-full grid-cols-2 h-[500px]">
    <form @submit.prevent="doRegister" class="p-8 space-y-5">
      <div class="flex items-center gap-5">
        <input-text
          v-model="first_name"
          name="reg-first-name"
          label="First name"
        />
        <input-text
          v-model="last_name"
          name="reg-last-name"
          label="Last name"
        />
      </div>
      <input-text
        v-model="email"
        label="Email"
        name="reg-email"
        type="email"
        full-width
      />
      <input-text
        v-model="phone"
        label="Phone"
        name="reg-phone"
        type="phone"
        full-width
      />

      <div class="grid grid-cols-2 gap-5">
        <input-password
          v-model="password"
          label="Password"
          name="reg-password"
          full-width
        />
        <input-password
          v-model="password_confirmation"
          label="Confirm Password"
          name="reg-password-conf"
          full-width
        />
      </div>

      <div class="form-control">
        <label class="justify-start gap-4 cursor-pointer label">
          <input type="checkbox" class="border-gray-500 checkbox" />
          <span class="text-gray-500 label-text">Remember me</span>
        </label>
      </div>

      <input-btn :disabled="loading" :loading="loading" fullwidth
        >Sign Up</input-btn
      >
    </form>

    <div class="p-6 bg-primary/10">
      <h2 class="text-3xl font-semibold">Sign up with BCF</h2>
      <p class="mt-2 text-gray-500">
        Already have an account? <span class="font-medium">Log in</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { isAxiosError } from 'axios'
import axiosInstance from '~~/libs/axios'

const emit = defineEmits(['close'])

const first_name = ref('')
const last_name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const phone = ref('')
const loading = ref(false)
const { signIn } = useSession()
const { $toast } = useNuxtApp()

async function doRegister() {
  loading.value = true

  const data = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
  }

  const vals = Object.values(data)

  if (vals.some((e) => e.length === 0)) {
    return $toast.warning('Please provide all values')
  }

  try {
    const res = await axiosInstance.post('/customer/auth/register', data)

    // console.log(res.data)

    if (res && res.data?.success) {
      const { error } = await signIn('credentials', {
        email: email.value,
        password: password.value,
        redirect: false,
      })

      if (error) {
        console.log(error)
      } else {
        $toast.success('Account Registration Successful')
        emit('close')
      }
    } else {
      console.log(res.data)
    }
  } catch (error) {
    console.log(error)
    if (isAxiosError(error)) {
      $toast.error(error.response?.data.message)
    } else {
      $toast.error(error.message)
    }
  }

  loading.value = false
}
</script>
