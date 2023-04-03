<template>
  <div>
    <div class="grid md:grid-cols-4 gap-6">
      <!-- stats cards -->
      <div class="rounded-xl border p-4 h-20">
        <p class="text-sm">Bookings</p>
        <p class="text-2xl font-medium">0</p>
      </div>

      <div class="rounded-xl border p-4 h-20">
        <p class="text-sm">Amount Spent</p>
        <p class="text-2xl font-medium">₦ 0</p>
      </div>

      <div class="rounded-xl border p-4 h-20">
        <p class="text-sm">Amount Saved on discount</p>
        <p class="text-2xl font-medium">₦ 0</p>
      </div>

      <div
        class="rounded-xl border-0 bg-secondary p-4 h-20 flex items-center gap-4 cursor-pointer"
        @click="addTransaction"
      >
        <div
          class="h-8 w-8 rounded-full bg-primary text-white grid place-items-center font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>

        <p class="text-primary">Create new booking</p>
      </div>
    </div>

    <div v-auto-animate class="flex flex-col">
      <!-- empty state -->
      <div
        v-if="data.length === 0"
        class="flex flex-col items-center space-y-4 mt-24"
      >
        <img src="~/assets/img/no-flights-transactions.svg" alt="icon" />
        <p class="text-lg font-medium">You have not book any flights</p>
        <p class="text-sm text-gray-400 text-center">
          Yeah, you currently have not added a bank account.<br />
          Add one today.
        </p>
        <input-btn @click="addTransaction" type="secondary"
          >Create Booking</input-btn
        >
      </div>

      <!-- flight history table -->
      <div v-else class="overflow-x-auto border rounded-xl mt-6">
        <table v-auto-animate class="w-full table-auto text-sm text-left">
          <thead class="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th class="py-3 px-6">Ticket Amount</th>
              <th class="py-3 px-6">Ticket ID</th>
              <th class="py-3 px-6">Airline</th>
              <th class="py-3 px-6">Booking Date</th>
              <th class="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody v-auto-animate class="text-gray-600 divide-y">
            <tr v-auto-animate v-for="(item, index) in data" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">
                {{ item.ticketAmount }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ item.ticketId }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ item.airline }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ moment(item.date).format("ll") }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ item.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";

const data = ref([]);

function addTransaction() {
  const ticketId = `TICKET${Math.floor(Math.random() * 500)}`;
  const ticketAmount = Math.floor(Math.random() * (500 - 100 + 1) + 100);
  const airlines = [
    "Delta Airlines",
    "United Airlines",
    "American Airlines",
    "Southwest Airlines",
  ];
  const airline = airlines[Math.floor(Math.random() * airlines.length)];
  const startDate = new Date(2022, 1, 1);
  const endDate = new Date();
  const date = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  const statuses = ["booked", "cancelled", "completed"];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  data.value.push({
    ticketId,
    ticketAmount,
    airline,
    date,
    status,
  });
}
</script>
