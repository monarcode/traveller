<template>
  <div class="min-h-[400px] flex flex-col">
    <div class="p-6 bg-primary/10">
      <h2 class="text-xl">Manage Booking</h2>
    </div>

    <div class="flex flex-col flex-grow p-6">
      <p class="text-lg">Find your Bookings</p>
      <p class="mt-1 text-sm text-gray-400">
        Enter your 10 digit booking reference number and surname and we will
        help you track it.
      </p>

      <div class="mt-auto mb-6 space-y-4">
        <input-text label="Reference ID" name="ref-id" full-width />
        <input-btn fullwidth>Search</input-btn>
      </div>
    </div>
  </div>
</template>
