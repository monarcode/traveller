<template>
  <div>
    <header
      class="bg-tm1-header bg-no-repeat bg-cover h-[600px] relative grid place-items-center"
    >
      <div>
        <h1 class="font-semibold text-white capitalize text-7xl">
          to travel is to live
        </h1>
        <p class="mt-4 text-2xl text-center text-white">
          Find cheap flights....
        </p>
      </div>

      <!-- flight search -->
      <div
        class="container absolute -bottom-1/2 -translate-y-1/2 min-h-[250px] inset-x-0 rounded-3xl p-6 bg-white shadow-2xl shadow-black/10 flex flex-col gap-8 justify-evenly"
      >
        <!-- selectors -->
        <div>
          <div class="flex items-center gap-4">
            <button
              class="px-5 py-3 text-gray-800 rounded-full"
              :class="[
                selectedFlightType === 'oneway' &&
                  'bg-secondary !text-primary font-medium',
              ]"
            >
              One-Way
            </button>
            <button
              class="px-5 py-3 text-gray-800 rounded-full"
              :class="[
                selectedFlightType === 'roundtrip' &&
                  'bg-secondary !text-primary font-medium',
              ]"
            >
              Round trip
            </button>
            <button
              class="px-5 py-3 text-gray-800 rounded-full"
              :class="[
                selectedFlightType === 'multicity' &&
                  'bg-secondary !text-primary font-medium',
              ]"
            >
              Multi-City
            </button>
          </div>
        </div>

        <!-- inputs -->
        <div class="grid grid-cols-4 gap-2.5 relative">
          <div class="col-span-2 grid grid-cols-2 gap-2.5">
            <input-text :label="'From'" :name="'from'" full-width />
            <input-text :label="'To'" :name="'to'" full-width />
          </div>
          <input-text :label="'To'" :name="'to'" full-width />
          <input-text :label="'To'" :name="'to'" full-width />

          <button class="absolute z-10 w-8 -translate-x-1/2 top-3 left-1/4">
            <img
              src="~/assets/img/flight-swap.svg"
              alt="swap"
              class="block object-cover w-full h-full"
            />
          </button>
        </div>

        <!--  -->
        <div class="flex items-center justify-between">
          <div class="form-control">
            <label class="gap-6 cursor-pointer label">
              <span class="text-base text-gray-800 label-text"
                >Non-Stops Only</span
              >
              <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
          </div>

          <button class="h-16 px-6 btn btn-primary">Search Flights</button>
        </div>
      </div>
    </header>

    <section class="mt-[300px] bg-secondary min-h-[400px] flex items-center">
      <div class="container grid grid-cols-3 gap-6 py-8">
        <div class="flex gap-4">
          <div
            class="grid w-8 h-8 rounded-full bg-primary/10 place-items-center text-primary"
          >
            <p>1</p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="font-semibold">Coronavirus information</h3>
            <p class="md:w-1/2">
              Read about how the new travel restrictions might affect your trip.
            </p>
            <input-btn>Learn more</input-btn>
          </div>
        </div>

        <div class="flex gap-4">
          <div
            class="grid w-8 h-8 rounded-full bg-primary/10 place-items-center text-primary"
          >
            <p>2</p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="font-semibold">Coronavirus information</h3>
            <p class="md:w-1/2">
              Read about how the new travel restrictions might affect your trip.
            </p>
            <input-btn>Learn more</input-btn>
          </div>
        </div>

        <div class="flex gap-4">
          <div
            class="grid w-8 h-8 rounded-full bg-primary/10 place-items-center text-primary"
          >
            <p>3</p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="font-semibold">Coronavirus information</h3>
            <p class="md:w-1/2">
              Read about how the new travel restrictions might affect your trip.
            </p>
            <input-btn>Learn more</input-btn>
          </div>
        </div>
      </div>
    </section>

    <!-- top flights -->
    <section class="container my-28">
      <h2 class="text-4xl font-semibold md:text-6xl">Top Flight Deals</h2>

      <div class="grid gap-4 mt-6 md:grid-cols-3">
        <!-- flight card -->
        <div
          class="h-[320px] bg-[url(~/assets/img/lagos.webp)] bg-cover p-6 overflow-hidden rounded-xl flex flex-col"
        >
          <div class="flex items-center gap-3 text-white">
            <span>Lagos</span>
            <img src="~/assets/img/small-arrow.svg" alt="arrow" />
            <span>Abuja</span>
          </div>

          <div class="mt-auto text-white">
            <p class="text-3xl font-medium">₦ 123,780.00</p>
            <p>July 23, 2022 - Aug 31, 2022</p>
          </div>
        </div>

        <!-- flight card -->
        <div
          class="h-[320px] bg-[url(~/assets/img/abuja.webp)] bg-cover p-6 overflow-hidden rounded-xl flex flex-col"
        >
          <div class="flex items-center gap-3 text-white">
            <span>Lagos</span>
            <img src="~/assets/img/small-arrow.svg" alt="arrow" />
            <span>Abuja</span>
          </div>

          <div class="mt-auto text-white">
            <p class="text-3xl font-medium">₦ 123,780.00</p>
            <p>July 23, 2022 - Aug 31, 2022</p>
          </div>
        </div>

        <!-- flight card -->
        <div
          class="h-[320px] bg-[url(~/assets/img/london.webp)] bg-cover p-6 overflow-hidden rounded-xl flex flex-col"
        >
          <div class="flex items-center gap-3 text-white">
            <span>Lagos</span>
            <img src="~/assets/img/small-arrow.svg" alt="arrow" />
            <span>London</span>
          </div>

          <div class="mt-auto text-white">
            <p class="text-3xl font-medium">₦ 123,780.00</p>
            <p>July 23, 2022 - Aug 31, 2022</p>
          </div>
        </div>
      </div>

      <div class="grid gap-4 mt-4 md:grid-cols-2">
        <div
          class="h-[320px] bg-[url(~/assets/img/akure.webp)] bg-cover p-6 overflow-hidden rounded-xl flex flex-col"
        >
          <div class="flex items-center gap-3 text-white">
            <span>Lagos</span>
            <img src="~/assets/img/small-arrow.svg" alt="arrow" />
            <span>Akure</span>
          </div>

          <div class="mt-auto text-white">
            <p class="text-3xl font-medium">₦ 123,780.00</p>
            <p>July 23, 2022 - Aug 31, 2022</p>
          </div>
        </div>

        <div
          class="h-[320px] bg-[url(~/assets/img/dubai.webp)] bg-cover p-6 overflow-hidden rounded-xl flex flex-col"
        >
          <div class="flex items-center gap-3 text-white">
            <span>Dubai</span>
            <img src="~/assets/img/small-arrow.svg" alt="arrow" />
            <span>Seychelles</span>
          </div>

          <div class="mt-auto text-white">
            <p class="text-3xl font-medium">₦ 2,238,780.00</p>
            <p>Sept 05, 2022 - Dec 04, 2022</p>
          </div>
        </div>
      </div>
    </section>

    <!-- booking steps -->
    <section class="relative my-36 isolate">
      <img
        src="~/assets/img/curl.svg"
        alt="curls"
        class="absolute right-0 -z-10 -top-16"
      />
      <div class="container">
        <h2 class="text-4xl font-semibold md:text-6xl">
          Get started with booking <br />
          your flight in 3 steps
        </h2>

        <div class="grid gap-12 mt-24 md:grid-cols-3">
          <div class="flex flex-col">
            <img
              src="~/assets/img/step-search.svg"
              alt="icon"
              class="block w-12"
            />
            <p class="mt-6 mb-2 text-lg font-medium">Find Flights</p>
            <p class="">
              Look for flights to your preferred destination within and outside
              of Nigeria.
            </p>
          </div>

          <div class="flex flex-col">
            <img
              src="~/assets/img/step-arrow.svg"
              alt="icon"
              class="block w-12"
            />
            <p class="mt-6 mb-2 text-lg font-medium">Select Flights</p>
            <p class="">
              Select your flight at your own comfort and convenience with other
              passengers.
            </p>
          </div>

          <div class="flex flex-col">
            <img
              src="~/assets/img/step-ticket.svg"
              alt="icon"
              class="block w-12"
            />
            <p class="mt-6 mb-2 text-lg font-medium">Book Flights</p>
            <p class="">
              Book your flight and pay online with an option to book on-hold and
              enjoy pay later options
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- popular -->
    <section class="bg-gray-100 min-h-16 mt-28 py-28">
      <div class="container">
        <h2 class="text-4xl font-semibold md:text-6xl">
          Popular flight by <br />
          Book Cheap Flight
        </h2>

        <div class="grid gap-4 mt-12 md:grid-cols-3">
          <div
            class="h-[320px] p-6 rounded-2xl bg-[url(~/assets/img/lagos-abuja.webp)] bg-cover flex flex-col justify-end"
          >
            <div class="flex items-center gap-3 text-white">
              <span>Lagos</span>
              <img src="~/assets/img/small-arrow.svg" alt="arrow" />
              <span>Abuja</span>
            </div>
          </div>

          <div
            class="h-[320px] p-6 rounded-2xl bg-[url(~/assets/img/londo-cairo.webp)] bg-cover flex flex-col justify-end"
          >
            <div class="flex items-center gap-3 text-white">
              <span>London</span>
              <img src="~/assets/img/small-arrow.svg" alt="arrow" />
              <span>Cairo</span>
            </div>
          </div>

          <div
            class="h-[320px] p-6 rounded-2xl bg-[url(~/assets/img/dubai-maldives.webp)] bg-cover flex flex-col justify-end"
          >
            <div class="flex items-center gap-3 text-white">
              <span>Dubai</span>
              <img src="~/assets/img/small-arrow.svg" alt="arrow" />
              <span>Moldives</span>
            </div>
          </div>

          <div
            class="h-[320px] p-6 rounded-2xl bg-[url(~/assets/img/tenerife-lagos.webp)] bg-cover flex flex-col justify-end"
          >
            <div class="flex items-center gap-3 text-white">
              <span>Tenerife</span>
              <img src="~/assets/img/small-arrow.svg" alt="arrow" />
              <span>Lagos</span>
            </div>
          </div>

          <div
            class="h-[320px] p-6 rounded-2xl bg-[url(~/assets/img/rome-singapore.webp)] bg-cover flex flex-col justify-end"
          >
            <div class="flex items-center gap-3 text-white">
              <span>Rome</span>
              <img src="~/assets/img/small-arrow.svg" alt="arrow" />
              <span>Singapore</span>
            </div>
          </div>

          <div
            class="h-[320px] p-6 rounded-2xl bg-[url(~/assets/img/abuja-dublin.webp)] bg-cover flex flex-col justify-end"
          >
            <div class="flex items-center gap-3 text-white">
              <span>Abuja</span>
              <img src="~/assets/img/small-arrow.svg" alt="arrow" />
              <span>Dublin</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- newsletter -->
    <section class="bg-primary min-h-[400px] py-28">
      <div class="container grid gap-6 md:grid-cols-2">
        <div class="h-[500px] grid place-items-center">
          <img
            src="~/assets/img/newsletter.webp"
            alt="newsletter"
            class="block object-contain w-auto h-full"
          />
        </div>

        <div class="flex flex-col text-white justify-evenly">
          <h3 class="text-3xl font-semibold md:text-5xl">
            Subscribe to our newsletter
          </h3>
          <p class="text-lg">
            Stay updated to receive more deals and discounts applicable to our
            flight booking and enjoy more offers.
          </p>

          <div
            class="flex items-center h-16 gap-3 pl-4 pr-2 text-black bg-white rounded-2xl"
          >
            <input
              type="email"
              name="email"
              id="email"
              class="block w-full h-full bg-transparent focus:outline-0"
              placeholder="Enter your email address"
            />
            <button class="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing-page',
})

const states = ref(['Delta', 'Abuja', 'Lagos'])
const selectedFlightType = ref('oneway')
</script>

<style scoped></style>
